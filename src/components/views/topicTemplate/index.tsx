import React, { Component } from 'react';
import styled from 'styled-components';
import range from 'lodash/range';
import ComponentProvider from '../../provider/componentProvider';
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

const StyledContainer = styled.div`
  > * {
    box-sizing: border-box;
    line-height: normal;
    outline: none;
  }
`;

type IdTextType = {
  id: string;
  text: string;
};

type ItemType = {
  typeValue: string;
  timeValue: string;
  textValue: string;
};

type FormValuesOptionsType = {
  subject: IdTextType[];
  classLevel: IdTextType[];
};

type FormValuesType = {
  subjectId: string;
  classLevelId?: string;
  name: string;
  numberOfWeeks: string;
  unitsPerWeek: string;
  content?: string;
  subjectUnits?: string[];
  examinations?: ItemType[];
  competences?: { id: string; level: string; text: string }[];
};

type FormFieldType = keyof FormValuesType;
// Property interfaces differ between EDIT and NEW mode
export type PropsType =
  | {
      mode: 'EDIT';
      initialValues: FormValuesType;
      valueOptions: FormValuesOptionsType;
      onCreate?: (values: FormValuesType) => void;
      onSave: (values: FormValuesType) => void;
      onDelete: () => void;
    }
  | {
      mode: 'NEW';
      initialValues?: FormValuesType;
      valueOptions: FormValuesOptionsType;
      onCreate: (values: FormValuesType) => void;
      onSave?: (values: FormValuesType) => void;
      onDelete?: () => void;
    };

interface StateType {
  currentValues: Required<FormValuesType>;
}

export default class TopicTemplateView extends Component<PropsType, StateType> {
  state: StateType = {
    currentValues: {
      subjectId: '',
      classLevelId: '',
      name: '',
      numberOfWeeks: '4',
      unitsPerWeek: '2',
      content: '',
      subjectUnits: [],
      examinations: [],
      competences: []
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

  onCreateButtonClick = () => {
    if (this.props.mode === 'NEW')
      this.props.onCreate(this.state.currentValues);
  };

  onSaveButtonClick = () => {
    if (this.props.mode === 'EDIT') this.props.onSave(this.state.currentValues);
  };

  onDeleteButtonClick = () => {
    if (this.props.mode === 'EDIT') this.props.onDelete();
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

  getTextFieldTableCaptions = (numberOfWeeks: string, unitsPerWeek: string) => {
    const captions: string[] = [];
    range(+numberOfWeeks).forEach(weekNumber => {
      range(+unitsPerWeek).forEach(unitNumber => {
        captions.push(`${weekNumber + 1}.Woche ${unitNumber + 1}.Einheit`);
      });
    });

    return captions;
  };

  render() {
    const {
      subject: subjectOptions,
      classLevel: classLevelOptions
    } = this.props.valueOptions;
    const captions = this.getTextFieldTableCaptions(
      this.state.currentValues.numberOfWeeks,
      this.state.currentValues.unitsPerWeek
    );
    const rows = captions.map((caption, index) => ({
      caption,
      value: this.state.currentValues.subjectUnits[index] || ''
    }));

    return (
      <StyledContainer>
        <FormElementDiv>
          <InlineTextFieldDiv>
            <ComponentProvider.Select
              initialValue={this.state.currentValues.subjectId}
              values={subjectOptions}
              caption="Fach"
              onChange={event => {
                // @ts-ignore
                this.onFormChange(event.target.value, 'subjectId');
              }}
            />
          </InlineTextFieldDiv>
          <InlineTextFieldDiv>
            <ComponentProvider.Select
              initialValue={this.state.currentValues.classLevelId}
              values={classLevelOptions}
              caption="Jahrgang"
              onChange={event =>
                // @ts-ignore
                this.onFormChange(event.target.value, 'classLevelId')
              }
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
                value={this.state.currentValues.unitsPerWeek}
                onChange={event =>
                  this.onFormChange(event.target.value, 'unitsPerWeek')
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
            <ComponentProvider.Label
              caption="Unterrichtseinheiten"
              type="small"
            />
            <ComponentProvider.TextFieldTable
              rows={rows}
              onChange={rows =>
                this.onFormChange(rows.map(row => row.value), 'subjectUnits')
              }
            />
          </FlexContainer>
        </FormElementDiv>
        <FormElementDiv>
          <ComponentProvider.Label caption="Leistungserfassung" type="small" />
          <ComponentProvider.SelectorInput
            typeOptions={[
              { text: 'Mündlich', value: 'spoken' },
              { text: 'Schriftlich', value: 'written' },
              { text: 'Anders', value: 'other' }
            ]}
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
        {this.props.mode === 'NEW' ? (
          <ComponentProvider.Button
            onClick={this.onCreateButtonClick}
            caption="Erstellen"
            color="primary"
          />
        ) : (
          <>
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
          </>
        )}
      </StyledContainer>
    );
  }

  static defaultProps = {
    onCreate: () => {},
    onSave: () => {},
    onDelete: () => {},
    mode: 'NEW'
  };
}
