import React, { Component } from 'react';
import styled from 'styled-components';
import { getMonthAndYearString } from './timeHelper';
import RowCaptions from './RowCaptions';
import ClassRows from './ClassRows';
import { TopicElementsType, EventType } from '../types';
import StylesProvider from '../provider/generalStylesProvider';

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

const StyledFlexChild = styled.div`
  display: inline-block;
  font-family: ${StylesProvider.generalStyles['font-family']};
  font-size: 14px;
  color: ${StylesProvider.generalStyles.defaultTextColor};
`;

class YearlyCalendar extends Component<PropsType> {
  render() {
    const {
      schoolYear: { startDate, endDate },
      today,
      classTopicsData,
      holidaysData,
      otherEventsData,
      onTopicInstanceClick
    } = this.props;
    const startDateString = getMonthAndYearString(new Date(startDate));
    const endDateString = getMonthAndYearString(new Date(endDate));
    const labels = classTopicsData.map(classTopic => ({
      topLabel: classTopic.className,
      subLabels: classTopic.classes.map(classTopic => classTopic.subjectName)
    }));

    return (
      <div>
        <StyledFlexContainer>
          <StyledFlexChild>{startDateString}</StyledFlexChild>
          <StyledFlexChild>{endDateString}</StyledFlexChild>
        </StyledFlexContainer>
        <StyledFlexContainer>
          <RowCaptions labels={labels} />
          <ClassRows
            rasterSize={15}
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
