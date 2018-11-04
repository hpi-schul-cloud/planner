import { Component } from 'react';
import { TopicIndexType } from '../../types';
declare type PropsType = {
    topicElements: TopicIndexType[];
    rasterSize: number;
    rasterCount: number;
    topicElementSize?: 'small' | 'medium' | 'large';
    onTopicInstanceClick: (id: string) => void;
};
declare class InteractiveRasterRow extends Component<PropsType> {
    generateElements: () => JSX.Element[];
    render(): JSX.Element;
}
export default InteractiveRasterRow;
