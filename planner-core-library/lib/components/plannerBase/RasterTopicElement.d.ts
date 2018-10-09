import { Component } from 'react';
export declare type PropsType = {
    rasterSize: number;
    startIndex: number;
    endIndex: number;
    id: string;
    color: string;
    size: 'small' | 'medium' | 'large';
    text?: string;
    onClick?: () => void;
};
declare class RasterTopicElement extends Component<PropsType> {
    render(): JSX.Element;
    static defaultProps: {
        color: string;
        size: string;
    };
}
export default RasterTopicElement;
