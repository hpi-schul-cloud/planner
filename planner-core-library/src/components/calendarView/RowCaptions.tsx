import React from 'react';
import styled from 'styled-components';
import StylesProvider, {
  GeneralStylesType
} from '../provider/generalStylesProvider';

interface PropsType {
  labels: {
    topLabel: string;
    subLabels: string[];
  }[];
}

const StyledTopLabel = styled.div`
  font-family: ${({ styles }: { styles: GeneralStylesType }) =>
    styles['font-family']};
  font-size: 14px;
  color: ${({ styles }: { styles: GeneralStylesType }) =>
    styles.defaultTextColor};
  overflow-x: hidden;
  text-overflow: clip;
  margin-top: 13px;
`;

const StyledSubLabel = styled.div`
  font-family: ${({ styles }: { styles: GeneralStylesType }) =>
    styles['font-family']};
  font-size: 14px;
  color: ${({ styles }: { styles: GeneralStylesType }) =>
    styles.defaultTextColor};
  text-align: center;
  overflow-x: hidden;
  text-overflow: clip;
  padding-top: 9px;
  padding-left: 25px;
`;

const StyledLabels = styled.div`
  padding-top: 40px;
  padding-right: 10px;
  white-space: nowrap;
  max-width: 100px;
  ${StyledTopLabel}:first-child {
    margin-top: 0px;
  }
  ${StyledSubLabel} + ${StyledSubLabel} {
    padding-top: 17px;
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
      result.push(
        <StyledTopLabel key={i} styles={StylesProvider.styles}>
          {label.topLabel}
        </StyledTopLabel>
      );
      label.subLabels.forEach((subLabel, j) => {
        result.push(
          <StyledSubLabel key={`${i}-${j}`} styles={StylesProvider.styles}>
            {subLabel}
          </StyledSubLabel>
        );
      });
    });

    return result;
  }
  const labelComponents = generateLabels(labels);

  return <StyledLabels>{labelComponents}</StyledLabels>;
};

export default RowCaptions;
