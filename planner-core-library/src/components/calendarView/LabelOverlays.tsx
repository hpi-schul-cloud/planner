import React from 'react';
import styled from 'styled-components';
import ComponentProvider from '../provider/componentProvider';

type PropsType = {
  rasterCount: number;
  rasterSize: number;
  labelArray: { startIndex: number; endIndex: number; name: string }[];
};

const StyledOverlayLabel = styled.div<{ left: number; width: number }>`
  position: absolute;
  top: 0px;
  bottom: 0px;
  z-index: 0;
  left: ${props => `${props.left}px`};
  width: ${props => `${props.width}px`};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LabelOverlays: React.SFC<PropsType> = ({ rasterSize, labelArray }) => {
  return (
    <>
      {labelArray.map(label => (
        <StyledOverlayLabel
          left={label.startIndex * rasterSize}
          width={(label.endIndex - label.startIndex + 1) * rasterSize}
        >
          <ComponentProvider.Label caption={label.name} type={'large'} />
        </StyledOverlayLabel>
      ))}
    </>
  );
};

export default LabelOverlays;
