import React, { Component } from 'react';
import styled from 'styled-components';
import map from 'lodash/map';
import ResizableRasterTopicElement from './ResizableRasterTopicElement';

export type TopicElementsType = {
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
  rowId: string;
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

    if (side === 'LEFT') {
      let i = endIndex - 1;
      while (true) {
        if (i < 0) break;
        if (i >= startIndex) {
          if (newRasterMap[i] === '') {
            newRasterMap[i] = id;
          } else if (newRasterMap[i] !== id) {
            if (newRasterMap[i] === newRasterMap[i - 1]) newRasterMap[i] = id;
            else break;
          }
        } else {
          if (newRasterMap[i] === id) newRasterMap[i] = '';
          else break;
        }
        i--;
      }
    } else if (side === 'RIGHT') {
      let i = startIndex + 1;
      while (true) {
        if (i >= newRasterMap.length) break;
        if (i <= endIndex) {
          if (newRasterMap[i] === '') {
            newRasterMap[i] = id;
          } else if (newRasterMap[i] !== id) {
            if (newRasterMap[i] === newRasterMap[i + 1]) newRasterMap[i] = id;
            else break;
          }
        } else {
          if (newRasterMap[i] === id) newRasterMap[i] = '';
          else break;
        }
        i++;
      }
    }

    this.setState({ rasterMap: newRasterMap });
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
      startIndex: number,
      endIndex: number,
      lastElement: string
    ) => {
      if (lastElement === '') {
        elements.push(<FillerElement width={this.props.rasterSize} />);
      } else {
        const { id, text, color } = this.props.topicElements[lastElement];

        elements.push(
          <ResizableRasterTopicElement
            id={id}
            isTransparentWhileDragging={true}
            onChangeSizeLeft={this.handleElementSizeChangeLeft}
            onChangeSizeRight={this.handleElementSizeChangeRight}
            rasterSize={this.props.rasterSize}
            startIndex={startIndex}
            endIndex={endIndex}
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
          pushNewElement(currentElementStartIndex, i - 1, lastElement);
          lastElement = rasterMap[i];
          currentElementStartIndex = i;
        }
      }
      // Push last element not covered by loop
      pushNewElement(
        currentElementStartIndex,
        rasterMap.length - 1,
        lastElement
      );
    }

    return elements;
  };

  render() {
    const elements = this.generateElements();

    return <div>{elements}</div>;
  }
}

export default InteractiveRasterRow;
