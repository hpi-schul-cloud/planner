import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import IconTrash from '../../assets/IconTrash';
import IconEdit from '../../assets/IconEdit';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

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
  font-size: 1px;
  display: inline-block;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.54);
  :hover {
    color: #f00;
  }
`;

const StyledTooltip = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  background: #e9e8e8;
  padding: 4px 10px;
  border-radius: 4px;
  ${StyledIcon} {
    margin-left: 5px;
    margin-right: 5px;
  }
  ${StyledIcon} ~ ${StyledIcon} {
    margin-right: 5px;
  }
`;

const StyledTooltipContainer = styled.span`
  > * {
    outline: none;
  }
`;

class TopicTooltip extends React.Component<PropsType> {
  private tippyRef: React.RefObject<Object> | null = null;
  componentDidUpdate(prevProps: PropsType) {
    if (prevProps.isDisabled !== this.props.isDisabled) {
      if (this.props.isDisabled) {
        // @ts-ignore -
        this.tippyRef.hide();
        // @ts-ignore
        this.tippyRef.disable();
      } else {
        // @ts-ignore
        this.tippyRef.enable();
      }
    }
  }

  componentWillUnmount() {
    // @ts-ignore
    this.tippyRef.destroy();
  }

  render() {
    const { children, onEditClick, onDeleteClick } = this.props;

    return (
      <StyledTooltipContainer>
        <Tippy
          onCreate={(tip: React.RefObject<Object>) => {
            this.tippyRef = tip;
          }}
          size="small"
          animateFill={false}
          // [initial trigger after, leave trigger after] in ms
          delay={[1000, 0]}
          duration={[0, 0]}
          interactive={true}
          theme="custom"
          distance={5}
          content={
            <StyledTooltip>
              {onEditClick && (
                <StyledIcon onClick={onEditClick}>
                  <IconEdit height={20} width={20} />
                </StyledIcon>
              )}
              {onDeleteClick && (
                <StyledIcon onClick={onDeleteClick}>
                  <IconTrash height={20} width={20} />
                </StyledIcon>
              )}
            </StyledTooltip>
          }
        >
          {children}
        </Tippy>
      </StyledTooltipContainer>
    );
  }
}
export default TopicTooltip;
