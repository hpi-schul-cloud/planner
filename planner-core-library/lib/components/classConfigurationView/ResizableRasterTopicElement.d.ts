import { Component } from 'react';
import { PropsType as DraggableRasterElementPropsType } from './dragAndDrop/DraggableRasterElement';
export declare type PropsType = {
    id: string;
    index: number;
    onChangeSizeLeft: (id: string, index: number, startIndex: number, endIndex: number) => void;
    onChangeSizeRight: (id: string, index: number, startIndex: number, endIndex: number) => void;
} & DraggableRasterElementPropsType;
declare const RIGHT = "RIGHT";
declare const LEFT = "LEFT";
declare class ResizableRasterTopicElement extends Component<PropsType> {
    private topicElementRef;
    initialX: number;
    startIndex: number;
    endIndex: number;
    dragSide: typeof RIGHT | typeof LEFT;
    constructor(props: PropsType);
    setupDragLeft: () => void;
    setupDragRight: () => void;
    setupDrag: () => void;
    handleMouseMove: (event: MouseEvent) => void;
    handleMouseUp: () => void;
    render(): JSX.Element;
}
export default ResizableRasterTopicElement;
