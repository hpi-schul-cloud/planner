import React from "react";
import styled from "styled-components";

const Input = styled.input`
  ${({ styles }: { styles?: string }) => styles};
`;

export default Input;
