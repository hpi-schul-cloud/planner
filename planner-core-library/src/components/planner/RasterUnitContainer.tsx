import React, { Component } from 'react';
import styled from 'styled-components';
import InteractiveRasterUnit from './InteractiveRasterUnit';
import { TopicElementsType } from './InteractiveRasterRow';
import TimeRasterWrapper from './TimeRasterWrapper';
import RowCaptions from './RowCaptions';
import ComponentProvider from '../provider/componentProvider';

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

interface PropsType {
  rasterCount: number;
  rasterSize: number;
  topicTemplates: TopicTemplateType[];
  classInstances: ClassInstanceType;
  classLevelId: string;
  onAddTemplateClick: (classLevelId: string) => void;
  onUpdate: (classLevelId: string, classes: ClassInstanceType) => void;
}

const FlexContainer = styled.div`
  display: flex;
`;
const FlexChild = styled.div`
  min-width: 0px;
`;

class RasterUnitContainer extends Component<PropsType> {
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
        columnColorMap={rasterColumnColorMap}
        topLabelsMap={rasterColumnStringMap}
      >
        {children}
      </TimeRasterWrapper>
    );
  };

  updateClassInstance = (classInstances: ClassInstanceType) => {
    this.props.onUpdate(this.props.classLevelId, classInstances);
  };

  render() {
    const { onAddTemplateClick } = this.props;
    const labels = Object.values(this.props.classInstances).map(
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
      <>
        <FlexContainer>
          <RowCaptions labels={labels} />
          <FlexChild>
            <InteractiveRasterUnit
              updateClassInstances={this.updateClassInstance}
              classInstances={this.props.classInstances}
              topicTemplates={this.props.topicTemplates}
              rasterCount={this.props.rasterCount}
              rasterSize={this.props.rasterSize}
              wrapRasterRows={this.wrapRasterRowsWithGrid}
              classLevelId={this.props.classLevelId}
            />
            <ComponentProvider.Button
              caption="+ Thema"
              size="small"
              type="thin"
              onClick={() => onAddTemplateClick(this.props.classLevelId)}
            />
          </FlexChild>
        </FlexContainer>
      </>
    );
  }
}

export default RasterUnitContainer;
