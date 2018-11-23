import React from 'react';
import Label from './Label';
import styled from 'styled-components';

const StyledInput = styled.input`
  background: #ffffff;
  border: 1px solid #979797;
  border-radius: 5px;
  font-family: sans-serif;
  font-size: 12px;
  color: #5e5e5e;

  padding: ${({ margin }: { margin: 'none' | 'dense' | 'normal' }) =>
    margin === 'dense' || margin === 'none' ? '0px' : '9px 12px'};
`;

const StyledTextFieldContainer = styled.div<{
  fullWidth: boolean;
  margin?: 'none' | 'dense' | 'normal';
}>`
  margin: ${({ margin }) => (margin === 'none' ? '0px' : '5px 0px')};
  display: inline-flex;
  flex-direction: column;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'initial')};
`;

interface PropsType {
  label?: string;
  placeHolderText?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  margin?: 'none' | 'dense' | 'normal';
  className?: string;
  fullWidth?: boolean;
}

const TextField: React.SFC<PropsType> = ({
  label = '',
  placeHolderText = '',
  value = '',
  onChange = () => {},
  className,
  margin = 'normal',
  fullWidth = false
}) => {
  const labelComponent = label ? <Label caption={label} /> : null;
  return (
    <StyledTextFieldContainer margin={margin} fullWidth={fullWidth}>
      {labelComponent}
      <StyledInput
        placeholder={placeHolderText}
        value={value}
        onChange={onChange}
        className={className}
        margin={margin}
      />
    </StyledTextFieldContainer>
  );
};

export default TextField;
