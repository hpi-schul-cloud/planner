import React from 'react';
import styled from 'styled-components';
import StylesProvider from '../provider/generalStylesProvider';

interface PropsType {
  labels: {
    topLabel: string;
    subLabels: string[];
  }[];
}

const StyledTopLabel = styled.div`
  font-family: ${StylesProvider.generalStyles['font-family']};
  font-size: 14px;
  color: ${StylesProvider.generalStyles.defaultTextColor};
  overflow-x: hidden;
  text-overflow: clip;
  margin-top: 15px;
`;

const StyledSubLabel = styled.div`
  font-family: ${StylesProvider.generalStyles['font-family']};
  font-size: 14px;
  color: ${StylesProvider.generalStyles.defaultTextColor};
  text-align: center;
  overflow-x: hidden;
  text-overflow: clip;
  padding-top: 15px;
  padding-left: 25px;
`;

const StyledLabels = styled.div`
  padding-top: 10px;
  padding-right: 10px;
  white-space: nowrap;
  max-width: 100px;
  ${StyledTopLabel}:first-child {
    margin-top: 0px;
  }
`;

const RowCaptions: React.SFC<PropsType> = ({ labels }) => {
  function generateLabels(
    labels: {
      topLabel: string;
      subLabels: string[];
    }[]
  ) {
    const result: JSX.Element[] = [];
    labels.forEach((label, i) => {
      result.push(<StyledTopLabel key={i}>{label.topLabel}</StyledTopLabel>);
      label.subLabels.forEach((subLabel, j) => {
        result.push(
          <StyledSubLabel key={`${i}-${j}`}>{subLabel}</StyledSubLabel>
        );
      });
    });

    return result;
  }
  const labelComponents = generateLabels(labels);

  return <StyledLabels>{labelComponents}</StyledLabels>;
};

export default RowCaptions;
