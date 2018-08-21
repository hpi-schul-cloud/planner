import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import styled from 'styled-components';
import {
  DragSource,
  DragSourceCollector,
  DragSourceConnector,
  DragSourceMonitor,
  ConnectDragSource
} from 'react-dnd';
import RasterTopicElement, {
  PropsType as RasterTopicElementPropsType
} from '../RasterTopicElement';

const StyledDragContainer = styled.div`
  display: inline-block;
  opacity: ${({ isTransparent }: { isTransparent: boolean }) =>
    isTransparent ? 0 : 1};
  * {
    box-sizing: border-box;
  }
`;

const StyledTopicElementContainer = styled.div`
  display: inline-block;
  cursor: move;
`;

const elementSource = {
  beginDrag(props: PropsType) {
    return {
      id: props.id,
      index: props.index,
      type: props.type,
      width: props.endIndex - props.startIndex,
      text: props.text,
      rowId: props.rowId
    };
  },
  endDrag(props: PropsType, monitor: DragSourceMonitor) {
    if (monitor.didDrop()) {
      console.log('Did drop');
    } else {
      console.log('Rejected');
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
  isDragging?: boolean;
};

export type PropsType = RasterTopicElementPropsType &
  DragDropRasterTopicElementType & {
    isTransparentWhileDragging?: boolean;
    type: string;
    rowId?: string;
    index?: number;
  };

@DragSource('TopicElement', elementSource, collect)
export default class DragDropRasterTopicElement extends Component<PropsType> {
  render() {
    const {
      connectDragSource,
      isDragging,
      isTransparentWhileDragging,
      type,
      ...props
    } = this.props;
    const isTransparent = !!(isDragging && isTransparentWhileDragging);

    return (
      connectDragSource && (
        <StyledDragContainer isTransparent={isTransparent}>
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
