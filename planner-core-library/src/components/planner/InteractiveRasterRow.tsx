import React, { Component } from 'react';
import styled from 'styled-components';
import map from 'lodash/map';
import ResizableRasterTopicElement from './ResizableRasterTopicElement';

type TopicElementsType = {
  [id: string]: {
    id: string;
    text: string;
    color: string;
    startIndex: number;
    endIndex: number;
  };
};

interface PropsType {
  topicElements: TopicElementsType;
  rasterSize: number;
  rasterCount: number;
}

interface StateType {
  rasterMap: string[];
}

const FillerElement = styled.div`
  width: ${({ width }: { width: number }) => `${width}px`};
  height: 1px;
  display: inline-block;
`;

class InteractiveRasterRow extends Component<PropsType, StateType> {
  state: StateType = {
    rasterMap: []
  };

  constructor(props: PropsType) {
    super(props);
    const rasterMap: string[] = Array(props.rasterCount).fill('');
    map(props.topicElements, element => {
      for (let i = element.startIndex; i <= element.endIndex; i++) {
        if (rasterMap[i] === '') rasterMap[i] = element.id;
        else break;
      }
    });

    this.state = {
      rasterMap
    };
  }

  handleElementSizeChange = (
    id: string,
    side: 'LEFT' | 'RIGHT',
    startIndex: number,
    endIndex: number
  ) => {
    const newRasterMap = [...this.state.rasterMap];

    console.log(`${id}: ${side} ${startIndex}-${endIndex}`);
  };
  handleElementSizeChangeLeft = (
    id: string,
    startIndex: number,
    endIndex: number
  ) => this.handleElementSizeChange(id, 'LEFT', startIndex, endIndex);
  handleElementSizeChangeRight = (
    id: string,
    startIndex: number,
    endIndex: number
  ) => this.handleElementSizeChange(id, 'RIGHT', startIndex, endIndex);

  generateElements = () => {
    const { rasterMap } = this.state;
    const elements: JSX.Element[] = [];
    const pushNewElement = (
      i: number,
      currentElementStartIndex: number,
      lastElement: string
    ) => {
      const count = i - currentElementStartIndex;

      if (lastElement === '') {
        elements.push(<FillerElement width={count * this.props.rasterSize} />);
      } else {
        const { id, text, color } = this.props.topicElements[lastElement];

        elements.push(
          <ResizableRasterTopicElement
            id={id}
            onChangeSizeLeft={this.handleElementSizeChangeLeft}
            onChangeSizeRight={this.handleElementSizeChangeRight}
            rasterSize={this.props.rasterSize}
            startIndex={currentElementStartIndex}
            endIndex={i}
            color={color}
            text={text}
            key={id}
          />
        );
      }
    };

    if (rasterMap.length) {
      let lastElement = rasterMap[0];
      let currentElementStartIndex = 0;

      for (let i = 1; i < rasterMap.length; i++) {
        if (rasterMap[i] !== lastElement || rasterMap[i] === '') {
          pushNewElement(i, currentElementStartIndex, lastElement);
          lastElement = rasterMap[i];
          currentElementStartIndex = i;
        }
      }
      // Push last element not covered by loop
      pushNewElement(rasterMap.length, currentElementStartIndex, lastElement);
    }

    return elements;
  };

  render() {
    const elements = this.generateElements();

    return <div>{elements}</div>;
  }
}

export default InteractiveRasterRow;
