import React, { Component } from 'react';
import ComponentProvider from '../provider/componentProvider';

export type PropsType = {
  rasterSize: number;
  startIndex: number;
  endIndex: number;
  id: string;
  color: string;
  size: 'small' | 'medium' | 'large';
  text?: string;
  onClick?: () => void;
};

const sizeMap = {
  small: 17,
  medium: 21,
  large: 25
};

class RasterTopicElement extends Component<PropsType> {
  render() {
    const {
      startIndex,
      endIndex,
      rasterSize,
      size,
      ...otherProps
    } = this.props;
    const width = (1 + endIndex - startIndex) * rasterSize;
    const height = sizeMap[size];

    return (
      <ComponentProvider.TopicElement
        width={width}
        height={height}
        {...otherProps}
      />
    );
  }

  static defaultProps = {
    color: '#FFF',
    size: 'small'
  };
}

export default RasterTopicElement;
