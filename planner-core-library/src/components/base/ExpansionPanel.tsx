import React, { Component } from 'react';
import styled from 'styled-components';
import IconArrowUp from '../../assets/IconArrowDown';
import IconArrowDown from '../../assets/IconArrowUp';

interface PropsType {
  className?: string;
  children: string | JSX.Element | JSX.Element[];
  caption?: string;
}

interface StateType {
  isExpanded: boolean;
}

const StyledContainer = styled.div`
  border-top: solid #979797 1px;
  border-bottom: solid #979797 1px;
`;
const StyledCaptionContainer = styled.div`
  display: flex;
  padding: 10px 5px;
  cursor: pointer;
  align-items: baseline;
  justify-content: space-between;
`;
const StyledCaption = styled.div`
  font-family: sans-serif;
  font-size: 14px;
  color: #4a4a4a;
`;
const StyledContentContainer = styled.div`
  padding: 10px 5px;
  display: ${({ isVisible }: { isVisible: boolean }) =>
    isVisible ? 'initial' : 'none'};
`;

class ExpansionPanel extends Component<PropsType, StateType> {
  state = {
    isExpanded: true
  };

  toggleExpanded = () => {
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  };

  render() {
    const { caption, className, children } = this.props;
    return (
      <StyledContainer className={className}>
        <StyledCaptionContainer onClick={this.toggleExpanded}>
          <StyledCaption>{caption}</StyledCaption>
          {this.state.isExpanded ? (
            <IconArrowDown color="#979797" />
          ) : (
            <IconArrowUp color="#979797" />
          )}
        </StyledCaptionContainer>
        <StyledContentContainer isVisible={this.state.isExpanded}>
          {children}
        </StyledContentContainer>
      </StyledContainer>
    );
  }
}

export default ExpansionPanel;
