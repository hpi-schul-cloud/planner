import React from 'react';
import styled from 'styled-components';
import StylesProvider, {
  GeneralStylesType
} from '../provider/generalStylesProvider';

type StringMapType = {
  [index: number]: string;
};

interface PropsType {
  children: JSX.Element | JSX.Element[];
  topChildren?: JSX.Element | JSX.Element[];
  className?: string;
  rasterCount: number;
  rasterSize: number;
  columnColorMap?: StringMapType;
  topLabelsMap?: StringMapType;
  bottomLabelsMap?: StringMapType;
  todayLineIndex?: number;
}

const StyledTodayLine = styled.div`
  top: -5px;
  bottom: -5px;
  position: absolute;
  z-index: -1;
  width: 2px;
  background: #ea3e3e;
  left: ${({ left }: { left: number }) => `${left}px`};
`;
const StyledOverflowContainer = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
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
  font-family: ${({ styles }: { left: number; styles: GeneralStylesType }) =>
    styles['font-family']};
  font-size: 12px;
  color: ${({ styles }: { styles: GeneralStylesType }) =>
    styles.lightTextColor};
  vertical-align: top;
`;
const StyledCenteredLabel = styled(StyledLabel)`
  /* Centered to middle of text */
  transform: translate(-50%, 0);
`;

type StyledRasterColumnPropsType = {
  width: number;
  backgroundColor: string;
  left: number;
};
const StyledRasterColumn = styled.div.attrs<StyledRasterColumnPropsType>({
  width: (props: StyledRasterColumnPropsType) => `${props.width}px` || '0px',
  backgroundColor: (props: StyledRasterColumnPropsType) =>
    `${props.backgroundColor}` || 'none',
  left: (props: StyledRasterColumnPropsType) => `${props.left}px` || '0px'
})`
  z-index: -1;
  box-sizing: border-box;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: ${props => props.left};
  width: ${props => props.width};
  background: ${props => props.backgroundColor};
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
  padding-top: 5px;
`;

const generateTopLabels = (
  rasterSize: number,
  rasterColumnLabelMap: StringMapType = {}
) => {
  return Object.keys(rasterColumnLabelMap).map(key => (
    <StyledLabel
      styles={StylesProvider.styles}
      left={+key * rasterSize}
      key={key}
    >
      {rasterColumnLabelMap[key]}
    </StyledLabel>
  ));
};

const generateBottomLabels = (
  rasterSize: number,
  rasterColumnLabelMap: StringMapType = {}
) => {
  return Object.keys(rasterColumnLabelMap).map(key => (
    <StyledCenteredLabel
      styles={StylesProvider.styles}
      left={+key * rasterSize + 0.5 * rasterSize}
      key={key}
    >
      {rasterColumnLabelMap[key]}
    </StyledCenteredLabel>
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
    topChildren,
    rasterSize,
    rasterCount,
    columnColorMap,
    topLabelsMap,
    bottomLabelsMap,
    todayLineIndex
  } = props;
  const todayLineLeft =
    todayLineIndex !== undefined
      ? todayLineIndex < 0
        ? 0
        : todayLineIndex > rasterCount - 1
          ? rasterCount * rasterSize - 2
          : todayLineIndex * rasterSize + 0.5 * rasterSize
      : null;

  return (
    <StyledOverflowContainer className={className}>
      <StyledWidthContainer width={rasterCount * rasterSize}>
        {topChildren}
      </StyledWidthContainer>
      <StyledTopLabelContainer width={rasterCount * rasterSize}>
        {generateTopLabels(rasterSize, topLabelsMap)}
      </StyledTopLabelContainer>
      <StyledWidthContainer width={rasterCount * rasterSize}>
        {props.children}
        {generateRaster(rasterCount, rasterSize, columnColorMap)}
        {todayLineLeft !== null && <StyledTodayLine left={todayLineLeft} />}
      </StyledWidthContainer>
      {bottomLabelsMap && (
        <StyledBottomLabelContainer width={rasterCount * rasterSize}>
          {generateBottomLabels(rasterSize, bottomLabelsMap)}
        </StyledBottomLabelContainer>
      )}
    </StyledOverflowContainer>
  );
};

export default TimeRasterWrapper;
