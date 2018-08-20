import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import styled, { injectGlobal } from 'styled-components';
import { DropTarget, DropTargetMonitor, ConnectDropTarget } from 'react-dnd';
import map from 'lodash/map';
import { XYCoord } from 'dnd-core';
import ResizableRasterTopicElement from './ResizableRasterTopicElement';

export type TopicElementsType = {
  [id: string]: {
    id: string;
    text: string;
    color: string;
    startIndex: number;
    endIndex: number;
  };
};

type DragDropRasterTopicElementType = {
  connectDropTarget?: ConnectDropTarget;
};

type PropsType = {
  topicElements: TopicElementsType;
  rasterSize: number;
  rasterCount: number;
  rowId: string;
} & DragDropRasterTopicElementType;

interface StateType {
  rasterMap: string[];
}

const FillerElement = styled.div`
  width: ${({ width }: { width: number }) => `${width}px`};
  height: 1px;
  display: inline-block;
`;

const RasterRowContainer = styled.div`
  display: inline-block;
`;

const cardTarget = {
  canDrop() {
    return true;
  },

  hover(
    props: PropsType,
    monitor: DropTargetMonitor,
    component: InteractiveRasterRow
  ) {
    if (!component || !monitor.isOver({ shallow: true })) {
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

    const { id: draggedId, type } = monitor.getItem();

    console.log(Math.floor(hoverClientY / props.rasterSize));
  }
};

@DropTarget('TopicElement', cardTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))
class InteractiveRasterRow extends Component<PropsType, StateType> {
  state: StateType = {
    rasterMap: []
  };

  constructor(props: PropsType) {
    super(props);
    const rasterMap: string[] = Array(props.rasterCount).fill('');
    map(props.topicElements, element => {
      for (let i = element.startIndex; i <= element.endIndex; i++) {
        if (rasterMap[i] === '') rasterMap[i] = element.id;
        else break;
      }
    });

    this.state = {
      rasterMap
    };
  }

  handleElementSizeChange = (
    id: string,
    side: 'LEFT' | 'RIGHT',
    startIndex: number,
    endIndex: number
  ) => {
    const newRasterMap = [...this.state.rasterMap];

    if (side === 'LEFT') {
      let i = endIndex - 1;
      while (true) {
        if (i < 0) break;
        if (i >= startIndex) {
          if (newRasterMap[i] === '') {
            newRasterMap[i] = id;
          } else if (newRasterMap[i] !== id) {
            if (newRasterMap[i] === newRasterMap[i - 1]) newRasterMap[i] = id;
            else break;
          }
        } else {
          if (newRasterMap[i] === id) newRasterMap[i] = '';
          else break;
        }
        i--;
      }
    } else if (side === 'RIGHT') {
      let i = startIndex + 1;
      while (true) {
        if (i >= newRasterMap.length) break;
        if (i <= endIndex) {
          if (newRasterMap[i] === '') {
            newRasterMap[i] = id;
          } else if (newRasterMap[i] !== id) {
            if (newRasterMap[i] === newRasterMap[i + 1]) newRasterMap[i] = id;
            else break;
          }
        } else {
          if (newRasterMap[i] === id) newRasterMap[i] = '';
          else break;
        }
        i++;
      }
    }

    this.setState({ rasterMap: newRasterMap });
  };

  handleElementSizeChangeLeft = (
    id: string,
    startIndex: number,
    endIndex: number
  ) => this.handleElementSizeChange(id, 'LEFT', startIndex, endIndex);
  handleElementSizeChangeRight = (
    id: string,
    startIndex: number,
    endIndex: number
  ) => this.handleElementSizeChange(id, 'RIGHT', startIndex, endIndex);

  generateElements = () => {
    const { rasterMap } = this.state;
    const elements: JSX.Element[] = [];
    const pushNewElement = (
      startIndex: number,
      endIndex: number,
      lastElement: string
    ) => {
      if (lastElement === '') {
        elements.push(<FillerElement width={this.props.rasterSize} />);
      } else {
        const { id, text, color } = this.props.topicElements[lastElement];

        elements.push(
          <ResizableRasterTopicElement
            id={id}
            isTransparentWhileDragging={true}
            onChangeSizeLeft={this.handleElementSizeChangeLeft}
            onChangeSizeRight={this.handleElementSizeChangeRight}
            rasterSize={this.props.rasterSize}
            startIndex={startIndex}
            endIndex={endIndex}
            color={color}
            text={text}
            key={id}
          />
        );
      }
    };

    if (rasterMap.length) {
      let lastElement = rasterMap[0];
      let currentElementStartIndex = 0;

      for (let i = 1; i < rasterMap.length; i++) {
        if (rasterMap[i] !== lastElement || rasterMap[i] === '') {
          pushNewElement(currentElementStartIndex, i - 1, lastElement);
          lastElement = rasterMap[i];
          currentElementStartIndex = i;
        }
      }
      // Push last element not covered by loop
      pushNewElement(
        currentElementStartIndex,
        rasterMap.length - 1,
        lastElement
      );
    }

    return elements;
  };

  render() {
    const elements = this.generateElements();
    const { connectDropTarget } = this.props;

    return (
      connectDropTarget && (
        <RasterRowContainer
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
