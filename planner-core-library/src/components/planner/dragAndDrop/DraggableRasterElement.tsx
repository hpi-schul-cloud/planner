import React, { Component } from 'react';
import styled from 'styled-components';
import {
  DragSource,
  DragSourceCollector,
  DragSourceConnector,
  DragSourceMonitor,
  ConnectDragSource,
  ConnectDragPreview
} from 'react-dnd';
import {
  default as RasterTopicElement,
  PropsType as RasterTopicElementPropsType
} from '../RasterTopicElement';

const StyledDragContainer = styled.div`
  display: inline-block;
  cursor: move;
  opacity: ${({ isTransparent }: { isTransparent: boolean }) =>
    isTransparent ? 0 : 1};
`;

const cardSource = {
  beginDrag(props: PropsType) {
    return {
      id: props.id,
      type: 'DRAGGABLE',
      width: props.endIndex - props.startIndex,
      text: props.text,
      color: props.color
    };
  }
};

const collect: DragSourceCollector<DraggableRasterTopicElementType> = (
  connect: DragSourceConnector,
  monitor: DragSourceMonitor
) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging()
});

type DraggableRasterTopicElementType = {
  connectDragSource?: ConnectDragSource;
  connectDragPreview?: ConnectDragPreview;
  isDragging?: boolean;
};

type PropsType = RasterTopicElementPropsType &
  DraggableRasterTopicElementType & {
    isTransparentWhileDragging?: boolean;
  };

@DragSource('TopicElement', cardSource, collect)
export default class DraggableRasterTopicElement extends Component<PropsType> {
  render() {
    const {
      connectDragSource,
      connectDragPreview,
      isDragging,
      isTransparentWhileDragging,
      ...props
    } = this.props;
    const isTransparent = !!(isDragging && isTransparentWhileDragging);

    return (
      connectDragSource && (
        <StyledDragContainer
          innerRef={instance => connectDragSource(instance)}
          isTransparent={isTransparent}
        >
          <RasterTopicElement {...props} />
        </StyledDragContainer>
      )
    );
  }
}
