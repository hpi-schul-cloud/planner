import React from 'react';
import 'tippy.js/dist/tippy.css';
interface PropsType {
    isDisabled?: boolean;
    onEditClick?: () => void;
    onDeleteClick?: () => void;
}
declare class TopicTooltip extends React.Component<PropsType> {
    private tippyRef;
    componentDidUpdate(prevProps: PropsType): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default TopicTooltip;
