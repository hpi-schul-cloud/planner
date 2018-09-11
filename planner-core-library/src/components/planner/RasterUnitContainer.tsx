import React, { Component } from 'react';
import styled from 'styled-components';
import InteractiveRasterUnit from './InteractiveRasterUnit';
import { TopicElementsType } from './InteractiveRasterRow';
import TimeRasterWrapper from './TimeRasterWrapper';
import RowCaptions from './RowCaptions';

type ClassInstanceType = {
  [classId: string]: {
    id: string;
    name: string;
    topics: TopicElementsType[];
  };
};

interface TopicTemplateType {
  id: string;
  text: string;
  width: number;
  color: string;
}

interface StateType {
  classInstances: ClassInstanceType;
}

interface PropsType {
  rasterCount: number;
  rasterSize: number;
  topicTemplates: TopicTemplateType[];
  classInstances: ClassInstanceType;
  classLevelId: string;
  onAddTemplateClick: (classLevelId: string) => void;
}

const FlexContainer = styled.div`
  display: flex;
`;

class RasterUnitContainer extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      classInstances: props.classInstances
    };
  }

  wrapRasterRowsWithGrid = (children: JSX.Element | JSX.Element[]) => {
    const rasterColumnStringMap = {
      0: 'August',
      4: 'September',
      8: 'Oktober',
      12: 'November',
      16: 'Dezember'
    };
    const rasterColumnColorMap = {
      10: '#FBFFCF',
      11: '#FBFFCF',
      12: '#FBFFCF',
      17: '#FBFFCF',
      18: '#FBFFCF'
    };
    return (
      <TimeRasterWrapper
        rasterCount={this.props.rasterCount}
        rasterSize={this.props.rasterSize}
        rasterColumnColorMap={rasterColumnColorMap}
        rasterColumnLabelMap={rasterColumnStringMap}
      >
        {children}
      </TimeRasterWrapper>
    );
  };

  updateClassInstance = (classInstances: ClassInstanceType) => {
    this.setState({
      classInstances
    });
  };

  render() {
    const labels = Object.values(this.state.classInstances).map(
      classInstance => {
        const freeSlotsCount = classInstance.topics.reduce(
          (count, topic) => count - (topic.endIndex - topic.startIndex + 1),
          this.props.rasterCount
        );
        return {
          text: classInstance.name,
          subText: freeSlotsCount ? `${freeSlotsCount} frei` : ''
        };
      }
    );

    return (
      <FlexContainer>
        <RowCaptions labels={labels} />
        <InteractiveRasterUnit
          updateClassInstances={this.updateClassInstance}
          classInstances={this.state.classInstances}
          topicTemplates={this.props.topicTemplates}
          rasterCount={this.props.rasterCount}
          rasterSize={this.props.rasterSize}
          wrapRasterRows={this.wrapRasterRowsWithGrid}
        />
      </FlexContainer>
    );
  }
}

export default RasterUnitContainer;
