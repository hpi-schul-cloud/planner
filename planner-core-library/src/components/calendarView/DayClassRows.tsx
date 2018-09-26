import React, { Component } from 'react';
import styled from 'styled-components';
import { TopicElementsType, EventType } from '../types';
import TimeRasterWrapper from '../planner/TimeRasterWrapper';
import StylesProvider, {
  GeneralStylesType
} from '../provider/generalStylesProvider';
import { getDayAndMonthString, getDayDifference } from './timeHelper';
import RasterRow from './RasterRow';

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

const RasterRowContainer = styled.div`
  padding: ${({ isFirstSubject }: { isFirstSubject: boolean }) =>
    isFirstSubject ? '25px 0px 12px 0px' : '0px 0px 12px 0px'};
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

const DAY = 1000 * 60 * 60 * 24;

class ClassRows extends Component<PropsType> {
  getDayCount = (utcStartDate: number, utcEndDate: number) =>
    getDayDifference(new Date(utcStartDate), new Date(utcEndDate)) + 1;

  getColumnColorMap = (events: EventType) => {
    const columnColorMap = {};
    const utcStartDate = new Date(this.props.rowPeriod.utcStartDate);
    const deltaDays = this.getDayCount(
      this.props.rowPeriod.utcStartDate,
      this.props.rowPeriod.utcEndDate
    );

    events.forEach(event => {
      const startIndex = getDayDifference(
        utcStartDate,
        new Date(event.utcStartDate)
      );
      const endIndex = getDayDifference(
        utcStartDate,
        new Date(event.utcEndDate)
      );
      for (let i = startIndex; i <= endIndex && i < deltaDays; i++) {
        columnColorMap[i] = event.color;
      }
    });
    for (let i = 0; i < deltaDays; i++) {
      const currentDay = new Date(utcStartDate.getTime() + i * DAY);
      const day = currentDay.getUTCDay();
      // Saturday or Sunday
      if (day === 0 || day === 6) {
        columnColorMap[i] = '#DFDFDF';
      }
    }
    return columnColorMap;
  };

  transformToIndexTopics = (topics: TopicElementsType[]) => {
    return topics.map(topic => {
      const { utcStartDate, utcEndDate, ...otherProps } = topic;
      const deltaDays = this.getDayCount(
        this.props.rowPeriod.utcStartDate,
        this.props.rowPeriod.utcEndDate
      );
      const rowUtcStartDate = new Date(this.props.rowPeriod.utcStartDate);
      const startIndex =
        rowUtcStartDate.getTime() <= topic.utcStartDate
          ? getDayDifference(rowUtcStartDate, new Date(topic.utcStartDate))
          : 0;
      const endIndex =
        this.props.rowPeriod.utcEndDate < topic.utcEndDate
          ? deltaDays - 1
          : getDayDifference(rowUtcStartDate, new Date(topic.utcEndDate));

      return {
        ...otherProps,
        startIndex,
        endIndex
      };
    });
  };

  getClassRows = (
    classTopicsData: ClassTopicsDataType,
    rasterCount: number
  ) => {
    const result: JSX.Element[] = [];
    classTopicsData.forEach(classData => {
      classData.classes.forEach((subject, index) => {
        const isFirstSubject = index === 0;
        const transformedTopicElements = this.transformToIndexTopics(
          subject.topics
        );
        result.push(
          <RasterRowContainer
            isFirstSubject={isFirstSubject}
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
    const rasterCount = this.getDayCount(
      this.props.rowPeriod.utcStartDate,
      this.props.rowPeriod.utcEndDate
    );
    const rows = this.getClassRows(classTopicsData, rasterCount);
    const columnColorMap = this.getColumnColorMap([
      ...holidaysData,
      ...otherEventsData
    ]);
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
          {rows}
        </TimeRasterWrapper>
      </>
    );
  }
}

export default ClassRows;
