import React from 'react';
import styled from 'styled-components';
import StylesProvider, {
  GeneralStylesType
} from '../../provider/generalStylesProvider';

interface PropsType {
  labels: {
    text: string;
    subText?: string;
  }[];
}

const StyledLabels = styled.div`
  padding-top: 42px;
  padding-right: 10px;
  white-space: nowrap;
  max-width: 70px;
`;
const StyledLabelArea = styled.div`
  height: 57px;
`;

const StyledLabel = styled.div`
  font-family: ${({ styles }: { styles: GeneralStylesType }) =>
    styles['font-family']};
  font-size: 14px;
  color: ${({ styles }: { styles: GeneralStylesType }) =>
    styles.defaultTextColor};
  overflow-x: hidden;
  text-overflow: clip;
`;
const StyledLastLabelArea = styled(StyledLabelArea)`
  height: 30px;
`;

const StyledSubLabel = styled.div`
  font-family: ${({ styles }: { styles: GeneralStylesType }) =>
    styles['font-family']};
  font-size: 12px;
  color: ${({ styles }: { styles: GeneralStylesType }) =>
    styles.lightTextColor};
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
              <StyledLabel styles={StylesProvider.styles}>
                {label.text}
              </StyledLabel>
              {label.subText && (
                <StyledSubLabel styles={StylesProvider.styles}>
                  {label.subText}
                </StyledSubLabel>
              )}
            </StyledLastLabelArea>
          ) : (
            <StyledLabelArea key={i}>
              <StyledLabel styles={StylesProvider.styles}>
                {label.text}
              </StyledLabel>
              {label.subText && (
                <StyledSubLabel styles={StylesProvider.styles}>
                  {label.subText}
                </StyledSubLabel>
              )}
            </StyledLabelArea>
          )
      )}
      <StyledTopicLabel styles={StylesProvider.styles}>
        Themen:
      </StyledTopicLabel>
    </StyledLabels>
  );
};

export default RowCaptions;
