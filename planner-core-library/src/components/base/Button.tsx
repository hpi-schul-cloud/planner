import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;
  padding: 6px 18px;
  border: 1px solid #979797;
  border-radius: 5px;
  font-family: Roboto-Regular;
  font-size: 14px;
  color: #5e5e5e;
  text-align: center;
`;

interface PropsType {
  className?: string;
  caption: string;
  disabled?: boolean;
  color?: 'primary' | 'secondary' | 'default';
  size?: 'small' | 'medium' | 'large';
  type?: 'default' | 'bold' | 'thin';
  onClick?: () => void;
}

const Button: React.SFC<PropsType> = ({
  caption,
  className,
  onClick,
  disabled = false
}) => {
  return (
    <StyledButton onClick={onClick} className={className} disabled>
      {caption}
    </StyledButton>
  );
};
export default Button;
