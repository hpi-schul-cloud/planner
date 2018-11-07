import { Component } from 'react';
interface PropsType {
    className?: string;
    children: string | JSX.Element | JSX.Element[];
    caption?: string;
}
interface StateType {
    isExpanded: boolean;
}
declare class ExpansionPanel extends Component<PropsType, StateType> {
    state: {
        isExpanded: boolean;
    };
    toggleExpanded: () => void;
    render(): JSX.Element;
}
export default ExpansionPanel;
