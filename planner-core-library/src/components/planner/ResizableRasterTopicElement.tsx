import React, { Component } from 'react';
import styled from 'styled-components';
import {
  default as RasterTopicElement,
  PropsType as RasterTopicElementPropsType
} from './RasterTopicElement';

const Dragger = styled.div`
  position: absolute;
  cursor: ew-resize;
  width: 8px;
  height: 100%;
  z-index: 1;
`;

const LeftDragger = styled(Dragger)`
  top: 0px;
  left: 0px;
`;
const RightDragger = styled(Dragger)`
  right: 0px;
  top: 0px;
`;

const DraggerContainer = styled.div`
  position: relative;
  display: inline-block;
`;

type PropsType = {
  onChangeSizeLeft: (newSize: number) => void;
  onChangeSizeRight: (newSize: number) => void;
} & RasterTopicElementPropsType;

const RIGHT = 'RIGHT';
const LEFT = 'LEFT';

class ResizableRasterTopicElement extends Component<PropsType> {
  private topicElementRef: React.RefObject<HTMLDivElement>;
  initialX: number;
  dragSide: typeof RIGHT | typeof LEFT;

  constructor(props: PropsType) {
    super(props);
    this.topicElementRef = React.createRef();
  }

  setupDragLeft = () => {
    // @ts-ignore - TS does not know getBoundingClientRect is available on ref
    this.initialX = this.topicElementRef.getBoundingClientRect().x;
    this.dragSide = LEFT;
    this.setupDrag();
  };

  setupDragRight = () => {
    // @ts-ignore - TS does not know getBoundingClientRect is available on ref
    const boundingRect = this.topicElementRef.getBoundingClientRect();
    this.initialX = boundingRect.x + boundingRect.width;
    this.dragSide = RIGHT;
    this.setupDrag();
  };

  setupDrag = () => {
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);
  };

  handleMouseMove = (event: MouseEvent) => {
    const delta = event.clientX - this.initialX;
    const steps =
      delta >= 0
        ? Math.floor(delta / this.props.rasterSize)
        : Math.ceil(delta / this.props.rasterSize);

    if (steps !== 0) {
      if (this.dragSide === RIGHT) {
        const newSize =
          this.props.rasterCount + steps > 0
            ? this.props.rasterCount + steps
            : 1;

        this.props.onChangeSizeRight(newSize);
      } else if (this.dragSide === LEFT) {
        const newSize =
          this.props.rasterCount - steps > 0
            ? this.props.rasterCount - steps
            : 1;

        this.props.onChangeSizeLeft(newSize);
      }
    }
  };

  handleMouseUp = () => {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
  };

  render() {
    return (
      <DraggerContainer
        innerRef={x => {
          this.topicElementRef = x;
        }}
      >
        <LeftDragger onMouseDown={this.setupDragLeft} />
        <RightDragger onMouseDown={this.setupDragRight} />
        <RasterTopicElement {...this.props} />
      </DraggerContainer>
    );
  }
}

export default ResizableRasterTopicElement;
