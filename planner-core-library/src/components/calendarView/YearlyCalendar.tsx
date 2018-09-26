import React, { Component } from 'react';
import styled from 'styled-components';
import RowCaptions from './RowCaptions';
import WeekClassRows from './WeekClassRows';
import { TopicElementsType, EventType } from '../types';

type PropsType = {
  rasterSize: number;
  schoolYear: {
    utcStartDate: number; // first day of school
    utcEndDate: number; // last day of school
  };
  utcToday: number;
  classTopicsData: {
    className: string;
    classes: {
      subjectId: string;
      subjectName: string;
      topics: TopicElementsType[];
    }[];
  }[];
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

class YearlyCalendar extends Component<PropsType> {
  render() {
    const {
      utcToday,
      rasterSize,
      classTopicsData,
      holidaysData,
      otherEventsData,
      onTopicInstanceClick
    } = this.props;

    const labels = classTopicsData.map(classTopic => ({
      topLabel: classTopic.className,
      subLabels: classTopic.classes.map(classTopic => classTopic.subjectName)
    }));

    return (
      <div>
        <StyledFlexContainer>
          <StyledRowCaptions labels={labels} />
          <WeekClassRows
            rasterSize={rasterSize}
            rowPeriod={this.props.schoolYear}
            utcToday={utcToday}
            classTopicsData={classTopicsData}
            holidaysData={holidaysData}
            otherEventsData={otherEventsData}
            onTopicInstanceClick={onTopicInstanceClick}
          />
        </StyledFlexContainer>
      </div>
    );
  }

  static defaultProps = {
    rasterSize: 15,
    schoolYear: {
      utcStartDate: 1534716000000, // (20.08.2018) Erster Schultag Brandenburg
      utcEndDate: 1560895200000 // (19.06.2019) Letzer Schultag Brandenburg
    },
    utcToday: 1537308000000,
    holidaysData: [],
    otherEventsData: [],
    onTopicInstanceClick: () => {}
  };
}

export default YearlyCalendar;
