import { Component } from 'react';
import { TopicDateType, TopicIndexType, EventType } from '../types';
import { EventMapType } from './dayClassRowsHelper';
import { ClassTopicsDataType } from './types';
declare type PropsType = {
    className?: string;
    rasterSize: number;
    rowPeriod: {
        utcStartDate: number;
        utcEndDate: number;
    };
    utcToday: number;
    classTopicsData: ClassTopicsDataType;
    holidaysData: EventType;
    otherEventsData: EventType;
    onTopicInstanceClick: (id: string) => void;
};
declare class ClassRows extends Component<PropsType> {
    transformToIndexTopics: (topics: TopicDateType[], eventsMap: EventMapType) => TopicIndexType[];
    getClassRows: (classTopicsData: {
        className: string;
        classes: {
            subjectId: string;
            subjectName: string;
            topics: TopicDateType[];
        }[];
    }[], rasterCount: number, eventsMap: EventMapType) => JSX.Element[];
    render(): JSX.Element;
}
export default ClassRows;
