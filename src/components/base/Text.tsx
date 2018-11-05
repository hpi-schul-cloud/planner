import React, { ReactNode } from 'react';
import Label from './Label';
import styled from 'styled-components';

const StyledText = styled.div`
  font-family: sans-serif;
  font-size: 12px;
  color: #5e5e5e;
`;

const StyledTextFieldContainer = styled.div`
  margin: 5px 0px;
  display: inline-flex;
  flex-direction: column;
`;

interface PropsType {
  label?: ReactNode;
  text: ReactNode;
}

const TextField: React.SFC<PropsType> = ({ label = '', text }) => {
  const labelComponent = label ? <Label caption={label} /> : null;
  return (
    <StyledTextFieldContainer>
      {labelComponent}
      <StyledText>{text}</StyledText>
    </StyledTextFieldContainer>
  );
};

export default TextField;
