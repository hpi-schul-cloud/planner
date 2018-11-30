import React, { Component } from 'react';
import styled from 'styled-components';
import range from 'lodash/range';
import ComponentProvider from '../../provider/componentProvider';
import StylesProvider, {
  GeneralStylesType
} from '../../provider/generalStylesProvider';
import { EXAMINATION_TYPES } from '../../constants';

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
  vertical-align: top;
  margin-right: 10px;
`;

const StyledContainer = styled.div`
  > * {
    box-sizing: border-box;
    line-height: normal;
    outline: none;
  }
`;

const StyledLink = styled.div<{ styles: GeneralStylesType }>`
  font-family: ${({ styles }) => styles['font-family']};
  color: ${({ styles }) => styles.primaryColor};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

type ItemType = {
  typeValue: string;
  timeValue: string;
  textValue: string;
};
type FileType = {
  file: string;
  name: string;
  type: string;
  id: string;
};

type FormValuesType = {
  subject: string;
  classLevel: string;
  name: string;
  parentTemplate: {
    id: string;
    name: string;
  };
  numberOfWeeks: string;
  unitsPerWeek: string;
  content: string;
  subjectUnits: string[];
  examinations: ItemType[];
  material: FileType[];
};

type FormFieldType = keyof FormValuesType;
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type CurrentFormStateType = Omit<FormValuesType, 'parentTemplate'>;

export interface PropsType {
  onSave: (values: CurrentFormStateType) => void;
  onDelete: () => void;
  onTemplateClick: (id: string) => void;
  onFileClick: (file: FileType) => void;
  onFileAdd: (
    {
      file,
      onComplete,
      onError
    }: {
      file: {
        type: string;
        name: string;
        blob: string;
        tempId: string;
      };
      onComplete: (file: FileType) => void;
      onError: (fileId: string) => void;
    }
  ) => void;
  onFileRemove: (file: FileType) => void;
  initialValues: Partial<FormValuesType>;
  utcStartDate?: number;
}

interface StateType {
  currentValues: CurrentFormStateType;
}

export default class TopicInstanceView extends Component<PropsType, StateType> {
  state = {
    currentValues: {
      subject: '',
      classLevel: '',
      name: '',
      numberOfWeeks: '4',
      unitsPerWeek: '2',
      content: '',
      subjectUnits: [] as string[],
      examinations: [] as ItemType[],
      material: [] as FileType[]
    }
  };

  constructor(props: PropsType) {
    super(props);
    if (this.props.initialValues) {
      // Parent Template cannot change -> It does not need to be part of the state
      const { parentTemplate, ...otherProps } = props.initialValues;
      this.state = {
        currentValues: {
          ...this.state.currentValues,
          ...otherProps
        }
      };
    }
  }

  onDeleteButtonClick = () => {
    this.props.onDelete();
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

  getTextFieldTableCaptions = (numberOfWeeks: string, unitsPerWeek: string) => {
    const captions: string[] = [];
    range(+numberOfWeeks).forEach(weekNumber => {
      range(+unitsPerWeek).forEach(unitNumber => {
        captions.push(`${weekNumber + 1}.Woche ${unitNumber + 1}.Einheit`);
      });
    });

    return captions;
  };

  getTimeOptions = (numberOfWeeks: string, unitsPerWeek: string) => {
    const captions: { text: string; value: string }[] = [];
    range(+numberOfWeeks).forEach(weekNumber => {
      range(+unitsPerWeek).forEach(unitNumber => {
        captions.push({
          text: `${weekNumber + 1}.Woche ${unitNumber + 1}.Einheit`,
          value: `${weekNumber}-${unitNumber}`
        });
      });
    });

    return captions;
  };

  render() {
    const captions = this.getTextFieldTableCaptions(
      this.state.currentValues.numberOfWeeks,
      this.state.currentValues.unitsPerWeek
    );
    const timeOptions = this.getTimeOptions(
      this.state.currentValues.numberOfWeeks,
      this.state.currentValues.unitsPerWeek
    );
    const rows = captions.map((caption, index) => ({
      caption,
      value: this.state.currentValues.subjectUnits[index] || ''
    }));
    const { parentTemplate } = this.props.initialValues;

    return (
      <StyledContainer>
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
            {parentTemplate && (
              <InlineTextFieldDiv>
                <ComponentProvider.Text
                  label="Elter-Template"
                  text={
                    <StyledLink
                      styles={StylesProvider.styles}
                      onClick={() =>
                        this.props.onTemplateClick(parentTemplate.id)
                      }
                    >
                      {parentTemplate.name}
                    </StyledLink>
                  }
                />
              </InlineTextFieldDiv>
            )}
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
            typeOptions={EXAMINATION_TYPES}
            timeOptions={timeOptions}
            values={this.state.currentValues.examinations}
            onChange={value => this.onFormChange(value, 'examinations')}
          />
        </FormElementDiv>
        <FormElementDiv>
          <ComponentProvider.Label caption="Materialien" type="small" />
          <ComponentProvider.FileSelector
            files={this.state.currentValues.material}
            onFileClick={this.props.onFileClick}
            onFileAdd={this.props.onFileAdd}
            onFileRemove={this.props.onFileRemove}
            onFormChange={() => {}}
          />
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
      </StyledContainer>
    );
  }
  static defaultProps = {
    onTemplateClick: () => {}
  };
}
