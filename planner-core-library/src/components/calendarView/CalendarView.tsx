import React, { Component } from 'react';
import styled from 'styled-components';
import ComponentProvider from '../provider/componentProvider';
import { TopicDateType, EventType } from '../types';
import YearlyCalendar from './YearlyCalendar';
import ThreeMonthCalendar from './ThreeMonthCalendar';
import TwoWeekCalendar from './TwoWeekCalendar';

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
      topics: TopicDateType[];
    }[];
  }[];
  holidaysData: EventType;
  otherEventsData: EventType;
  onTopicInstanceClick: (id: string) => void;
};

type StateType = {
  selectedCalendarType: 'YEAR' | '3MONTH' | '2WEEKS';
};

const StyledNotifications = styled.div`
  min-height: 100px;
`;
const StyledLabelContainer = styled.div`
  margin: 15px 0px 20px;
`;
const StyledContainer = styled.div`
  > * {
    box-sizing: border-box;
    line-height: normal;
    outline: none;
  }
`;

class CalendarView extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = { selectedCalendarType: 'YEAR' };
  }

  buildTwoWeekCalendar = () => {
    const { rasterSize, ...otherProps } = this.props;

    return <TwoWeekCalendar rasterSize={50} {...otherProps} />;
  };
  buildThreeMonthCalendar = () => {
    const { rasterSize, ...otherProps } = this.props;

    return <ThreeMonthCalendar rasterSize={55} {...otherProps} />;
  };
  buildYearlyCalendar = () => {
    return <YearlyCalendar {...this.props} />;
  };
  buildCalendar = (selectedCalendarType: 'YEAR' | '3MONTH' | '2WEEKS') => {
    switch (selectedCalendarType) {
      case 'YEAR':
        return this.buildYearlyCalendar();
      case '3MONTH':
        return this.buildThreeMonthCalendar();
      case '2WEEKS':
        return this.buildTwoWeekCalendar();
    }
  };

  getCurrentDayString(utcToday: number) {
    const today = new Date(utcToday);

    return `Heute ist der ${`${today.getUTCDate()}`.padStart(
      2,
      '0'
    )}.${`${today.getUTCMonth() + 1}`.padStart(2, '0')}.`;
  }

  onCalendarTypeChange = (calendarType: 'YEAR' | '3MONTH' | '2WEEKS') => {
    this.setState({
      selectedCalendarType: calendarType
    });
  };

  render() {
    const calendar = this.buildCalendar(this.state.selectedCalendarType);

    return (
      <StyledContainer>
        <StyledNotifications />
        <ComponentProvider.Tabs
          selected={this.state.selectedCalendarType}
          items={[
            { id: 'YEAR', text: 'Schuljahr' },
            { id: '3MONTH', text: 'Drei Monate' },
            { id: '2WEEKS', text: 'Zwei Wochen' }
          ]}
          onChange={id =>
            this.onCalendarTypeChange(id as 'YEAR' | '3MONTH' | '2WEEKS')
          }
        />
        <StyledLabelContainer>
          <ComponentProvider.Label
            caption={this.getCurrentDayString(this.props.utcToday)}
            type="large"
          />
        </StyledLabelContainer>
        {calendar}
      </StyledContainer>
    );
  }

  static defaultProps = {
    rasterSize: 15
  };
}

export default CalendarView;
