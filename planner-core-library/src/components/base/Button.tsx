import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  ${({ styles }: { styles?: string }) => styles};
`;

export default StyledButton;
