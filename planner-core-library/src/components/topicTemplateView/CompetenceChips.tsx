import React, { Component } from 'react';
import styled from 'styled-components';
import ComponentProvider from '../provider/componentProvider';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

type PropsType = {
  caption: string;
  competences: { id: string; level: string; text: string }[];
  onChange: (
    competences: { id: string; level: string; text: string }[]
  ) => void;
};

const StyledChipsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledChipContainer = styled.span`
  margin-bottom: 4px;
`;

const StyledLabel = styled.span`
  padding-bottom: 6px;
`;

class CompetenceChips extends Component<PropsType> {
  deleteCompetence = (index: number) => {
    this.props.onChange([
      ...this.props.competences.slice(0, index),
      ...this.props.competences.slice(index + 1)
    ]);
  };

  addCompetence = () => {
    this.props.onChange([
      ...this.props.competences,
      {
        id: 'new',
        level: 'Stufe E',
        text:
          'Diagramme mit zwei Variablen beschreiben und aus ihnen Daten entnehmen'
      }
    ]);
  };

  render() {
    const { caption, competences } = this.props;
    return (
      <StyledChipsContainer>
        <StyledLabel>
          <ComponentProvider.Label caption={caption} />
        </StyledLabel>
        {competences.map((competence, index) => (
          <StyledChipContainer>
            <ComponentProvider.Chip
              key={index}
              firstLabel={competence.level}
              secondLabel={competence.text}
              onDeleteClick={() => this.deleteCompetence(index)}
            />
          </StyledChipContainer>
        ))}
        <IconButton onClick={this.addCompetence} aria-label="Add">
          <AddIcon />
        </IconButton>
      </StyledChipsContainer>
    );
  }
}

export default CompetenceChips;
