import React, { Component } from 'react';
import styled from 'styled-components';
import { TopicElementsType, EventType } from '../types';
import TimeRasterWrapper from '../planner/TimeRasterWrapper';
import { getWeekDifference } from './timeHelper';
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
    startDate: number; // first day of school
    endDate: number; // last day of school
  };
  today: number;
  classTopicsData: ClassTopicsDataType;
  holidaysData: EventType;
  otherEventsData: EventType;
  onTopicInstanceClick: (id: string) => void;
};

const RasterRowContainer = styled.div`
  padding: ${({ isFirstSubject }: { isFirstSubject: boolean }) =>
    isFirstSubject ? '20px 0px 15px 0px' : '0px 0px 15px 0px'};
`;

class ClassRows extends Component<PropsType> {
  transformToIndexTopics = (topics: TopicElementsType[]) => {
    return topics.map(topic => {
      const { startDate, endDate, ...otherProps } = topic;
      const schoolYearStartDate = new Date(this.props.schoolYear.startDate);
      const startIndex = getWeekDifference(
        schoolYearStartDate,
        new Date(topic.startDate),
        false
      );
      const endIndex = getWeekDifference(
        schoolYearStartDate,
        new Date(topic.endDate),
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
          <RasterRowContainer isFirstSubject={isFirstSubject}>
            <RasterRow
              topicElements={transformedTopicElements}
              rasterSize={this.props.rasterSize}
              rasterCount={rasterCount}
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
      schoolYear: { startDate, endDate },
      rasterSize,
      today,
      classTopicsData,
      holidaysData,
      otherEventsData,
      onTopicInstanceClick
    } = this.props;
    const rasterCount = getWeekDifference(
      new Date(startDate),
      new Date(endDate)
    );
    const rows = this.getClassRows(classTopicsData, rasterCount);

    return (
      <TimeRasterWrapper
        rasterCount={rasterCount}
        rasterSize={rasterSize}
        className={className}
      >
        {rows}
      </TimeRasterWrapper>
    );
  }
}

export default ClassRows;
