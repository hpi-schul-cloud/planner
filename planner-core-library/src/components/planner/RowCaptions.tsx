import React from 'react';
import styled from 'styled-components';

interface PropsType {
  labels: {
    text: string;
    subText?: string;
  }[];
}
const StyledLabels = styled.div`
  padding-top: 39px;
  padding-right: 10px;
  white-space: nowrap;
  max-width: 70px;
`;
const StyledLabelArea = styled.div`
  height: 57px;
`;

const StyledLabel = styled.div`
  font-family: sans-serif;
  font-size: 14px;
  color: #5e5e5e;
  overflow-x: hidden;
  text-overflow: clip;
`;
const StyledLastLabelArea = styled(StyledLabelArea)`
  height: 30px;
`;

const StyledSubLabel = styled.div`
  font-family: sans-serif;
  font-size: 12px;
  color: #838383;
  text-align: center;
  overflow-x: hidden;
  text-overflow: clip;
`;

const StyledTopicLabel = styled(StyledLabel)`
  padding-top: 23px;
`;

const RowCaptions: React.SFC<PropsType> = ({ labels }) => {
  return (
    <StyledLabels>
      {labels.map(
        (label, i) =>
          labels.length - 1 === i ? (
            <StyledLastLabelArea>
              <StyledLabel>{label.text}</StyledLabel>
              {label.subText && (
                <StyledSubLabel>{label.subText}</StyledSubLabel>
              )}
            </StyledLastLabelArea>
          ) : (
            <StyledLabelArea>
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
