import React, { Component } from 'react';
import {
  default as TopicElement,
  PropsType as TopicElementPropsType
} from './TopicElement';

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type PropsType = {
  rasterSize: number;
  startIndex: number;
  endIndex: number;
} & Omit<TopicElementPropsType, 'width'>;

class RasterTopicElement extends Component<PropsType> {
  render() {
    const { startIndex, endIndex, rasterSize, ...otherProps } = this.props;
    const width = (1 + endIndex - startIndex) * rasterSize;

    return <TopicElement width={width} {...otherProps} />;
  }
}

export default RasterTopicElement;
