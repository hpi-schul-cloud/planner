import React, { Component } from 'react';
import styled from 'styled-components';
import StylesProvider, {
  GeneralStylesType
} from '../provider/generalStylesProvider';

type ContainerType = {
  color: string;
  width?: number;
  isInteractive: boolean;
};

const ElementContainer = styled.div<ContainerType>`
  box-sizing: border-box;
  width: ${({ width }) => (width ? `${width}px` : 'fit-content')};
  background: ${({ color }) => color};
  border: 1px solid #979797;
  border-radius: 5px;
  text-align: center;
  cursor: ${({ isInteractive }) => (isInteractive ? 'pointer' : 'inherit')};
  display: inline-block;
  * {
    box-sizing: border-box;
  }
  vertical-align: top;
`;

type TextContainerProps = {
  styles: GeneralStylesType;
  size: 'small' | 'medium' | 'large';
};
const TextContainer = styled.div`
  user-select: none;
  pointer-events: none;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: ${({ styles }: TextContainerProps) => styles['font-family']};
  font-size: 13px;
  padding: ${({ size }: TextContainerProps) => {
    if (size === 'small') return '0px 5px';
    else if (size === 'medium') return '2px 5px';
    else return '4px 10px';
  }};
  color: ${({ styles }: TextContainerProps) => styles.strongTextColor};
`;

export interface PropsType {
  width?: number;
  text?: string;
  color: string;
  onClick?: () => void;
  size: 'small' | 'medium' | 'large';
}

class TopicElement extends Component<PropsType> {
  render() {
    const { size, color, text, width, onClick } = this.props;

    return (
      <ElementContainer
        width={width}
        color={color}
        isInteractive={!!onClick}
        onClick={onClick}
      >
        <TextContainer size={size} styles={StylesProvider.styles}>
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
