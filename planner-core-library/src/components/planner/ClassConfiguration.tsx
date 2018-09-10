import React, { Component } from 'react';
import styled from 'styled-components';
import RasterUnitContainer from './RasterUnitContainer';
import {
  AllClassInstancesType,
  AllTopicTemplatesType,
  ClassInstanceType,
  TemplatesOfClassLevelType
} from './types';
import { ExpansionPanel, Select } from '../provider/componentProvider';
import RadioButtons from '../base/RadioButtons';

interface PropsType {
  allClassTopics: AllClassInstancesType;
  allTopicTemplates: AllTopicTemplatesType;
  initialSchoolYearId?: string;
}

interface StateType {
  selectedSchoolYearId: string;
  selectedSubjectId: string;
}

const StyledHeading = styled.h2`
  font-family: sans-serif;
  font-size: 36px;
  color: #5e5e5e;
  font-weight: normal;
  margin: 20px 0;
`;

const StyledSelectorLabel = styled.div`
  font-family: sans-serif;
  font-size: 14px;
  color: #4a4a4a;
`;

const StyledExpansionPanel = styled(ExpansionPanel)`
  margin: 25px 0px;
`;

const RASTER_SIZE = 15;
const RASTER_COUNT = 48;

function getColorForSubjectId(id: string) {
  const colorMap = {
    biology: '#58C853',
    chemistry: '#DBC192',
    german: '#DB9292'
  };
  return colorMap[id] || '#92D0DB';
}

class ClassConfiguration extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    const defaultSelectedSchoolYearId = Object.keys(props.allClassTopics)[0];
    const defaultSelectedSubjectId = Object.keys(
      props.allClassTopics[defaultSelectedSchoolYearId].subjects
    )[0];

    this.state = {
      selectedSchoolYearId:
        props.initialSchoolYearId || defaultSelectedSchoolYearId,
      selectedSubjectId: defaultSelectedSubjectId
    };
  }

  getCurrentTopicInstancesAndTemplates = () => {
    const { allClassTopics, allTopicTemplates } = this.props;
    const { selectedSchoolYearId, selectedSubjectId } = this.state;
    const selectedSchoolYearTopics = allClassTopics[selectedSchoolYearId];
    const selectedSubjectTopics =
      selectedSchoolYearTopics.subjects[selectedSubjectId];
    const selectedTemplates = allTopicTemplates[selectedSubjectId];

    return {
      instances: selectedSubjectTopics.classLevels,
      templates: selectedTemplates
    };
  };

  getRadioItems = () => {
    const { allClassTopics } = this.props;
    const { selectedSchoolYearId } = this.state;
    const selectedSchoolYearTopics = allClassTopics[selectedSchoolYearId];
    return Object.keys(selectedSchoolYearTopics.subjects).map(key => ({
      id: selectedSchoolYearTopics.subjects[key].subjectId,
      text: selectedSchoolYearTopics.subjects[key].subjectName,
      color: getColorForSubjectId(key)
    }));
  };

  getSelectOptions = () => {
    const { allClassTopics } = this.props;
    return Object.keys(allClassTopics).map(key => ({
      value: allClassTopics[key].schoolYearId,
      text: allClassTopics[key].schoolYearName
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

    return classLevelArray.length > 0 ? (
      classLevelArray.map(classLevel => (
        <StyledExpansionPanel
          key={`${selectedSchoolYearId}-${selectedSubjectId}-${
            classLevel.classLevelName
          }`}
          caption={classLevel.classLevelName}
        >
          <RasterUnitContainer
            rasterCount={RASTER_COUNT}
            rasterSize={RASTER_SIZE}
            topicTemplates={templates[classLevel.classLevelId]}
            classInstances={classLevel.classes}
          />
        </StyledExpansionPanel>
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

  render() {
    const instancesAndTemplates = this.getCurrentTopicInstancesAndTemplates();
    const selectOptions = this.getSelectOptions();
    const rasterUnits = this.generateRasterUnits(instancesAndTemplates);
    return (
      <div>
        <StyledHeading>Meine Klassen</StyledHeading>
        <StyledSelectorLabel>
          Schuljahr:{' '}
          <Select
            initialValue={this.state.selectedSchoolYearId}
            onChange={event => this.onSelectChange(event.currentTarget.value)}
            values={selectOptions}
          />
        </StyledSelectorLabel>
        <div>
          <RadioButtons
            items={this.getRadioItems()}
            onChange={this.onRadioButtonChange}
            selected={this.state.selectedSubjectId}
          />
        </div>
        {rasterUnits}
      </div>
    );
  }
}

export default ClassConfiguration;
