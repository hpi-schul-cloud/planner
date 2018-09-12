import React from 'react';
import styled from 'styled-components';
import StylesProvider from '../provider/generalStylesProvider';

interface PropsType {
  labels: {
    text: string;
    subText?: string;
  }[];
}

const StyledLabels = styled.div`
  padding-top: 40px;
  padding-right: 10px;
  white-space: nowrap;
  max-width: 70px;
`;
const StyledLabelArea = styled.div`
  height: 57px;
`;

const StyledLabel = styled.div`
  font-family: ${StylesProvider.generalStyles['font-family']};
  font-size: 14px;
  color: ${StylesProvider.generalStyles.defaultTextColor};
  overflow-x: hidden;
  text-overflow: clip;
`;
const StyledLastLabelArea = styled(StyledLabelArea)`
  height: 30px;
`;

const StyledSubLabel = styled.div`
  font-family: ${StylesProvider.generalStyles['font-family']};
  font-size: 12px;
  color: ${StylesProvider.generalStyles.lightTextColor};
  text-align: center;
  overflow-x: hidden;
  text-overflow: clip;
`;

const StyledTopicLabel = styled(StyledLabel)`
  padding-top: 22px;
`;

const RowCaptions: React.SFC<PropsType> = ({ labels }) => {
  return (
    <StyledLabels>
      {labels.map(
        (label, i) =>
          labels.length - 1 === i ? (
            <StyledLastLabelArea key={i}>
              <StyledLabel>{label.text}</StyledLabel>
              {label.subText && (
                <StyledSubLabel>{label.subText}</StyledSubLabel>
              )}
            </StyledLastLabelArea>
          ) : (
            <StyledLabelArea key={i}>
              <StyledLabel>{label.text}</StyledLabel>
              {label.subText && (
                <StyledSubLabel>{label.subText}</StyledSubLabel>
              )}
            </StyledLabelArea>
          )
      )}
      <StyledTopicLabel>Themen:</StyledTopicLabel>
    </StyledLabels>
  );
};

export default RowCaptions;
