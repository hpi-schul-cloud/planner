import React, { Component } from 'react';
import styled from 'styled-components';
import range from 'lodash/range';
import ComponentProvider from '../provider/componentProvider';
import CompetenceChips from './CompetenceChips';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormElementDiv = styled.div`
  margin-bottom: 10px;
`;

const InlineTextFieldDiv = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-right: 10px;
`;

type ItemType = {
  typeValue: string;
  timeValue: string;
  textValue: string;
};

type FormValuesType = {
  subject: string;
  classLevel: string;
  name: string;
  numberOfWeeks: string;
  unitsPerPeek: string;
  content: string;
  subjectUnits: string[];
  examinations: ItemType[];
  competences: { id: string; level: string; text: string }[];
};

type FormFieldType = keyof FormValuesType;

export interface PropsType {
  onSave: (values: FormValuesType) => void;
  onDelete: (id: string) => void;
  initialValues: Partial<FormValuesType>;
  id: string;
}

interface StateType {
  currentValues: FormValuesType;
}

export default class TopicInstanceView extends Component<PropsType, StateType> {
  state = {
    currentValues: {
      subject: '',
      classLevel: '',
      name: '',
      numberOfWeeks: '4',
      unitsPerPeek: '2',
      content: '',
      subjectUnits: [] as string[],
      examinations: [] as ItemType[],
      competences: [] as { id: string; level: string; text: string }[]
    }
  };

  constructor(props: PropsType) {
    super(props);
    if (this.props.initialValues)
      this.state = {
        currentValues: {
          ...this.state.currentValues,
          ...this.props.initialValues
        }
      };
  }

  onDeleteButtonClick = () => {
    this.props.onDelete(this.props.id);
  };

  onSaveButtonClick = () => {
    this.props.onSave(this.state.currentValues);
  };

  onFormChange = (
    value:
      | string
      | string[]
      | ItemType[]
      | { id: string; level: string; text: string }[],
    key: FormFieldType
  ) => {
    this.setState({
      ...this.state,
      currentValues: {
        ...this.state.currentValues,
        [key]: value
      }
    });
  };

  getTextFieldTableCaptions = (numberOfWeeks: string, unitsPerPeek: string) => {
    const captions: string[] = [];
    range(+numberOfWeeks).forEach(weekNumber => {
      range(+unitsPerPeek).forEach(unitNumber => {
        captions.push(`${weekNumber + 1}.Woche ${unitNumber + 1}.Einheit`);
      });
    });

    return captions;
  };

  render() {
    const captions = this.getTextFieldTableCaptions(
      this.state.currentValues.numberOfWeeks,
      this.state.currentValues.unitsPerPeek
    );
    const rows = captions.map((caption, index) => ({
      caption,
      value: this.state.currentValues.subjectUnits[index] || ''
    }));

    return (
      <div>
        <ComponentProvider.Headline caption="Themenvorlage erstellen" />
        <FormElementDiv>
          <InlineTextFieldDiv>
            <ComponentProvider.Text
              label="Fach"
              text={this.state.currentValues.subject}
            />
          </InlineTextFieldDiv>
          <InlineTextFieldDiv>
            <ComponentProvider.Text
              label="Jahrgang"
              text={this.state.currentValues.classLevel}
            />
          </InlineTextFieldDiv>
          <FormElementDiv>
            <InlineTextFieldDiv>
              <ComponentProvider.TextField
                label="Name"
                value={this.state.currentValues.name}
                onChange={event =>
                  this.onFormChange(event.target.value, 'name')
                }
              />
            </InlineTextFieldDiv>
          </FormElementDiv>
          <FormElementDiv>
            <InlineTextFieldDiv>
              <ComponentProvider.TextField
                label="Anzahl der Wochen"
                value={this.state.currentValues.numberOfWeeks}
                onChange={event =>
                  this.onFormChange(event.target.value, 'numberOfWeeks')
                }
              />
            </InlineTextFieldDiv>
            <InlineTextFieldDiv>
              <ComponentProvider.TextField
                label="Einheiten pro Woche"
                value={this.state.currentValues.unitsPerPeek}
                onChange={event =>
                  this.onFormChange(event.target.value, 'unitsPerPeek')
                }
              />
            </InlineTextFieldDiv>
          </FormElementDiv>
        </FormElementDiv>
        <FormElementDiv>
          <FlexContainer>
            <ComponentProvider.TextArea
              label="Inhalt"
              value={this.state.currentValues.content}
              onChange={event =>
                this.onFormChange(event.target.value, 'content')
              }
            />
          </FlexContainer>
        </FormElementDiv>
        <FormElementDiv>
          <FlexContainer>
            <ComponentProvider.Label caption="Unterrichtseinheiten" />
            <ComponentProvider.TextFieldTable
              rows={rows}
              onChange={rows =>
                this.onFormChange(rows.map(row => row.value), 'subjectUnits')
              }
            />
          </FlexContainer>
        </FormElementDiv>
        <FormElementDiv>
          <ComponentProvider.Label caption="Leistungserfassung" />
          <ComponentProvider.SelectorInput
            typeOptions={[{ text: 'Mündlich', value: 'spoken' }]}
            timeOptions={[{ text: '1.Woche', value: '1W' }]}
            values={this.state.currentValues.examinations}
            onChange={value => this.onFormChange(value, 'examinations')}
          />
        </FormElementDiv>
        <FormElementDiv>
          <FlexContainer>
            <CompetenceChips
              caption="Kompetenzen vom Lehrplan"
              competences={this.state.currentValues.competences}
              onChange={value => this.onFormChange(value, 'competences')}
            />
          </FlexContainer>
        </FormElementDiv>
        <ComponentProvider.Button
          onClick={this.onDeleteButtonClick}
          caption="Löschen"
          color="default"
          type="thin"
        />
        <ComponentProvider.Button
          onClick={this.onSaveButtonClick}
          caption="Speichern"
          color="primary"
        />
      </div>
    );
  }
}
