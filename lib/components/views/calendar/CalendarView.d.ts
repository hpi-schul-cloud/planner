import { Component } from 'react';
import { EventType } from '../../types';
import { ClassTopicsDataType } from './types';
declare type PropsType = {
    schoolYear: {
        utcStartDate: number;
        utcEndDate: number;
    };
    utcToday: number;
    classTopicsData: ClassTopicsDataType;
    holidaysData: EventType;
    otherEventsData: EventType;
    onTopicInstanceClick: (id: string) => void;
};
declare type StateType = {
    selectedCalendarType: 'YEAR' | '3MONTH' | '2WEEKS';
};
declare class CalendarView extends Component<PropsType, StateType> {
    constructor(props: PropsType);
    buildTwoWeekCalendar: () => JSX.Element;
    buildThreeMonthCalendar: () => JSX.Element;
    buildYearlyCalendar: () => JSX.Element;
    buildCalendar: (selectedCalendarType: "YEAR" | "3MONTH" | "2WEEKS") => JSX.Element;
    getCurrentDayString(utcToday: number): string;
    onCalendarTypeChange: (calendarType: "YEAR" | "3MONTH" | "2WEEKS") => void;
    render(): JSX.Element;
    static defaultProps: {
        rasterSize: number;
    };
}
export default CalendarView;
