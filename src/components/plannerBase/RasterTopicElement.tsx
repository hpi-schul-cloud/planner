import React, { Component } from 'react';
import ComponentProvider from '../provider/componentProvider';
import { TOPIC_ELEMENT_SIZE_MAP } from '../constants';

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
    const height = TOPIC_ELEMENT_SIZE_MAP[size];

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
