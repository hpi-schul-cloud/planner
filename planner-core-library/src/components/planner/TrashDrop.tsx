import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import styled from 'styled-components';
import { DropTarget, DropTargetMonitor, ConnectDropTarget } from 'react-dnd';
import IconTrash from '../../assets/IconTrash';
import { TOPIC_INSTANCE } from './constants';

const IconContainer = styled.div`
  display: inline-block;
  padding: 10px;
  background: ${({ color }: { color: string }) => color};
`;

type DragDropRasterTopicElementType = {
  connectDropTarget?: ConnectDropTarget;
  canDrop?: boolean;
  isOver?: boolean;
};

type PropsType = {
  onElementDidDrop: (rowId: string, index: number) => void;
} & DragDropRasterTopicElementType;

const cardTarget = {
  canDrop(_: PropsType, monitor: DropTargetMonitor) {
    const { type } = monitor.getItem();

    // Only topic instances should be deletable here
    return type === TOPIC_INSTANCE;
  },
  drop(props: PropsType, monitor: DropTargetMonitor) {
    const { index, rowId } = monitor.getItem();

    props.onElementDidDrop(rowId, index);
  }
};

@DropTarget('TopicElement', cardTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
}))
class TrashDrop extends Component<PropsType> {
  render() {
    const { canDrop, isOver, connectDropTarget } = this.props;
    const containerColor = canDrop
      ? isOver
        ? '#afffb585'
        : '#ffafaf85'
      : 'none';

    return (
      connectDropTarget && (
        <IconContainer
          color={containerColor}
          innerRef={instance => {
            // @ts-ignore - We can be sure that domNode is React.Element
            const domNode: React.ReactElement<{}> = findDOMNode(instance);
            connectDropTarget(domNode);
          }}
        >
          <IconTrash color={canDrop ? '#838383' : '#e9e8e8'} />
        </IconContainer>
      )
    );
  }
}

export default TrashDrop;
