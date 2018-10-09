import { Component } from 'react';
import { ConnectDropTarget } from 'react-dnd';
import { TopicIndexType } from '../types';
declare type DragDropRasterTopicElementType = {
    connectDropTarget?: ConnectDropTarget;
    canDrop?: boolean;
    isOver?: boolean;
};
declare type PropsType = {
    topicElements: TopicIndexType[];
    rasterSize: number;
    rasterCount: number;
    rowId: string;
    classLevelId: string;
    updateElements: (topicElements: TopicIndexType[]) => void;
    onElementDidNotDrop: () => void;
    onElementDidDrop: () => void;
    softRelocateTopicElement: (rowId: string, elementIndex: number, insertStartIndex: number, width: number, elementValues: Partial<TopicIndexType>) => void;
    softInsertTopicElement: (rowId: string, insertStartIndex: number, width: number, elementValues: Partial<TopicIndexType>) => void;
} & DragDropRasterTopicElementType;
declare class InteractiveRasterRow extends Component<PropsType> {
    generateAndCommitElementChanges(changes: {
        [index: number]: Partial<TopicIndexType>;
    }): void;
    resizeElementLeft: (oldStartIndex: number, newStartIndex: number, index: number) => void;
    resizeElementRight: (oldEndIndex: number, newEndIndex: number, index: number) => void;
    handleElementSizeChangeLeft: (id: string, index: number, startIndex: number, endIndex: number) => void;
    handleElementSizeChangeRight: (id: string, index: number, startIndex: number, endIndex: number) => void;
    generateElements: () => JSX.Element[];
    render(): JSX.Element | undefined;
}
export default InteractiveRasterRow;
