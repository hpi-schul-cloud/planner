import React, { Component } from 'react';
import styled from 'styled-components';

type ContainerType = {
  color: string;
  width: number;
  height: number;
  isInteractive: boolean;
};

const ElementContainer = styled.div`
  box-sizing: border-box;
  height: ${({ height }: TextContainerProps) => `${height}px`};
  width: ${({ width }: TextContainerProps) => `${width}px`};
  background: ${({ color }: ContainerType) => color};
  border: 1px solid #979797;
  border-radius: 5px;
  text-align: center;
  cursor: ${({ isInteractive }: ContainerType) =>
    isInteractive ? 'pointer' : 'inherit'};
  display: inline-block;
  * {
    box-sizing: border-box;
  }
  vertical-align: top;
`;

type TextContainerProps = {
  width: number;
  height: number;
};
const TextContainer = styled.div`
  user-select: none;
  pointer-events: none;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: sans-serif;
  font-size: 13px;
  /* height - border width */
  line-height: ${({ height }: TextContainerProps) => `${height - 2}px`};
  color: #4a4a4a;
`;

interface PropsType {
  width: number;
  height: number;
  text?: string;
  color: string;
  onClick?: () => void;
}

class TopicElement extends Component<PropsType> {
  render() {
    const { height, color, text, width, onClick } = this.props;

    return (
      <ElementContainer
        width={width}
        height={height}
        color={color}
        isInteractive={!!onClick}
        onClick={onClick}
      >
        <TextContainer height={height} width={width}>
          {text}
        </TextContainer>
      </ElementContainer>
    );
  }

  static defaultProps = {
    size: 'small',
    color: '#FFFFFF'
  };
}

export default TopicElement;
