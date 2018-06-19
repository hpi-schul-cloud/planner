import { Component } from "react";
interface PropsType {
    options: string[];
    values: Object[];
}
interface StateType {
    addedFieldCount: number;
}
declare class SelectorInput extends Component<PropsType, StateType> {
    static defaultProps: PropsType;
    state: {
        addedFieldCount: number;
    };
    addField: () => void;
    render(): JSX.Element;
}
export default SelectorInput;
