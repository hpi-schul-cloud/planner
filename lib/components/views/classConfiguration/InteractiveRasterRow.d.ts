import { PureComponent } from 'react';
import { ConnectDropTarget } from 'react-dnd';
import { LocalTopicIndexType } from './types';
declare type DragDropRasterTopicElementType = {
    connectDropTarget?: ConnectDropTarget;
    canDrop?: boolean;
    isOver?: boolean;
};
declare type PropsType = {
    topicElements: LocalTopicIndexType[];
    rasterSize: number;
    rasterCount: number;
    rowId: string;
    classLevelId: string;
    updateElements: (rowId: string, topicElements: LocalTopicIndexType[]) => void;
    onEditInstance: (instanceId: string) => void;
    onDeleteInstance: (rowId: string, index: number) => void;
    onSaveConfiguration: () => void;
    onElementDidNotDrop: () => void;
    onElementDidDrop: () => void;
    softRelocateTopicElement: (rowId: string, elementIndex: number, insertStartIndex: number, width: number, elementValues: Partial<LocalTopicIndexType>) => void;
    softInsertTopicElement: (rowId: string, insertStartIndex: number, width: number, elementValues: Partial<LocalTopicIndexType>) => void;
} & DragDropRasterTopicElementType;
declare class InteractiveRasterRow extends PureComponent<PropsType> {
    generateAndCommitElementChanges(changes: {
        [index: number]: Partial<LocalTopicIndexType>;
    }): void;
    resizeElementLeft: (oldStartIndex: number, newStartIndex: number, index: number) => void;
    resizeElementRight: (oldEndIndex: number, newEndIndex: number, index: number) => void;
    handleElementSizeChangeLeft: (...args: any[]) => void;
    handleElementSizeChangeRight: (...args: any[]) => void;
    generateElements: () => JSX.Element[];
    render(): JSX.Element | undefined;
}
export default InteractiveRasterRow;
