import React, { Component } from 'react';
import styled from 'styled-components';
import {
  default as DragDropRasterTopicElement,
  PropsType as DragDropRasterTopicElementPropsType
} from './dragAndDrop/DragDropRasterElement';

const Dragger = styled.div`
  position: absolute;
  width: 8px;
  z-index: 1;
`;

const LeftDragger = styled(Dragger)`
  cursor: w-resize;
  top: 0px;
  left: 0px;
  bottom: 0px;
`;
const RightDragger = styled(Dragger)`
  cursor: e-resize;
  right: 0px;
  top: 0px;
  bottom: 0px;
`;

const DraggerContainer = styled.div`
  position: relative;
  display: inline-block;
  * {
    box-sizing: border-box;
  }
`;

export type PropsType = {
  id: string;
  onChangeSizeLeft: (id: string, startIndex: number, endIndex: number) => void;
  onChangeSizeRight: (id: string, startIndex: number, endIndex: number) => void;
} & DragDropRasterTopicElementPropsType;

const RIGHT = 'RIGHT';
const LEFT = 'LEFT';

class ResizableRasterTopicElement extends Component<PropsType> {
  private topicElementRef: React.RefObject<HTMLDivElement>;
  initialX: number;
  startIndex: number;
  endIndex: number;
  dragSide: typeof RIGHT | typeof LEFT;

  constructor(props: PropsType) {
    super(props);
    this.topicElementRef = React.createRef();
  }

  setupDragLeft = () => {
    // @ts-ignore - TS does not know getBoundingClientRect is available on ref
    this.initialX = this.topicElementRef.getBoundingClientRect().x;
    this.startIndex = this.props.startIndex;
    this.endIndex = this.props.endIndex;
    this.dragSide = LEFT;
    this.setupDrag();
  };

  setupDragRight = () => {
    // @ts-ignore - TS does not know getBoundingClientRect is available on ref
    const boundingRect = this.topicElementRef.getBoundingClientRect();
    this.initialX = boundingRect.x + boundingRect.width;
    this.startIndex = this.props.startIndex;
    this.endIndex = this.props.endIndex;
    this.dragSide = RIGHT;
    this.setupDrag();
  };

  setupDrag = () => {
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);
  };

  handleMouseMove = (event: MouseEvent) => {
    const delta = event.clientX - this.initialX;
    const steps = Math.round(delta / this.props.rasterSize);

    const { startIndex, endIndex } = this;

    if (this.dragSide === RIGHT) {
      const newEndIndex =
        endIndex + steps > startIndex ? endIndex + steps : startIndex;

      this.props.onChangeSizeRight(this.props.id, startIndex, newEndIndex);
    } else if (this.dragSide === LEFT) {
      const newStartIndex =
        startIndex + steps < endIndex ? startIndex + steps : endIndex;

      this.props.onChangeSizeLeft(this.props.id, newStartIndex, endIndex);
    }
  };

  handleMouseUp = () => {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
  };

  render() {
    const { onChangeSizeLeft, onChangeSizeRight, ...props } = this.props;
    return (
      <DraggerContainer
        innerRef={x => {
          this.topicElementRef = x;
        }}
      >
        <DragDropRasterTopicElement {...props}>
          <LeftDragger onMouseDown={this.setupDragLeft} />
          <RightDragger onMouseDown={this.setupDragRight} />
        </DragDropRasterTopicElement>
      </DraggerContainer>
    );
  }
}

export default ResizableRasterTopicElement;
