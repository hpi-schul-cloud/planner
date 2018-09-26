import React, { Component } from 'react';
import styled from 'styled-components';
import RowCaptions from './RowCaptions';
import DayClassRows from './DayClassRows';
import {
  ClassTopicsDataType,
  filterRelevantElementData,
  getFilteredClassTopicsData,
  getWeekPeriodForDate
} from './calendarHelper';
import { EventType } from '../types';

type PropsType = {
  rasterSize: number;
  utcToday: number;
  classTopicsData: ClassTopicsDataType;
  holidaysData: EventType;
  otherEventsData: EventType;
  onTopicInstanceClick: (id: string) => void;
};

const StyledFlexContainer = styled.div`
  display: flex;
`;
const StyledRowCaptions = styled(RowCaptions)`
  padding-top: 45px;
`;

class TwoWeekCalendar extends Component<PropsType> {
  render() {
    const {
      utcToday,
      rasterSize,
      classTopicsData,
      holidaysData,
      otherEventsData,
      onTopicInstanceClick
    } = this.props;
    const twoWeekTimePeriod = getWeekPeriodForDate(utcToday, 2);
    const labels = classTopicsData.map(classTopic => ({
      topLabel: classTopic.className,
      subLabels: classTopic.classes.map(classTopic => classTopic.subjectName)
    }));
    const filteredHolidaysData = filterRelevantElementData(
      twoWeekTimePeriod.utcStartDate,
      twoWeekTimePeriod.utcEndDate,
      holidaysData
    );
    const filteredOtherEventsData = filterRelevantElementData(
      twoWeekTimePeriod.utcStartDate,
      twoWeekTimePeriod.utcEndDate,
      otherEventsData
    );
    const filteredClassTopicsData = getFilteredClassTopicsData(
      classTopicsData,
      twoWeekTimePeriod
    );

    return (
      <div>
        <StyledFlexContainer>
          <StyledRowCaptions labels={labels} />
          <DayClassRows
            rasterSize={rasterSize}
            rowPeriod={twoWeekTimePeriod}
            utcToday={utcToday}
            classTopicsData={filteredClassTopicsData}
            holidaysData={filteredHolidaysData}
            otherEventsData={filteredOtherEventsData}
            onTopicInstanceClick={onTopicInstanceClick}
          />
        </StyledFlexContainer>
      </div>
    );
  }

  static defaultProps = {
    rasterSize: 50,
    utcToday: 1537308000000,
    holidaysData: [],
    otherEventsData: [],
    onTopicInstanceClick: () => {}
  };
}

export default TwoWeekCalendar;
