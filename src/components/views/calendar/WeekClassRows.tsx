import React, { Component } from 'react';
import styled from 'styled-components';
import { TopicDateType, EventType } from '../../types';
import {
  TimeRasterWrapper,
  generateMonthLabelMap,
  generateWeeklyColorMap
} from '../../plannerBase';
import StylesProvider, {
  GeneralStylesType
} from '../../provider/generalStylesProvider';
import {
  getMonthAndYearString,
  getWeekDifference,
  getDayDifference
} from './timeHelper';
import RasterRow from './RasterRow';
import { ClassTopicsDataType } from './types';

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
    isFirstRow ? '26px' : isFirstRowOfClass ? '46px' : '20px'};
  padding-bottom: ${({ isLastRow }: RowContainerPropsType) =>
    isLastRow ? '26px' : '0px'};
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
  getEventLabels = (events: EventType) => {
    const labelMap = {};
    const rowPeriodStartDate = new Date(this.props.rowPeriod.utcStartDate);
    events.forEach(event => {
      const endIndex = getWeekDifference(
        rowPeriodStartDate,
        new Date(event.utcEndDate),
        false
      );
      labelMap[endIndex] = event.name;
    });
    return labelMap;
  };

  transformToIndexTopics = (topics: TopicDateType[]) => {
    return topics.map(topic => {
      const { utcStartDate, utcEndDate, ...otherProps } = topic;
      const rowPeriodStartDate = new Date(this.props.rowPeriod.utcStartDate);
      const rowPeriodEndDate = new Date(this.props.rowPeriod.utcEndDate);
      const startIndex = getWeekDifference(
        rowPeriodStartDate,
        topic.utcStartDate < rowPeriodStartDate.getTime()
          ? rowPeriodStartDate
          : new Date(topic.utcStartDate),
        false
      );
      const endIndex = getWeekDifference(
        rowPeriodStartDate,
        topic.utcEndDate > rowPeriodEndDate.getTime()
          ? rowPeriodEndDate
          : new Date(topic.utcEndDate),
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
    classTopicsData.forEach((classData, classIndex) => {
      classData.classes.forEach((subject, index) => {
        const isFirstRow = classIndex === 0 && index === 0;
        const isFirstRowOfClass = index === 0;
        const isLastRow =
          classIndex === classTopicsData.length - 1 &&
          index === classData.classes.length - 1;
        const transformedTopicElements = this.transformToIndexTopics(
          subject.topics
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
    const utcStartDateString = getMonthAndYearString(new Date(utcStartDate));
    const utcEndDateString = getMonthAndYearString(new Date(utcEndDate));
    const rasterCount = getWeekDifference(
      new Date(utcStartDate),
      new Date(utcEndDate)
    );
    const rows = this.getClassRows(classTopicsData, rasterCount);
    const columnColorMap = generateWeeklyColorMap(
      [...holidaysData, ...otherEventsData],
      this.props.rowPeriod.utcStartDate
    );
    const topLabelMap = generateMonthLabelMap(utcStartDate, utcEndDate);
    const bottomLabelsMap = this.getEventLabels(otherEventsData);
    const todayLineIndex =
      utcToday - utcStartDate >= 0
        ? Math.floor(
            getDayDifference(new Date(utcToday), new Date(utcStartDate)) / 7
          )
        : -1;

    return (
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
    );
  }
}

export default ClassRows;
