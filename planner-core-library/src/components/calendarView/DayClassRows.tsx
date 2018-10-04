import React, { Component } from 'react';
import styled from 'styled-components';
import { TopicElementsType, EventType } from '../types';
import { TimeRasterWrapper, generateDayLabelMap } from '../plannerBase';
import StylesProvider, {
  GeneralStylesType
} from '../provider/generalStylesProvider';
import LabelOverlays from './LabelOverlays';
import {
  getDayAndMonthString,
  getDayDifference,
  getDayCount
} from './timeHelper';
import {
  determineIndices,
  getEventMaps,
  EventMapType
} from './dayClassRowsHelper';
import RasterRow, {
  TopicElementsType as RasterTopicElementsType
} from './RasterRow';

type ClassTopicsDataType = {
  className: string;
  classes: {
    subjectId: string;
    subjectName: string;
    topics: TopicElementsType[];
  }[];
}[];

type PropsType = {
  className?: string;
  rasterSize: number;
  rowPeriod: {
    utcStartDate: number; // first day of school
    utcEndDate: number; // last day of school
  };
  utcToday: number;
  classTopicsData: ClassTopicsDataType;
  holidaysData: EventType;
  otherEventsData: EventType;
  onTopicInstanceClick: (id: string) => void;
};

type RowContainerPropsType = {
  isFirstRowOfClass: boolean;
  isFirstRow: boolean;
  isLastRow: boolean;
};
const RasterRowContainer = styled.div`
  padding-top: ${({ isFirstRow, isFirstRowOfClass }: RowContainerPropsType) =>
    isFirstRow ? '21px' : isFirstRowOfClass ? '37px' : '14px'};
  padding-bottom: ${({ isLastRow }: RowContainerPropsType) =>
    isLastRow ? '21px' : '0px'};
`;

const StyledFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const StyledFlexChild = styled.div`
  display: inline-block;
  font-family: ${({ styles }: { styles: GeneralStylesType }) =>
    styles['font-family']};
  font-size: 14px;
  color: ${({ styles }: { styles: GeneralStylesType }) =>
    styles.defaultTextColor};
`;

class ClassRows extends Component<PropsType> {
  transformToIndexTopics = (
    topics: TopicElementsType[],
    eventsMap: EventMapType
  ) => {
    const result: RasterTopicElementsType[] = [];

    topics.forEach(topic => {
      const { utcStartDate, utcEndDate, ...otherProps } = topic;
      const topicUtcStartDate = new Date(topic.utcStartDate);
      const rowUtcStartDate = new Date(this.props.rowPeriod.utcStartDate);
      const indices = determineIndices({
        topicStartDate: topicUtcStartDate,
        topicEndDate: new Date(topic.utcEndDate),
        rowStartDate: rowUtcStartDate,
        rowEndDate: new Date(this.props.rowPeriod.utcEndDate),
        eventsMap
      });
      if (indices) {
        result.push({
          ...otherProps,
          ...indices
        });
      }
    });

    return result;
  };

  getClassRows = (
    classTopicsData: ClassTopicsDataType,
    rasterCount: number,
    eventsMap: EventMapType
  ) => {
    const result: JSX.Element[] = [];
    classTopicsData.forEach((classData, classIndex) => {
      classData.classes.forEach((subject, index) => {
        const isFirstRow = classIndex === 0 && index === 0;
        const isFirstRowOfClass = index === 0;
        const isLastRow =
          classIndex === classTopicsData.length - 1 &&
          index === classData.classes.length - 1;
        const transformedTopicElements = this.transformToIndexTopics(
          subject.topics,
          eventsMap
        );
        result.push(
          <RasterRowContainer
            isFirstRow={isFirstRow}
            isFirstRowOfClass={isFirstRowOfClass}
            isLastRow={isLastRow}
            key={`${classData.className}-${subject.subjectId}`}
          >
            <RasterRow
              topicElements={transformedTopicElements}
              rasterSize={this.props.rasterSize}
              rasterCount={rasterCount}
              topicElementSize={'large'}
              onTopicInstanceClick={this.props.onTopicInstanceClick}
            />
          </RasterRowContainer>
        );
      });
    });

    return result;
  };

  render() {
    const {
      className,
      rowPeriod: { utcStartDate, utcEndDate },
      rasterSize,
      utcToday,
      classTopicsData,
      holidaysData,
      otherEventsData
    } = this.props;
    const utcStartDateString = getDayAndMonthString(new Date(utcStartDate));
    const utcEndDateString = getDayAndMonthString(new Date(utcEndDate));
    const rasterCount = getDayCount(
      this.props.rowPeriod.utcStartDate,
      this.props.rowPeriod.utcEndDate
    );
    const { columnColorMap, eventTypeMap, eventArray } = getEventMaps(
      holidaysData,
      otherEventsData,
      this.props.rowPeriod
    );
    const topLabelMap = generateDayLabelMap(utcStartDate, utcEndDate);
    const rows = this.getClassRows(classTopicsData, rasterCount, eventTypeMap);
    const todayLineIndex =
      utcToday - utcStartDate > 0
        ? getDayDifference(new Date(utcToday), new Date(utcStartDate))
        : 0;

    return (
      <>
        <TimeRasterWrapper
          rasterCount={rasterCount}
          rasterSize={rasterSize}
          columnColorMap={columnColorMap}
          topLabelsMap={topLabelMap}
          className={className}
          todayLineIndex={todayLineIndex}
          topChildren={
            <StyledFlexContainer>
              <StyledFlexChild styles={StylesProvider.styles}>
                {utcStartDateString}
              </StyledFlexChild>
              <StyledFlexChild styles={StylesProvider.styles}>
                {utcEndDateString}
              </StyledFlexChild>
            </StyledFlexContainer>
          }
        >
          <>
            {rows}
            <LabelOverlays
              rasterCount={rasterCount}
              rasterSize={rasterSize}
              labelArray={eventArray}
            />
          </>
        </TimeRasterWrapper>
      </>
    );
  }
}

export default ClassRows;
