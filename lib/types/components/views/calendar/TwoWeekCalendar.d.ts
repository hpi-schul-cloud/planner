import { Component } from 'react';
import { EventType } from '../../types';
import { ClassTopicsDataType } from './types';
declare type PropsType = {
    rasterSize: number;
    utcToday: number;
    classTopicsData: ClassTopicsDataType;
    holidaysData: EventType;
    otherEventsData: EventType;
    onTopicInstanceClick: (id: string) => void;
};
declare class TwoWeekCalendar extends Component<PropsType> {
    render(): JSX.Element;
    static defaultProps: {
        rasterSize: number;
        utcToday: number;
        holidaysData: never[];
        otherEventsData: never[];
        onTopicInstanceClick: () => void;
    };
}
export default TwoWeekCalendar;
