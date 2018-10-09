import { Component } from 'react';
import { TopicDateType, EventType } from '../types';
declare type PropsType = {
    rasterSize: number;
    schoolYear: {
        utcStartDate: number;
        utcEndDate: number;
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
