import { Component } from 'react';
import { ConnectDragSource } from 'react-dnd';
import { PropsType as RasterTopicElementPropsType } from '../../../plannerBase/RasterTopicElement';
declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
declare type DragDropRasterTopicElementType = {
    connectDragSource?: ConnectDragSource;
    isDragging?: boolean;
};
export declare type PropsType = Omit<RasterTopicElementPropsType, 'size'> & DragDropRasterTopicElementType & {
    isTransparentWhileDragging?: boolean;
    type: string;
    rowId?: string;
    index?: number;
    classLevelId?: string;
    size?: 'small' | 'medium' | 'large';
    onElementStartDrag?: () => void;
    onElementDidNotDrop: () => void;
};
export default class DragDropRasterTopicElement extends Component<PropsType> {
    render(): JSX.Element | undefined;
}
export {};
