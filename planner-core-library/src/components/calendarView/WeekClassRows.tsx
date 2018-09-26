import React, { Component } from 'react';
import styled from 'styled-components';
import { TopicElementsType, EventType } from '../types';
import TimeRasterWrapper from '../planner/TimeRasterWrapper';
import StylesProvider, {
  GeneralStylesType
} from '../provider/generalStylesProvider';
import { MONTHS_MAP } from '../constants';
import {
  getMonthAndYearString,
  getWeekDifference,
  getDayDifference
} from './timeHelper';
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
  schoolYear: {
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
    isFirstSubject ? '25px 0px 20px 0px' : '0px 0px 20px 0px'};
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

const WEEK = 1000 * 60 * 60 * 24 * 7;

class ClassRows extends Component<PropsType> {
  getEventLabels = (events: EventType) => {
    const labelMap = {};
    const schoolYearStartDate = new Date(this.props.schoolYear.utcStartDate);
    events.forEach(event => {
      const endIndex = getWeekDifference(
        schoolYearStartDate,
        new Date(event.utcEndDate),
        false
      );
      labelMap[endIndex] = event.name;
    });
    return labelMap;
  };
  getMonthLabels = (utcStartDate: number, utcEndDate: number) => {
    const monthMap = {};
    let currentMonth = new Date(utcStartDate).getUTCMonth();

    for (let i = 0; utcStartDate + i * WEEK <= utcEndDate; i++) {
      const currentDate = new Date(utcStartDate + i * WEEK);
      if (currentDate.getUTCMonth() !== currentMonth) {
        currentMonth = currentDate.getUTCMonth();
        monthMap[i] = MONTHS_MAP[currentMonth];
      }
    }

    return monthMap;
  };
  getColumnColorMap = (events: EventType) => {
    const columnColorMap = {};
    const schoolYearStartDate = new Date(this.props.schoolYear.utcStartDate);
    events.forEach(event => {
      const startIndex = getWeekDifference(
        schoolYearStartDate,
        new Date(event.utcStartDate),
        true
      );
      const endIndex = getWeekDifference(
        schoolYearStartDate,
        new Date(event.utcEndDate),
        false
      );
      for (let i = startIndex; i <= endIndex; i++) {
        columnColorMap[i] = event.color;
      }
    });
    return columnColorMap;
  };

  transformToIndexTopics = (topics: TopicElementsType[]) => {
    return topics.map(topic => {
      const { utcStartDate, utcEndDate, ...otherProps } = topic;
      const schoolYearStartDate = new Date(this.props.schoolYear.utcStartDate);
      const startIndex = getWeekDifference(
        schoolYearStartDate,
        new Date(topic.utcStartDate),
        false
      );
      const endIndex = getWeekDifference(
        schoolYearStartDate,
        new Date(topic.utcEndDate),
        false
      );

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
      schoolYear: { utcStartDate, utcEndDate },
      rasterSize,
      utcToday,
      classTopicsData,
      holidaysData,
      otherEventsData
    } = this.props;
    const utcStartDateString = getMonthAndYearString(new Date(utcStartDate));
    const utcEndDateString = getMonthAndYearString(new Date(utcEndDate));
    const rasterCount = getWeekDifference(
      new Date(utcStartDate),
      new Date(utcEndDate)
    );
    const rows = this.getClassRows(classTopicsData, rasterCount);
    const columnColorMap = this.getColumnColorMap([
      ...holidaysData,
      ...otherEventsData
    ]);
    const topLabelMap = this.getMonthLabels(utcStartDate, utcEndDate);
    const bottomLabelsMap = this.getEventLabels(otherEventsData);
    const todayLineIndex =
      utcToday - utcStartDate > 0
        ? Math.floor(
            getDayDifference(new Date(utcToday), new Date(utcStartDate)) / 7
          )
        : 0;

    return (
      <>
        <TimeRasterWrapper
          rasterCount={rasterCount}
          rasterSize={rasterSize}
          columnColorMap={columnColorMap}
          topLabelsMap={topLabelMap}
          bottomLabelsMap={bottomLabelsMap}
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
