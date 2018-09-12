import React, { Component } from 'react';
import styled from 'styled-components';
import { ViewStylesType } from '../stylesType';
import Button from '../base/Button';
import Input from '../base/TextField';
import TextArea from '../base/TextArea';
import ComponentProvider from '../provider/componentProvider';
import { ComponentStylesType } from './stylesType';
import SelectorInput, { ItemType } from './SelectorInput';
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
  | 'mediaEducation'
  | 'languageEducation'
  | 'interdisciplinaryEducation';

export interface PropsType {
  onSave: (values: FormValuesType) => void;
  initialValues?: FormValuesType;
  styles: ViewStylesType<ComponentStylesType>;
}

interface StateType {
  values: FormValuesType;
}

export default class SchicView extends Component<PropsType, StateType> {
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
        <FormElementDiv>
          <InlineTextFieldDiv>
            <LabelDiv styles={this.props.styles.baseComponents.label}>
              Thema
            </LabelDiv>
            <Input
              value={this.state.values.topic}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                this.onFormChange(event.target.value, 'topic')
              }
            />
          </InlineTextFieldDiv>
          <InlineTextFieldDiv>
            <LabelDiv styles={this.props.styles.baseComponents.label}>
              Kurzbeschreibung
            </LabelDiv>
            <Input
              value={this.state.values.shortDescription}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                this.onFormChange(event.target.value, 'shortDescription')
              }
            />
          </InlineTextFieldDiv>
          <InlineTextFieldDiv>
            <LabelDiv styles={this.props.styles.baseComponents.label}>
              Anzahl Stunden
            </LabelDiv>
            <Input
              value={this.state.values.numberOfLessons}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                this.onFormChange(event.target.value, 'numberOfLessons')
              }
            />
          </InlineTextFieldDiv>
        </FormElementDiv>
        <FormElementDiv>
          <FlexContainer>
            <LabelDiv styles={this.props.styles.baseComponents.label}>
              Kompetenzen vom Lehrplan
            </LabelDiv>
            <TextArea
              value={this.state.values.competences}
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                this.onFormChange(event.target.value, 'competences')
              }
              styles={this.props.styles.baseComponents.textarea}
            />
          </FlexContainer>
        </FormElementDiv>
        <FormElementDiv>
          <FlexContainer>
            <LabelDiv styles={this.props.styles.baseComponents.label}>
              Inhalt
            </LabelDiv>
            <TextArea
              value={this.state.values.content}
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                this.onFormChange(event.target.value, 'content')
              }
              styles={this.props.styles.baseComponents.textarea}
            />
          </FlexContainer>
        </FormElementDiv>
        <FormElementDiv>
          <LabelDiv styles={this.props.styles.baseComponents.label}>
            Medienbildung
          </LabelDiv>
          <SelectorInput
            options={MEDIA_EDUCATION_OPTIONS}
            items={this.state.values.mediaEducation}
            onChange={value => this.onFormChange(value, 'mediaEducation')}
            styles={this.props.styles}
          />
        </FormElementDiv>
        <FormElementDiv>
          <LabelDiv styles={this.props.styles.baseComponents.label}>
            Sprachbildung
          </LabelDiv>
          <SelectorInput
            options={LANGUAGE_EDUCATION_OPTIONS}
            items={this.state.values.languageEducation}
            onChange={value => this.onFormChange(value, 'languageEducation')}
            styles={this.props.styles}
          />
        </FormElementDiv>
        <FormElementDiv>
          <LabelDiv styles={this.props.styles.baseComponents.label}>
            Fächerübergreifende Bildung
          </LabelDiv>
          <SelectorInput
            options={INTERDISCIPLINARY_EDUCATION_OPTIONS}
            items={this.state.values.interdisciplinaryEducation}
            onChange={value =>
              this.onFormChange(value, 'interdisciplinaryEducation')
            }
            styles={this.props.styles}
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
