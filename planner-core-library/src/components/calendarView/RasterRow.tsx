import React, { Component } from 'react';
import styled from 'styled-components';
import RasterTopicElement from '../planner/RasterTopicElement';

export type TopicElementsType = {
  id: string;
  text: string;
  color: string;
  startIndex: number;
  endIndex: number;
};

type PropsType = {
  topicElements: TopicElementsType[];
  rasterSize: number;
  rasterCount: number;
  topicElementSize?: 'small' | 'medium' | 'large';
  onTopicInstanceClick: (id: string) => void;
};

type FillerElementPropsType = {
  size?: 'small' | 'medium' | 'large';
  width: number;
};

const FillerElement = styled.div<FillerElementPropsType>`
  width: ${({ width }) => `${width}px`};
  height: ${({ size }) =>
    size === 'medium' ? '21px' : size === 'large' ? '25px' : '17px'};
  display: inline-block;
`;

const RasterRowContainer = styled.div`
  display: inline-block;
`;

class InteractiveRasterRow extends Component<PropsType> {
  generateElements = () => {
    const {
      topicElements,
      rasterSize,
      rasterCount,
      topicElementSize,
      onTopicInstanceClick
    } = this.props;
    let elements = [];
    let nextIndex = 0;
    let i = 0;
    for (i = 0; i < topicElements.length; i++) {
      const { id, text, color, startIndex, endIndex } = topicElements[i];

      if (topicElements[i].startIndex > nextIndex) {
        elements.push(
          <FillerElement
            width={(startIndex - nextIndex) * rasterSize}
            size={topicElementSize}
            key={`Filler-${i}`}
          />
        );
      }
      elements.push(
        <RasterTopicElement
          id={id}
          rasterSize={rasterSize}
          startIndex={startIndex}
          endIndex={endIndex}
          color={color}
          text={text}
          key={id}
          onClick={() => onTopicInstanceClick(id)}
          size={topicElementSize}
        />
      );
      nextIndex = endIndex + 1;
    }
    if (nextIndex < rasterCount) {
      elements.push(
        <FillerElement
          width={(rasterCount - nextIndex) * rasterSize}
          size={topicElementSize}
          key={`Filler-${i}`}
        />
      );
    }

    return elements;
  };

  render() {
    const elements = this.generateElements();

    return <RasterRowContainer>{elements}</RasterRowContainer>;
  }
}

export default InteractiveRasterRow;
