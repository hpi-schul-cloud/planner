import React, { Component } from 'react';
import styled from 'styled-components';
import StylesProvider from '../provider/generalStylesProvider';

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
    isInteractive ? 'pointer' : 'inherit'};
  display: inline-block;
  * {
    box-sizing: border-box;
  }
  vertical-align: top;
`;

const TextContainer = styled.div`
  user-select: none;
  pointer-events: none;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: ${StylesProvider.generalStyles['font-family']};
  font-size: 13px;
  padding: ${({ size }: { size: 'small' | 'medium' | 'large' }) => {
    if (size === 'small') return '0px 5px';
    else if (size === 'medium') return '2px 5px';
    else return '4px 10px';
  }};
  color: ${StylesProvider.generalStyles.strongTextColor};
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
    color: '#FFFFFF'
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
