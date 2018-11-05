import { Component } from 'react';
import { ConnectDropTarget } from 'react-dnd';
declare type DragDropRasterTopicElementType = {
    connectDropTarget?: ConnectDropTarget;
    canDrop?: boolean;
    isOver?: boolean;
    className?: string;
};
declare type PropsType = {
    onElementDidDrop: (rowId: string, index: number) => void;
} & DragDropRasterTopicElementType;
declare class TrashDrop extends Component<PropsType> {
    render(): JSX.Element | undefined;
}
export default TrashDrop;
