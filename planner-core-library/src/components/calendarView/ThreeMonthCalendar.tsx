import React, { Component } from 'react';
import styled from 'styled-components';
import RowCaptions from './RowCaptions';
import WeekClassRows from './WeekClassRows';
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

class ThreeMonthCalendar extends Component<PropsType> {
  render() {
    const {
      utcToday,
      rasterSize,
      classTopicsData,
      holidaysData,
      otherEventsData,
      onTopicInstanceClick
    } = this.props;
    const threeMonthTimePeriod = getWeekPeriodForDate(utcToday, 12);
    const labels = classTopicsData.map(classTopic => ({
      topLabel: classTopic.className,
      subLabels: classTopic.classes.map(classTopic => classTopic.subjectName)
    }));
    const filteredHolidaysData = filterRelevantElementData(
      threeMonthTimePeriod.utcStartDate,
      threeMonthTimePeriod.utcEndDate,
      holidaysData
    );
    const filteredOtherEventsData = filterRelevantElementData(
      threeMonthTimePeriod.utcStartDate,
      threeMonthTimePeriod.utcEndDate,
      otherEventsData
    );
    const filteredClassTopicsData = getFilteredClassTopicsData(
      classTopicsData,
      threeMonthTimePeriod
    );

    return (
      <div>
        <StyledFlexContainer>
          <StyledRowCaptions labels={labels} />
          <WeekClassRows
            rasterSize={rasterSize}
            rowPeriod={threeMonthTimePeriod}
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
    rasterSize: 15,
    utcToday: 1537308000000,
    holidaysData: [],
    otherEventsData: [],
    onTopicInstanceClick: () => {}
  };
}

export default ThreeMonthCalendar;
