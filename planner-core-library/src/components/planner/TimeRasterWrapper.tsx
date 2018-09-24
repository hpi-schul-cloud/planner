import React from 'react';
import styled from 'styled-components';
import StylesProvider from '../provider/generalStylesProvider';

type StringMapType = {
  [index: number]: string;
};

interface PropsType {
  children: JSX.Element | JSX.Element[];
  className?: string;
  rasterCount: number;
  rasterSize: number;
  columnColorMap?: StringMapType;
  topLabelsMap?: StringMapType;
  bottomLabelsMap?: StringMapType;
}
const StyledOverflowContainer = styled.div`
  overflow-x: scroll;
  margin-bottom: 20px;
  vertical-align: top;
  /* To adjust the size of inline-block elements https://stackoverflow.com/questions/27536428/inline-block-element-height-issue */
  font-size: 1px;
`;

const StyledLabel = styled.div`
  display: inline-block;
  position: absolute;
  left: ${({ left }: { left: number }) => `${left}px`};
  text-overflow: ellipsis;
  overflow-x: hidden;
  font-family: ${StylesProvider.generalStyles['font-family']};
  font-size: 12px;
  color: ${StylesProvider.generalStyles.lightTextColor};
  vertical-align: top;
`;
const StyledBottomLabel = styled(StyledLabel)`
  /* Centered to middle of text */
  transform: translate(-50%, 0);
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
  z-index: 1;
  position: relative;
  ${StyledRasterColumn} {
    border: 1px solid #e9e8e8;
  }
  ${StyledRasterColumn} ~ ${StyledRasterColumn} {
    border-left: none;
  }
`;
const StyledTopLabelContainer = styled(StyledWidthContainer)`
  height: 14px;
`;
const StyledBottomLabelContainer = styled(StyledTopLabelContainer)`
  margin-top: 5px;
`;

const generateTopLabels = (
  rasterSize: number,
  rasterColumnLabelMap: StringMapType = {}
) => {
  return Object.keys(rasterColumnLabelMap).map(key => (
    <StyledLabel left={+key * rasterSize} key={key}>
      {rasterColumnLabelMap[key].slice(0, 3)}
    </StyledLabel>
  ));
};

const generateBottomLabels = (
  rasterSize: number,
  rasterColumnLabelMap: StringMapType = {}
) => {
  return Object.keys(rasterColumnLabelMap).map(key => (
    <StyledBottomLabel left={+key * rasterSize} key={key}>
      {rasterColumnLabelMap[key]}
    </StyledBottomLabel>
  ));
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
    className,
    rasterSize,
    rasterCount,
    columnColorMap,
    topLabelsMap,
    bottomLabelsMap
  } = props;

  return (
    <StyledOverflowContainer className={className}>
      {topLabelsMap && (
        <StyledTopLabelContainer width={props.rasterCount * props.rasterSize}>
          {generateTopLabels(rasterSize, topLabelsMap)}
        </StyledTopLabelContainer>
      )}
      <StyledWidthContainer width={props.rasterCount * props.rasterSize}>
        {props.children}
        {generateRaster(rasterCount, rasterSize, columnColorMap)}
      </StyledWidthContainer>
      {bottomLabelsMap && (
        <StyledBottomLabelContainer
          width={props.rasterCount * props.rasterSize}
        >
          {generateBottomLabels(rasterSize, bottomLabelsMap)}
        </StyledBottomLabelContainer>
      )}
    </StyledOverflowContainer>
  );
};

export default TimeRasterWrapper;
