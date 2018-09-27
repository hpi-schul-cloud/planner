import React from 'react';
import styled from 'styled-components';
import IconAdd from './IconAdd';

type PropsType = {
  iconType: 'ADD';
  onClick: () => void;
};

const IconContainer = styled.span`
  cursor: pointer;
  display: inline-block;
  border-radius: 50%;
  height: 24px;
  :hover {
    background: #f2f2f2;
  }
`;

const IconButton: React.SFC<PropsType> = props => {
  return (
    <IconContainer onClick={props.onClick}>
      <IconAdd color="#5e5e5e" />
    </IconContainer>
  );
};

export default IconButton;
