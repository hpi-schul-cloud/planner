import { Component } from 'react';
interface PropsType {
    width: number;
    height: number;
    text?: string;
    color: string;
    onClick?: () => void;
}
declare class TopicElement extends Component<PropsType> {
    render(): JSX.Element;
    static defaultProps: {
        size: string;
        color: string;
    };
}
export default TopicElement;
