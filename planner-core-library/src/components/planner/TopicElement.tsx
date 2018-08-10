import React, { Component } from 'react';
import styled from 'styled-components';

type ContainerType = {
  color: string;
  width?: number;
  isInteractive: boolean;
};
const ElementContainer = styled.div`
  width: ${({ width }: ContainerType) =>
    width ? `${width}px` : 'fit-content'};
  background: ${({ color }: ContainerType) => color};
  border: 1px solid #979797;
  border-radius: 5px;
  text-align: center;
  cursor: ${({ isInteractive }: ContainerType) =>
    isInteractive ? 'pointer' : 'default'};
`;

const TextContainer = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: sans-serif;
  font-size: 13px;
  padding: ${({ size }: { size: 'small' | 'medium' | 'large' }) => {
    if (size === 'small') return '0px 5px';
    else if (size === 'medium') return '2px 5px';
    else return '4px 10px';
  }};
`;

export interface PropsType {
  width?: number;
  text?: string;
  color?: string;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
}

class TopicElement extends Component<PropsType> {
  static defaultProps = {
    size: 'small',
    color: '#92DB92'
  };

  render() {
    const { size, color, text, width, onClick } = this.props;

    return (
      <ElementContainer
        width={width}
        color={color!}
        isInteractive={!!onClick}
        onClick={onClick}
      >
        <TextContainer size={size!}>{text}</TextContainer>
      </ElementContainer>
    );
  }
}

export default TopicElement;
