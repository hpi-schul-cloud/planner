import { Component } from 'react';
import { TopicIndexType } from '../types';
import { EventType, SchoolYearType } from '../types';
declare type ClassInstanceType = {
    [classId: string]: {
        id: string;
        name: string;
        topics: TopicIndexType[];
    };
};
interface TopicTemplateType {
    id: string;
    text: string;
    width: number;
    color: string;
}
interface PropsType {
    rasterCount: number;
    rasterSize: number;
    topicTemplates: TopicTemplateType[];
    classInstances: ClassInstanceType;
    classLevelId: string;
    schoolYear: SchoolYearType;
    eventData: EventType;
    onAddTemplateClick: (classLevelId: string) => void;
    onUpdate: (classLevelId: string, classes: ClassInstanceType) => void;
}
declare class RasterUnitContainer extends Component<PropsType> {
    constructor(props: PropsType);
    wrapRasterRowsWithGrid: (children: JSX.Element | JSX.Element[]) => JSX.Element;
    updateClassInstance: (classInstances: ClassInstanceType) => void;
    generateLabels: () => {
        text: string;
        subText: string;
    }[];
    render(): JSX.Element;
}
export default RasterUnitContainer;