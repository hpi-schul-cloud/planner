import React from 'react';
import 'react-tippy/dist/tippy.css';
interface PropsType {
    isDisabled?: boolean;
    onEditClick?: () => void;
    onDeleteClick?: () => void;
}
declare const TopicTooltip: React.SFC<PropsType>;
export default TopicTooltip;
