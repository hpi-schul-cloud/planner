import React, { Component } from 'react';
import styled from 'styled-components';
import RowCaptions from './RowCaptions';
import ClassRows from './ClassRows';
import { TopicElementsType, EventType } from '../types';

type PropsType = {
  rasterSize: number;
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
      today,
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
          <RowCaptions labels={labels} />
          <ClassRows
            rasterSize={rasterSize}
            schoolYear={this.props.schoolYear}
            today={today}
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
