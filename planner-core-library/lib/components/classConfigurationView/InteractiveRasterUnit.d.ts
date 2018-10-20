import { Component } from 'react';
import { TopicIndexType } from '../types';
declare type ClassInstanceType = {
    [classId: string]: {
        id: string;
        name: string;
        topics: TopicIndexType[];
    };
};
interface PropsType {
    onEditTemplate: (templateId: string) => void;
    onDeleteTemplate: (templateId: string) => void;
    onEditInstance: (instanceId: string) => void;
    updateClassInstances: (classInstaces: ClassInstanceType) => void;
    rasterCount: number;
    rasterSize: number;
    topicTemplates: TopicType[];
    classInstances: ClassInstanceType;
    classLevelId: string;
    wrapRasterRows?: (children: JSX.Element | JSX.Element[]) => JSX.Element | JSX.Element[];
}
interface TopicType {
    id: string;
    text: string;
    width: number;
    color: string;
}
interface StateType {
    tempClassInstances: {
        [classId: string]: {
            id: string;
            name: string;
            topics: TopicIndexType[];
        };
    };
    isDragging: boolean;
}
declare class InteractiveRasterUnit extends Component<PropsType, StateType> {
    constructor(props: PropsType);
    setDraggingState: () => void;
    resetDragState: () => void;
    commitCurrentDragState: () => void;
    softRelocateTopicElement: ((rowId: string, elementIndex: number, insertStartIndex: number, width: number, elementValues: Partial<TopicIndexType>) => void) & import("lodash").Cancelable;
    softInsertTopicElement: ((rowId: string, insertStartIndex: number, width: number, elementValues: Partial<TopicIndexType>) => void) & import("lodash").Cancelable;
    deleteTopic: (classId: string, index: number) => void;
    updateClassInstance: (classId: string, topics: TopicIndexType[]) => void;
    render(): JSX.Element;
    static defaultProps: {
        wrapRasterRows: (children: JSX.Element | JSX.Element[]) => JSX.Element | JSX.Element[];
    };
}
export default InteractiveRasterUnit;
