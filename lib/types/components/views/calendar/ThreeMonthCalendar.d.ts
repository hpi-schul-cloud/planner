import { Component } from 'react';
import { ClassTopicsDataType } from './types';
import { EventType } from '../../types';
declare type PropsType = {
    rasterSize: number;
    utcToday: number;
    classTopicsData: ClassTopicsDataType;
    holidaysData: EventType;
    otherEventsData: EventType;
    onTopicInstanceClick: (id: string) => void;
};
declare class ThreeMonthCalendar extends Component<PropsType> {
    render(): JSX.Element;
    static defaultProps: {
        rasterSize: number;
        utcToday: number;
        holidaysData: never[];
        otherEventsData: never[];
        onTopicInstanceClick: () => void;
    };
}
export default ThreeMonthCalendar;
