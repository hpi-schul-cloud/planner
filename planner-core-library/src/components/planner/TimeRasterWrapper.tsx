import React from 'react';
import styled from 'styled-components';

type StringMapType = {
  [index: number]: string;
};

interface PropsType {
  children: JSX.Element | JSX.Element[];
  rasterCount: number;
  rasterSize: number;
  rasterColumnColorMap?: StringMapType;
  rasterColumnLabelMap?: StringMapType;
}
const StyledOverflowContainer = styled.div`
  overflow-x: scroll;
  margin-bottom: 20px;
  vertical-align: top;
  /* To adjust the size of inline-block elements https://stackoverflow.com/questions/27536428/inline-block-element-height-issue */
  font-size: 1px;
`;

const StyledTopLabel = styled.div`
  display: inline-block;
  width: ${({ width }: { width: number }) => `${width}px`};
  text-overflow: ellipsis;
  overflow-x: hidden;
  font-family: sans-serif;
  font-size: 12px;
  color: #838383;
  vertical-align: top;
`;

type StyledRasterColumnPropsType = {
  width: number;
  backgroundColor: string;
  left: number;
};
const StyledRasterColumn = styled.div`
  z-index: -1;
  box-sizing: border-box;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: ${({ left }: StyledRasterColumnPropsType) => `${left}px`};
  width: ${({ width }: StyledRasterColumnPropsType) => `${width}px`};
  background: ${({ backgroundColor }: StyledRasterColumnPropsType) =>
    backgroundColor};
`;

const StyledWidthContainer = styled.div`
  width: ${({ width }: { width: number }) => `${width}px`};
  position: relative;
  ${StyledRasterColumn} {
    border: 1px solid #e9e8e8;
  }
  ${StyledRasterColumn} ~ ${StyledRasterColumn} {
    border-left: none;
  }
`;

const generateTopLabels = (
  rasterCount: number,
  rasterSize: number,
  rasterColumnLabelMap: StringMapType = {}
) => {
  const result = [];
  let lastText = '';
  let lastIndex = 0;
  let i;

  for (i = 0; i < rasterCount; i++) {
    if (rasterColumnLabelMap[i]) {
      if (lastIndex !== i) {
        result.push(
          <StyledTopLabel width={(i - lastIndex) * rasterSize} key={i}>
            {lastText}
          </StyledTopLabel>
        );
      }
      lastIndex = i;
      lastText = rasterColumnLabelMap[i];
    }
  }
  result.push(
    <StyledTopLabel width={(rasterCount - lastIndex) * rasterSize} key={i}>
      {lastText}
    </StyledTopLabel>
  );

  return result;
};

const generateRaster = (
  rasterCount: number,
  rasterSize: number,
  rasterColumnColorMap: StringMapType = {}
) => {
  const result = [];

  for (let i = 0; i < rasterCount; i++) {
    result.push(
      <StyledRasterColumn
        key={i}
        left={i * rasterSize}
        width={rasterSize}
        backgroundColor={
          rasterColumnColorMap[i] ? rasterColumnColorMap[i] : 'none'
        }
      />
    );
  }

  return result;
};

const TimeRasterWrapper = (props: PropsType) => {
  const {
    rasterSize,
    rasterCount,
    rasterColumnColorMap,
    rasterColumnLabelMap
  } = props;

  return (
    <StyledOverflowContainer>
      <StyledWidthContainer width={props.rasterCount * props.rasterSize}>
        {generateTopLabels(rasterCount, rasterSize, rasterColumnLabelMap)}
      </StyledWidthContainer>
      <StyledWidthContainer width={props.rasterCount * props.rasterSize}>
        {props.children}
        {generateRaster(rasterCount, rasterSize, rasterColumnColorMap)}
      </StyledWidthContainer>
    </StyledOverflowContainer>
  );
};

export default TimeRasterWrapper;
