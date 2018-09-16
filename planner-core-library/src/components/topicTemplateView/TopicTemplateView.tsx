import React, { Component } from 'react';
import styled from 'styled-components';
import ComponentProvider from '../provider/componentProvider';
import { ItemType } from '../base/SelectorInput';
import {
  MEDIA_EDUCATION_OPTIONS,
  LANGUAGE_EDUCATION_OPTIONS,
  INTERDISCIPLINARY_EDUCATION_OPTIONS
} from './constants';

const SchicViewDiv = styled.div``;

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

const LabelDiv = styled.div`
  ${({ styles }: { styles?: string }) => styles};
`;

type FormValuesType = {
  topic: string;
  shortDescription: string;
  numberOfLessons: string;
  competences: string;
  content: string;
  mediaEducation: ItemType[];
  languageEducation: ItemType[];
  interdisciplinaryEducation: ItemType[];
};

type FormFieldType =
  | 'topic'
  | 'shortDescription'
  | 'numberOfLessons'
  | 'competences'
  | 'content'
  | 'examinationType'
  | 'languageEducation'
  | 'interdisciplinaryEducation';

export interface PropsType {
  onSave: (values: FormValuesType) => void;
  initialValues?: FormValuesType;
}

interface StateType {
  values: FormValuesType;
}

export default class TopicTemplateView extends Component<PropsType, StateType> {
  state = {
    values: {
      topic: '',
      shortDescription: '',
      numberOfLessons: '',
      competences: '',
      content: '',
      mediaEducation: [],
      languageEducation: [],
      interdisciplinaryEducation: []
    }
  };

  constructor(props: PropsType) {
    super(props);
    if (this.props.initialValues)
      this.setState({
        values: this.props.initialValues
      });
  }

  onSaveButtonClick = () => {
    this.props.onSave(this.state.values);
  };

  onFormChange = (value: string | ItemType[], key: FormFieldType) => {
    this.setState({
      ...this.state,
      values: {
        ...this.state.values,
        [key]: value
      }
    });
  };

  render() {
    return (
      <SchicViewDiv>
        <ComponentProvider.Headline caption="Themenvorlage erstellen" />
        <FormElementDiv>
          <InlineTextFieldDiv>
            <ComponentProvider.Select
              initialValue="biology"
              values={[{ value: 'biology', text: 'Biologie' }]}
              caption="Fach"
              onChange={() => {}}
            />
          </InlineTextFieldDiv>
          <InlineTextFieldDiv>
            <ComponentProvider.Select
              initialValue="8"
              values={[{ value: '8', text: '8' }]}
              caption="Jahrgang"
              onChange={() => {}}
            />
          </InlineTextFieldDiv>
          <FormElementDiv>
            <InlineTextFieldDiv>
              <ComponentProvider.TextField
                label="Name"
                value={this.state.values.topic}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  this.onFormChange(event.target.value, 'topic')
                }
              />
            </InlineTextFieldDiv>
          </FormElementDiv>
          <FormElementDiv>
            <InlineTextFieldDiv>
              <ComponentProvider.TextField
                label="Anzahl der Wochen"
                value={this.state.values.shortDescription}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  this.onFormChange(event.target.value, 'shortDescription')
                }
              />
            </InlineTextFieldDiv>
            <InlineTextFieldDiv>
              <ComponentProvider.TextField
                label="Einheiten pro Woche"
                value={this.state.values.numberOfLessons}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  this.onFormChange(event.target.value, 'numberOfLessons')
                }
              />
            </InlineTextFieldDiv>
          </FormElementDiv>
        </FormElementDiv>
        <FormElementDiv>
          <FlexContainer>
            <ComponentProvider.TextArea
              label="Inhalt"
              value={this.state.values.content}
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                this.onFormChange(event.target.value, 'content')
              }
            />
          </FlexContainer>
        </FormElementDiv>
        <FormElementDiv>
          <FlexContainer>
            <ComponentProvider.TextArea
              label="Kompetenzen vom Lehrplan"
              value={this.state.values.competences}
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                this.onFormChange(event.target.value, 'competences')
              }
            />
          </FlexContainer>
        </FormElementDiv>
        <FormElementDiv>
          <LabelDiv>Leistungserfassung</LabelDiv>
          <ComponentProvider.SelectorInput
            typeOptions={[{ text: 'Mündlich', value: 'spoken' }]}
            timeOptions={[{ text: '1.Woche', value: '1W' }]}
            values={[]}
            onChange={value => this.onFormChange(value, 'examinationType')}
          />
        </FormElementDiv>
        <ComponentProvider.Button
          onClick={this.onSaveButtonClick}
          caption="Save"
        />
      </SchicViewDiv>
    );
  }
}
