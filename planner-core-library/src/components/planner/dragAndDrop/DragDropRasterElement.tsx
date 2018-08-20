import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import styled from 'styled-components';
import {
  DragSource,
  DragSourceCollector,
  DragSourceConnector,
  DragSourceMonitor,
  DropTarget,
  DropTargetMonitor,
  ConnectDragSource,
  ConnectDragPreview,
  ConnectDropTarget
} from 'react-dnd';
import {
  default as RasterTopicElement,
  PropsType as RasterTopicElementPropsType
} from '../RasterTopicElement';

const StyledDragContainer = styled.div`
  display: inline-block;
  opacity: ${({ isTransparent }: { isTransparent: boolean }) =>
    isTransparent ? 0 : 1};
`;

const StyledTopicElementContainer = styled.div`
  display: inline-block;
  cursor: move;
`;

const cardSource = {
  beginDrag(props: PropsType) {
    return {
      id: props.id,
      type: 'DRAG_DROPABLE'
    };
  }
};

const cardTarget = {
  canDrop() {
    return false;
  },

  hover(props: PropsType, monitor: DropTargetMonitor) {
    const { id: draggedId, type } = monitor.getItem();
    const { id: overId } = props;
    if (draggedId !== overId) {
      console.log('Hello from RasterElement');
      console.log(`DragId ${draggedId} - OverId ${overId}`);
    }
  }
};

const collect: DragSourceCollector<DragDropRasterTopicElementType> = (
  connect: DragSourceConnector,
  monitor: DragSourceMonitor
) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
});

type DragDropRasterTopicElementType = {
  connectDragSource?: ConnectDragSource;
  connectDropTarget?: ConnectDropTarget;
  isDragging?: boolean;
};

export type PropsType = RasterTopicElementPropsType &
  DragDropRasterTopicElementType & {
    isTransparentWhileDragging?: boolean;
  };

@DropTarget('TopicElement', cardTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))
@DragSource('TopicElement', cardSource, collect)
export default class DragDropRasterTopicElement extends Component<PropsType> {
  render() {
    const {
      connectDragSource,
      connectDropTarget,
      isDragging,
      isTransparentWhileDragging,
      ...props
    } = this.props;
    const isTransparent = !!(isDragging && isTransparentWhileDragging);

    return (
      connectDragSource &&
      connectDropTarget && (
        <StyledDragContainer
          innerRef={instance => {
            // @ts-ignore - We can be sure that domNode is React.Element
            const domNode: React.ReactElement<{}> = findDOMNode(instance);
            connectDropTarget(domNode);
          }}
          isTransparent={isTransparent}
        >
          {this.props.children}
          <StyledTopicElementContainer
            innerRef={instance => {
              // @ts-ignore - We can be sure that domNode is React.Element
              const domNode: React.ReactElement<{}> = findDOMNode(instance);
              connectDragSource(domNode);
            }}
          >
            <RasterTopicElement {...props} />
          </StyledTopicElementContainer>
        </StyledDragContainer>
      )
    );
  }
}
