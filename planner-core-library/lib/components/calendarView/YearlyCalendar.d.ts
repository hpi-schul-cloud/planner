import { Component } from 'react';
import { EventType, SchoolYearType } from '../types';
import { ClassTopicsDataType } from './types';
declare type PropsType = {
    rasterSize: number;
    schoolYear: SchoolYearType;
    utcToday: number;
    classTopicsData: ClassTopicsDataType;
    holidaysData: EventType;
    otherEventsData: EventType;
    onTopicInstanceClick: (id: string) => void;
};
declare class YearlyCalendar extends Component<PropsType> {
    render(): JSX.Element;
    static defaultProps: {
        rasterSize: number;
        schoolYear: {
            utcStartDate: number;
            utcEndDate: number;
        };
        utcToday: number;
        holidaysData: never[];
        otherEventsData: never[];
        onTopicInstanceClick: () => void;
    };
}
export default YearlyCalendar;
