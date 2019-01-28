import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import IconTrash from '../../../assets/IconTrash';
import IconEdit from '../../../assets/IconEdit';
import IconSave from '../../../assets/IconSave';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

interface PropsType {
  isDisabled?: boolean;
  isLocal: boolean;
  onSaveConfiguration?: () => void;
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
  background: #f8f8f8d4;
  padding: 5px 6px;
  border-radius: 20px;
  box-shadow: #6f6f6f42 2px 2px 7px 1px;
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
    const {
      children,
      onEditClick,
      onDeleteClick,
      onSaveConfiguration,
      isLocal
    } = this.props;

    return (
      <StyledTooltipContainer>
        <Tippy
          onCreate={(tip: React.RefObject<Object>) => {
            this.tippyRef = tip;
          }}
          size="small"
          animateFill={false}
          // [initial trigger after, leave trigger after] in ms
          delay={[0, 20]}
          duration={[100, 100]}
          interactive={true}
          theme="custom"
          // @ts-ignore - types only expect one value, but multiple can actually be set
          trigger="click"
          distance={5}
          content={
            <StyledTooltip>
              {!isLocal &&
                onEditClick && (
                  <StyledIcon onClick={onEditClick}>
                    <IconEdit height={20} width={20} />
                  </StyledIcon>
                )}
              {!isLocal &&
                onDeleteClick && (
                  <StyledIcon onClick={onDeleteClick}>
                    <IconTrash height={20} width={20} />
                  </StyledIcon>
                )}
              {isLocal &&
                onSaveConfiguration && (
                  <StyledIcon onClick={onSaveConfiguration}>
                    <IconSave height={20} width={20} />
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
