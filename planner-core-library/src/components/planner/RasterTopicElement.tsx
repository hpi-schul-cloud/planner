import React, { Component } from 'react';
import {
  default as TopicElement,
  PropsType as TopicElementPropsType
} from './TopicElement';

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type PropsType = {
  rasterSize: number;
  rasterCount: number;
} & Omit<TopicElementPropsType, 'width'>;

class RasterTopicElement extends Component<PropsType> {
  render() {
    const { rasterCount, rasterSize, ...otherProps } = this.props;

    return <TopicElement width={rasterSize * rasterCount} {...otherProps} />;
  }
}

export default RasterTopicElement;
