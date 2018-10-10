import React, { Component } from 'react';
import styled from 'styled-components';
import RasterUnitContainer from './RasterUnitContainer';
import {
  AllClassInstancesType,
  AllTopicTemplatesType,
  ClassInstanceType,
  TemplatesOfClassLevelType
} from './types';
import { EventType, SchoolYearType } from '../types';
import ComponentProvider from '../provider/componentProvider';
import { getWeekDifference } from '../calendarView/timeHelper';

interface PropsType {
  allClassTopics: AllClassInstancesType;
  allTopicTemplates: AllTopicTemplatesType;
  initialSchoolYearId?: string;
  schoolYear: SchoolYearType;
  eventData: EventType;
  onAddTemplate: (selectedSubjectId: string, classLevelId: string) => void;
  onSaveClassInstances: (instances: AllClassInstancesType) => void;
}

interface StateType {
  selectedSchoolYearId: string;
  selectedSubjectId: string;
  localAllClassTopics: AllClassInstancesType;
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
    const defaultSelectedSchoolYearId = Object.keys(props.allClassTopics)[0];
    const defaultSelectedSubjectId = Object.keys(
      props.allClassTopics[defaultSelectedSchoolYearId].subjects
    )[0];

    this.state = {
      selectedSchoolYearId:
        props.initialSchoolYearId || defaultSelectedSchoolYearId,
      selectedSubjectId: defaultSelectedSubjectId,
      localAllClassTopics: props.allClassTopics
    };
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
    const selectedTemplates = allTopicTemplates[selectedSubjectId];

    return {
      instances: selectedSubjectTopics.classLevels,
      templates: selectedTemplates
    };
  };

  updateLocalClassTopicsForYear = (
    classLevelId: string,
    newClasses: ClassInstanceType
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
      value: localAllClassTopics[key].schoolYearId,
      text: localAllClassTopics[key].schoolYearName
    }));
  };

  generateRasterUnits = (instancesAndTemplates: {
    instances: {
      [classLevelId: string]: {
        classLevelId: string;
        classLevelName: string;
        classes: ClassInstanceType;
      };
    };
    templates: TemplatesOfClassLevelType;
  }) => {
    const classLevelArray = Object.values(instancesAndTemplates.instances);
    const { templates } = instancesAndTemplates;
    const { selectedSchoolYearId, selectedSubjectId } = this.state;
    const rasterCount = getWeekDifference(
      new Date(this.props.schoolYear.utcStartDate),
      new Date(this.props.schoolYear.utcEndDate)
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
                topicTemplates={templates[classLevel.classLevelId]}
                classLevelId={classLevel.classLevelId}
                classInstances={classLevel.classes}
                schoolYear={this.props.schoolYear}
                eventData={this.props.eventData}
                onAddTemplateClick={(classLevelId: string) =>
                  this.props.onAddTemplate(selectedSubjectId, classLevelId)
                }
                onUpdate={this.updateLocalClassTopicsForYear}
              />
            </RasterUnitDiv>
          </ComponentProvider.ExpansionPanel>
        </ExpansionPanelContainer>
      ))
    ) : (
      <div>No classes assigned!</div>
    );
  };

  onSelectChange = (id: string) => {
    this.setState({
      selectedSchoolYearId: id
    });
  };

  onRadioButtonChange = (id: string) => {
    this.setState({
      selectedSubjectId: id
    });
  };

  onSaveButtonClick = () => {
    this.props.onSaveClassInstances(this.state.localAllClassTopics);
  };

  render() {
    const instancesAndTemplates = this.getCurrentTopicInstancesAndTemplates();
    const selectOptions = this.getSelectOptions();
    const rasterUnits = this.generateRasterUnits(instancesAndTemplates);

    return (
      <div>
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
      </div>
    );
  }
}

export default ClassConfigurationView;
