import React, { Component } from 'react';
import styled from 'styled-components';
import memoize from 'lodash/memoize';
import RasterUnitContainer from './RasterUnitContainer';
import {
  AllClassInstancesType,
  AllTopicTemplatesType,
  ClassInstanceType,
  TemplatesOfClassLevelType,
  LocalTopicIndexType
} from './types';
import { EventType, SchoolYearType, TopicIndexType } from '../../types';
import ComponentProvider from '../../provider/componentProvider';
import { getWeekDifference } from '../calendar/timeHelper';

interface PropsType {
  allClassTopics: AllClassInstancesType<TopicIndexType>;
  allTopicTemplates: AllTopicTemplatesType;
  initialSchoolYearId?: string;
  schoolYearData: {
    [schoolYearId: string]: SchoolYearType;
  };
  eventData: EventType;
  onAddTemplate: (selectedSubjectId: string, classLevelId: string) => void;
  onEditTemplate: (templateId: string) => void;
  onDeleteTemplate: (templateId: string) => void;
  onEditInstance: (instanceId: string) => void;
  onSaveClassInstances: (
    instances: AllClassInstancesType<LocalTopicIndexType>
  ) => void;
}

interface StateType {
  selectedSchoolYearId: string;
  selectedSubjectId: string;
  localAllClassTopics: AllClassInstancesType<LocalTopicIndexType>;
  prevClassTopics: AllClassInstancesType<TopicIndexType>;
}

const ExpansionPanelContainer = styled.div`
  margin: 25px 0px;
`;

const RasterUnitDiv = styled.div`
  min-width: 0px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
const StyledContainer = styled.div`
  > * {
    box-sizing: border-box;
    line-height: normal;
    outline: none;
  }
`;

const RASTER_SIZE = 15;

function getColorForSubjectId(id: string) {
  const colorMap = {
    biology: '#58C853',
    chemistry: '#DBC192',
    german: '#DB9292'
  };
  return colorMap[id] || '#92D0DB';
}

class ClassConfigurationView extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    const defaultSelectedSchoolYearId =
      props.initialSchoolYearId || Object.keys(props.allClassTopics)[0];
    const defaultSelectedSubjectId = Object.keys(
      props.allClassTopics[defaultSelectedSchoolYearId].subjects
    )[0];

    this.state = {
      // If no initial school year id is provided, we take the first available one
      selectedSchoolYearId: defaultSelectedSchoolYearId,
      selectedSubjectId: defaultSelectedSubjectId,
      localAllClassTopics: props.allClassTopics,
      prevClassTopics: props.allClassTopics
    };
  }

  static getDerivedStateFromProps(props: PropsType, state: StateType) {
    // We have to reset the state when allClassTopics change
    // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#alternative-1-reset-uncontrolled-component-with-an-id-prop
    if (state.prevClassTopics !== props.allClassTopics) {
      const defaultSelectedSchoolYearId = Object.keys(props.allClassTopics)[0];
      const defaultSelectedSubjectId = Object.keys(
        props.allClassTopics[defaultSelectedSchoolYearId].subjects
      )[0];

      return {
        // If no initial school year id is provided, we take the first available one
        selectedSchoolYearId:
          props.initialSchoolYearId || defaultSelectedSchoolYearId,
        selectedSubjectId: defaultSelectedSubjectId,
        localAllClassTopics: props.allClassTopics,
        prevClassTopics: props.allClassTopics
      };
    }
    return null;
  }

  getCurrentTopicInstancesAndTemplates = () => {
    const { allTopicTemplates } = this.props;
    const {
      selectedSchoolYearId,
      selectedSubjectId,
      localAllClassTopics
    } = this.state;
    const selectedSchoolYearTopics = localAllClassTopics[selectedSchoolYearId];
    const selectedSubjectTopics =
      selectedSchoolYearTopics.subjects[selectedSubjectId];
    const selectedTemplates = allTopicTemplates[selectedSubjectId] || {};

    return {
      instances: selectedSubjectTopics.classLevels,
      templates: selectedTemplates
    };
  };

  updateLocalClassTopicsForYear = (
    classLevelId: string,
    newClasses: ClassInstanceType<LocalTopicIndexType>
  ) => {
    const {
      selectedSchoolYearId,
      selectedSubjectId,
      localAllClassTopics
    } = this.state;
    localAllClassTopics[selectedSchoolYearId];
    this.setState({
      localAllClassTopics: {
        ...localAllClassTopics,
        [selectedSchoolYearId]: {
          ...localAllClassTopics[selectedSchoolYearId],
          subjects: {
            ...localAllClassTopics[selectedSchoolYearId].subjects,
            [selectedSubjectId]: {
              ...localAllClassTopics[selectedSchoolYearId].subjects[
                selectedSubjectId
              ],
              classLevels: {
                ...localAllClassTopics[selectedSchoolYearId].subjects[
                  selectedSubjectId
                ].classLevels,
                [classLevelId]: {
                  ...localAllClassTopics[selectedSchoolYearId].subjects[
                    selectedSubjectId
                  ].classLevels[classLevelId],
                  classes: newClasses
                }
              }
            }
          }
        }
      }
    });
  };

  getRadioItems = () => {
    const { selectedSchoolYearId, localAllClassTopics } = this.state;
    const selectedSchoolYearTopics = localAllClassTopics[selectedSchoolYearId];
    return Object.keys(selectedSchoolYearTopics.subjects).map(key => ({
      id: selectedSchoolYearTopics.subjects[key].subjectId,
      text: selectedSchoolYearTopics.subjects[key].subjectName,
      color: getColorForSubjectId(key)
    }));
  };

  getSelectOptions = () => {
    const { localAllClassTopics } = this.state;
    return Object.keys(localAllClassTopics).map(key => ({
      id: localAllClassTopics[key].schoolYearId,
      text: localAllClassTopics[key].schoolYearName
    }));
  };
  getRelevantEventData = memoize(
    (eventData: EventType, schoolYear: SchoolYearType) =>
      eventData.filter(
        event =>
          (event.utcStartDate >= schoolYear.utcStartDate &&
            event.utcStartDate <= schoolYear.utcEndDate) ||
          (event.utcEndDate >= schoolYear.utcStartDate &&
            event.utcEndDate <= schoolYear.utcEndDate)
      ),
    (...args) => JSON.stringify(args)
  );

  generateRasterUnits = (instancesAndTemplates: {
    instances: {
      [classLevelId: string]: {
        classLevelId: string;
        classLevelName: string;
        classes: ClassInstanceType<LocalTopicIndexType>;
      };
    };
    templates: TemplatesOfClassLevelType;
  }) => {
    const classLevelArray = Object.values(instancesAndTemplates.instances);
    const { templates } = instancesAndTemplates;
    const { selectedSchoolYearId, selectedSubjectId } = this.state;
    const selectedSchoolYear = this.props.schoolYearData[selectedSchoolYearId];
    // Determine number of weeks of school year
    if (!selectedSchoolYear)
      return (
        <div
        >{`Schuljahresdaten für ${selectedSchoolYearId} sind nicht verfügbar.`}</div>
      );
    const rasterCount = getWeekDifference(
      new Date(selectedSchoolYear.utcStartDate),
      new Date(selectedSchoolYear.utcEndDate)
    );
    // Filter all events that are not in the school year
    const relevantEventData = this.getRelevantEventData(
      this.props.eventData,
      selectedSchoolYear
    );

    return classLevelArray.length > 0 ? (
      classLevelArray.map(classLevel => (
        <ExpansionPanelContainer key={classLevel.classLevelId}>
          <ComponentProvider.ExpansionPanel
            key={`${selectedSchoolYearId}-${selectedSubjectId}-${
              classLevel.classLevelName
            }`}
            caption={classLevel.classLevelName}
          >
            <RasterUnitDiv>
              <RasterUnitContainer
                rasterCount={rasterCount}
                rasterSize={RASTER_SIZE}
                topicTemplates={templates[classLevel.classLevelId] || []}
                classLevelId={classLevel.classLevelId}
                classInstances={classLevel.classes}
                schoolYear={selectedSchoolYear}
                eventData={relevantEventData}
                onAddTemplateClick={this.onAddTemplateClick}
                onEditTemplate={this.props.onEditTemplate}
                onDeleteTemplate={this.props.onDeleteTemplate}
                onEditInstance={this.props.onEditInstance}
                onUpdate={this.updateLocalClassTopicsForYear}
                onSaveConfiguration={this.onSaveButtonClick}
              />
            </RasterUnitDiv>
          </ComponentProvider.ExpansionPanel>
        </ExpansionPanelContainer>
      ))
    ) : (
      <div>No classes assigned!</div>
    );
  };

  onSelectChange = (selectedSchoolYearId: string) => {
    let { selectedSubjectId } = this.state;
    if (
      !this.props.allClassTopics[selectedSchoolYearId].subjects[
        selectedSubjectId
      ]
    )
      selectedSubjectId = Object.keys(
        this.props.allClassTopics[selectedSchoolYearId].subjects
      )[0];
    this.setState({
      selectedSchoolYearId,
      selectedSubjectId
    });
  };

  onRadioButtonChange = (id: string) => {
    this.setState({
      selectedSubjectId: id
    });
  };

  onAddTemplateClick = (classLevelId: string) => {
    const { selectedSubjectId } = this.state;
    this.props.onAddTemplate(selectedSubjectId, classLevelId);
  };

  onSaveButtonClick = () => {
    this.props.onSaveClassInstances(this.state.localAllClassTopics);
  };

  render() {
    const instancesAndTemplates = this.getCurrentTopicInstancesAndTemplates();
    const selectOptions = this.getSelectOptions();
    const rasterUnits = this.generateRasterUnits(instancesAndTemplates);

    return (
      <StyledContainer>
        <FlexContainer>
          <ComponentProvider.Select
            initialValue={this.state.selectedSchoolYearId}
            onChange={(event: React.FormEvent<HTMLSelectElement>) =>
              this.onSelectChange((event.target as HTMLInputElement).value)
            }
            values={selectOptions}
            caption={'Schuljahr:'}
          />
          <ComponentProvider.Button
            caption="Speichern"
            color="primary"
            disabled={
              this.props.allClassTopics === this.state.localAllClassTopics
            }
            onClick={this.onSaveButtonClick}
          />
        </FlexContainer>
        <ComponentProvider.Tabs
          items={this.getRadioItems()}
          onChange={this.onRadioButtonChange}
          selected={this.state.selectedSubjectId}
        />
        {rasterUnits}
      </StyledContainer>
    );
  }
}

export default ClassConfigurationView;
