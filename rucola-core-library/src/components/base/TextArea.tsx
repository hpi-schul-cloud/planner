import React from "react";
import styled from "styled-components";

const TextArea = styled.textarea`
  ${({ styles }: { styles?: string }) => styles};
`;

export default TextArea;
