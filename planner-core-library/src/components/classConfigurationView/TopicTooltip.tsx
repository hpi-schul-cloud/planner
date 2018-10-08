import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import IconTrash from '../../assets/IconTrash';
import IconEdit from '../../assets/IconEdit';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

interface PropsType {
  isDisabled?: boolean;
  onEditClick?: () => void;
  onDeleteClick?: () => void;
}

// Horrible, hacky way to remove background color
// See https://github.com/tvkhoa/react-tippy/issues/78
injectGlobal`
  .tippy-tooltip.custom-theme {
    background-color: transparent;
    border: none;
    color: inherit;
    > .enter {
      background-color: transparent;
    }
  }

  .tippy-popper[x-placement^=top] [x-arrow] {
    border-top: 7px solid transparent;
  }
`;

const StyledIcon = styled.div`
  display: inline-block;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.54);
  :hover {
    color: #f00;
  }
`;

const StyledTooltip = styled.div`
  background: #e9e8e8;
  padding: 2px 10px;
  border-radius: 4px;
  ${StyledIcon} {
    margin-left: 5px;
    margin-right: 5px;
  }
  ${StyledIcon} ~ ${StyledIcon} {
    margin-right: 5px;
  }
`;

const TopicTooltip: React.SFC<PropsType> = props => {
  return (
    <Tooltip
      size="small"
      interactiveBorder={0}
      animateFill={false}
      disabled={props.isDisabled}
      // [initial trigger after, leave trigger after] in ms
      delay={[1000, 0]}
      interactive={true}
      theme="custom"
      distance={5}
      html={
        <StyledTooltip>
          {props.onEditClick && (
            <StyledIcon onClick={props.onEditClick}>
              <IconEdit height={20} width={20} />
            </StyledIcon>
          )}
          {props.onDeleteClick && (
            <StyledIcon onClick={props.onDeleteClick}>
              <IconTrash height={20} width={20} />
            </StyledIcon>
          )}
        </StyledTooltip>
      }
    >
      {props.children}
    </Tooltip>
  );
};

export default TopicTooltip;
