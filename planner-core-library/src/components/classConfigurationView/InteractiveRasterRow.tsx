import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import styled from 'styled-components';
import { DropTarget, DropTargetMonitor, ConnectDropTarget } from 'react-dnd';
import { XYCoord } from 'dnd-core';
import ResizableRasterTopicElement from './ResizableRasterTopicElement';
import { TOPIC_INSTANCE, TOPIC_TEMPLATE } from './constants';
import TopicTooltip from './TopicTooltip';

export type TopicElementsType = {
  id: string;
  text: string;
  color: string;
  startIndex: number;
  endIndex: number;
};

type DragDropRasterTopicElementType = {
  connectDropTarget?: ConnectDropTarget;
  canDrop?: boolean;
  isOver?: boolean;
};

type PropsType = {
  topicElements: TopicElementsType[];
  rasterSize: number;
  rasterCount: number;
  rowId: string;
  classLevelId: string;
  updateElements: (topicElements: TopicElementsType[]) => void;
  onElementDidNotDrop: () => void;
  onElementDidDrop: () => void;
  softRelocateTopicElement: (
    rowId: string,
    elementIndex: number,
    insertStartIndex: number,
    width: number,
    elementValues: Partial<TopicElementsType>
  ) => void;
  softInsertTopicElement: (
    rowId: string,
    insertStartIndex: number,
    width: number,
    elementValues: Partial<TopicElementsType>
  ) => void;
} & DragDropRasterTopicElementType;

const FillerElement = styled.div`
  width: ${({ width }: { width: number }) => `${width}px`};
  height: 1px;
  display: inline-block;
`;

const RasterRowContainer = styled.div`
  display: inline-block;
  background: ${({ background }: { background: string }) => background};
`;

const cardTarget = {
  canDrop(props: PropsType, monitor: DropTargetMonitor) {
    const { type, rowId, classLevelId } = monitor.getItem();

    if (type === TOPIC_INSTANCE) {
      // Dragging between rows is not allowed
      return rowId === props.rowId;
    } else if (type === TOPIC_TEMPLATE) {
      return props.classLevelId === classLevelId;
    } else return true;
  },
  hover(
    props: PropsType,
    monitor: DropTargetMonitor,
    component: InteractiveRasterRow
  ) {
    if (
      !component ||
      !monitor.isOver({ shallow: true }) ||
      !monitor.canDrop()
    ) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = (findDOMNode(
      component
    ) as Element).getBoundingClientRect();
    // Determine mouse position
    const clientOffset = monitor.getSourceClientOffset();
    // Get pixels to the left
    const hoverClientY = (clientOffset as XYCoord).x - hoverBoundingRect.left;
    let insertStartIndex = Math.round(hoverClientY / props.rasterSize);
    insertStartIndex =
      insertStartIndex < 0
        ? 0
        : insertStartIndex >= props.rasterCount
          ? props.rasterCount - 1
          : insertStartIndex;

    const { type, width, id, text, color } = monitor.getItem();

    // Call SoftInsert from InteractiveRasterUnit
    // With: rowId, insertionIndex, width
    if (type === TOPIC_INSTANCE) {
      const { rowId, index: elementIndex } = monitor.getItem();
      // Only if value actually changed, relocate
      if (props.topicElements[elementIndex].startIndex !== insertStartIndex) {
        props.softRelocateTopicElement(
          rowId,
          elementIndex,
          insertStartIndex,
          width,
          { id, text, color }
        );
      }
    } else if (type === TOPIC_TEMPLATE) {
      props.softInsertTopicElement(props.rowId, insertStartIndex, width, {
        text,
        color
      });
    }
  },
  drop(props: PropsType) {
    props.onElementDidDrop();
  }
};

@DropTarget('TopicElement', cardTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
}))
class InteractiveRasterRow extends Component<PropsType> {
  generateAndCommitElementChanges(changes: {
    [index: number]: Partial<TopicElementsType>;
  }) {
    let newTopicElements = [...this.props.topicElements];
    Object.keys(changes).forEach(key => {
      newTopicElements = [
        ...newTopicElements.slice(0, +key),
        {
          ...this.props.topicElements[key],
          ...changes[key]
        },
        ...newTopicElements.slice(+key + 1, newTopicElements.length)
      ];
    });

    this.props.updateElements(newTopicElements);
  }

  resizeElementLeft = (
    oldStartIndex: number,
    newStartIndex: number,
    index: number
  ) => {
    if (oldStartIndex > newStartIndex && index > 0) {
      // Size increased & not first element -> Investigate left neighbor
      const {
        startIndex: neighborStartIndex,
        endIndex: neighborEndIndex
      } = this.props.topicElements[index - 1];
      if (neighborEndIndex >= newStartIndex) {
        if (newStartIndex > neighborStartIndex) {
          // Crop neighborEndIndex to startIndex - 1
          this.generateAndCommitElementChanges({
            [index - 1]: { endIndex: newStartIndex - 1 },
            [index]: { startIndex: newStartIndex }
          });
        } else {
          // Crop neighborEndIndex to neighborStartIndex + Crop startIndex to be neighborStartIndex + 1
          this.generateAndCommitElementChanges({
            [index - 1]: { endIndex: neighborStartIndex },
            [index]: { startIndex: neighborStartIndex + 1 }
          });
        }
      } else {
        // New startIndex does not interfere with neighbor -> Trivial
        this.generateAndCommitElementChanges({
          [index]: { startIndex: newStartIndex }
        });
      }
    } else {
      // Size reduced -> Trivial
      this.generateAndCommitElementChanges({
        [index]: { startIndex: newStartIndex }
      });
    }
  };

  resizeElementRight = (
    oldEndIndex: number,
    newEndIndex: number,
    index: number
  ) => {
    if (
      newEndIndex > oldEndIndex &&
      index !== this.props.topicElements.length - 1
    ) {
      // Size increased & not last element -> Investigate right neighbor
      const {
        startIndex: neighborStartIndex,
        endIndex: neighborEndIndex
      } = this.props.topicElements[index + 1];
      if (newEndIndex >= neighborStartIndex) {
        if (newEndIndex < neighborEndIndex) {
          // Crop neighborEndIndex to startIndex - 1
          this.generateAndCommitElementChanges({
            [index + 1]: { startIndex: newEndIndex + 1 },
            [index]: { endIndex: newEndIndex }
          });
        } else {
          // Crop neighborEndIndex to neighborStartIndex + Crop startIndex to be neighborStartIndex + 1
          this.generateAndCommitElementChanges({
            [index + 1]: { startIndex: neighborEndIndex },
            [index]: { endIndex: neighborEndIndex - 1 }
          });
        }
      } else {
        // New startIndex does not interfere with neighbor -> Trivial
        this.generateAndCommitElementChanges({
          [index]: { endIndex: newEndIndex }
        });
      }
    } else {
      // Size reduced -> Trivial
      this.generateAndCommitElementChanges({
        [index]: { endIndex: newEndIndex }
      });
    }
  };

  handleElementSizeChangeLeft = (
    id: string,
    index: number,
    startIndex: number,
    endIndex: number
  ) => {
    const currentElement = this.props.topicElements[index];
    const { startIndex: oldStartIndex } = currentElement;
    const newStartIndex = startIndex < 0 ? 0 : startIndex;

    this.resizeElementLeft(oldStartIndex, newStartIndex, index);
  };

  handleElementSizeChangeRight = (
    id: string,
    index: number,
    startIndex: number,
    endIndex: number
  ) => {
    const currentElement = this.props.topicElements[index];
    const { endIndex: oldEndIndex } = currentElement;
    const newEndIndex =
      endIndex >= this.props.rasterCount
        ? this.props.rasterCount - 1
        : endIndex;

    this.resizeElementRight(oldEndIndex, newEndIndex, index);
  };

  generateElements = () => {
    const {
      topicElements,
      rasterSize,
      rasterCount,
      rowId,
      onElementDidNotDrop
    } = this.props;
    let elements = [];
    let nextIndex = 0;
    let i = 0;
    for (i = 0; i < topicElements.length; i++) {
      const { id, text, color, startIndex, endIndex } = topicElements[i];

      if (topicElements[i].startIndex > nextIndex) {
        elements.push(
          <FillerElement
            width={(startIndex - nextIndex) * rasterSize}
            key={`Filler-${i}`}
          />
        );
      }
      elements.push(
        <TopicTooltip
          isDisabled={this.props.isOver}
          onEditClick={() => {
            console.log('edit ' + id);
          }}
        >
          <ResizableRasterTopicElement
            id={id}
            index={i}
            rowId={rowId}
            type={TOPIC_INSTANCE}
            isTransparentWhileDragging={false}
            onChangeSizeLeft={this.handleElementSizeChangeLeft}
            onChangeSizeRight={this.handleElementSizeChangeRight}
            onElementDidNotDrop={onElementDidNotDrop}
            rasterSize={rasterSize}
            startIndex={startIndex}
            endIndex={endIndex}
            color={color}
            text={text}
            key={id}
          />
        </TopicTooltip>
      );
      nextIndex = endIndex + 1;
    }
    if (nextIndex < rasterCount) {
      elements.push(
        <FillerElement
          width={(rasterCount - nextIndex) * rasterSize}
          key={`Filler-${i}`}
        />
      );
    }

    return elements;
  };

  render() {
    const elements = this.generateElements();
    const { connectDropTarget, isOver, canDrop } = this.props;
    const rasterRowState = canDrop
      ? isOver
        ? '#afffb585'
        : '#aff0ff85'
      : 'none';

    return (
      connectDropTarget && (
        <RasterRowContainer
          background={rasterRowState}
          innerRef={instance => {
            // @ts-ignore - We can be sure that domNode is React.Element
            const domNode: React.ReactElement<{}> = findDOMNode(instance);
            connectDropTarget(domNode);
          }}
        >
          {elements}
        </RasterRowContainer>
      )
    );
  }
}

export default InteractiveRasterRow;
