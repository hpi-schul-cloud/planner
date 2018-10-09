import { Component } from 'react';
import { TopicDateType, EventType } from '../types';
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
    getEventLabels: (events: {
        name: string;
        color?: string | undefined;
        utcStartDate: number;
        utcEndDate: number;
    }[]) => {};
    transformToIndexTopics: (topics: TopicDateType[]) => {
        startIndex: number;
        endIndex: number;
        id: string;
        text: string;
        color: string;
    }[];
    getClassRows: (classTopicsData: {
        className: string;
        classes: {
            subjectId: string;
            subjectName: string;
            topics: TopicDateType[];
        }[];
    }[], rasterCount: number) => JSX.Element[];
    render(): JSX.Element;
}
export default ClassRows;
