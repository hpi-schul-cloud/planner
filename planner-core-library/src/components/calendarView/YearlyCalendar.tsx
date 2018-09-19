import React, { Component } from 'react';
import styled from 'styled-components';
import { getMonthAndYearString } from './timeHelper';
import RowCaptions from './RowCaptions';
import { TopicElementsType, EventType } from '../types';

type PropsType = {
  schoolYear: {
    startDate: number; // first day of school
    endDate: number; // last day of school
  };
  today: number;
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

class YearlyCalendar extends Component<PropsType> {
  render() {
    const {
      schoolYear: { startDate, endDate },
      // today,
      classTopicsData
      // holidaysData,
      // otherEventsData,
      // onTopicInstanceClick
    } = this.props;
    const startDateString = getMonthAndYearString(new Date(startDate));
    const endDateString = getMonthAndYearString(new Date(endDate));
    const labels = classTopicsData.map(classTopic => ({
      topLabel: classTopic.className,
      subLabels: classTopic.classes.map(classTopic => classTopic.subjectName)
    }));

    return (
      <div>
        {startDateString}
        {endDateString}
        <StyledFlexContainer>
          <RowCaptions labels={labels} />
        </StyledFlexContainer>
      </div>
    );
  }

  static defaultProps = {
    schoolYear: {
      startDate: 1534716000000, // (20.08.2018) Erster Schultag Brandenburg
      endDate: 1560895200000 // (19.06.2019) Letzer Schultag Brandenburg
    },
    today: 1537308000000,
    holidaysData: [],
    otherEventsData: [],
    onTopicInstanceClick: () => {}
  };
}

export default YearlyCalendar;
