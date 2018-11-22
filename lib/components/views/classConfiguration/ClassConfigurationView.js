var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { Component } from 'react';
import styled from 'styled-components';
import memoize from 'lodash/memoize';
import RasterUnitContainer from './RasterUnitContainer';
import ComponentProvider from '../../provider/componentProvider';
import { getWeekDifference } from '../calendar/timeHelper';
var ExpansionPanelContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 25px 0px;\n"], ["\n  margin: 25px 0px;\n"])));
var RasterUnitDiv = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  min-width: 0px;\n"], ["\n  min-width: 0px;\n"])));
var FlexContainer = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n"])));
var StyledContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  > * {\n    box-sizing: border-box;\n    line-height: normal;\n    outline: none;\n  }\n"], ["\n  > * {\n    box-sizing: border-box;\n    line-height: normal;\n    outline: none;\n  }\n"])));
var RASTER_SIZE = 15;
function getColorForSubjectId(id) {
    var colorMap = {
        biology: '#58C853',
        chemistry: '#DBC192',
        german: '#DB9292'
    };
    return colorMap[id] || '#92D0DB';
}
var ClassConfigurationView = (function (_super) {
    __extends(ClassConfigurationView, _super);
    function ClassConfigurationView(props) {
        var _this = _super.call(this, props) || this;
        _this.getCurrentTopicInstancesAndTemplates = function () {
            var allTopicTemplates = _this.props.allTopicTemplates;
            var _a = _this.state, selectedSchoolYearId = _a.selectedSchoolYearId, selectedSubjectId = _a.selectedSubjectId, localAllClassTopics = _a.localAllClassTopics;
            var selectedSchoolYearTopics = localAllClassTopics[selectedSchoolYearId];
            var selectedSubjectTopics = selectedSchoolYearTopics.subjects[selectedSubjectId];
            var selectedTemplates = allTopicTemplates[selectedSubjectId] || {};
            return {
                instances: selectedSubjectTopics.classLevels,
                templates: selectedTemplates
            };
        };
        _this.updateLocalClassTopicsForYear = function (classLevelId, newClasses) {
            var _a, _b, _c;
            var _d = _this.state, selectedSchoolYearId = _d.selectedSchoolYearId, selectedSubjectId = _d.selectedSubjectId, localAllClassTopics = _d.localAllClassTopics;
            localAllClassTopics[selectedSchoolYearId];
            _this.setState({
                localAllClassTopics: __assign({}, localAllClassTopics, (_a = {}, _a[selectedSchoolYearId] = __assign({}, localAllClassTopics[selectedSchoolYearId], { subjects: __assign({}, localAllClassTopics[selectedSchoolYearId].subjects, (_b = {}, _b[selectedSubjectId] = __assign({}, localAllClassTopics[selectedSchoolYearId].subjects[selectedSubjectId], { classLevels: __assign({}, localAllClassTopics[selectedSchoolYearId].subjects[selectedSubjectId].classLevels, (_c = {}, _c[classLevelId] = __assign({}, localAllClassTopics[selectedSchoolYearId].subjects[selectedSubjectId].classLevels[classLevelId], { classes: newClasses }), _c)) }), _b)) }), _a))
            });
        };
        _this.getRadioItems = function () {
            var _a = _this.state, selectedSchoolYearId = _a.selectedSchoolYearId, localAllClassTopics = _a.localAllClassTopics;
            var selectedSchoolYearTopics = localAllClassTopics[selectedSchoolYearId];
            return Object.keys(selectedSchoolYearTopics.subjects).map(function (key) { return ({
                id: selectedSchoolYearTopics.subjects[key].subjectId,
                text: selectedSchoolYearTopics.subjects[key].subjectName,
                color: getColorForSubjectId(key)
            }); });
        };
        _this.getSelectOptions = function () {
            var localAllClassTopics = _this.state.localAllClassTopics;
            return Object.keys(localAllClassTopics).map(function (key) { return ({
                id: localAllClassTopics[key].schoolYearId,
                text: localAllClassTopics[key].schoolYearName
            }); });
        };
        _this.getRelevantEventData = memoize(function (eventData, schoolYear) {
            return eventData.filter(function (event) {
                return (event.utcStartDate >= schoolYear.utcStartDate &&
                    event.utcStartDate <= schoolYear.utcEndDate) ||
                    (event.utcEndDate >= schoolYear.utcStartDate &&
                        event.utcEndDate <= schoolYear.utcEndDate);
            });
        }, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return JSON.stringify(args);
        });
        _this.generateRasterUnits = function (instancesAndTemplates) {
            var classLevelArray = Object.values(instancesAndTemplates.instances);
            var templates = instancesAndTemplates.templates;
            var _a = _this.state, selectedSchoolYearId = _a.selectedSchoolYearId, selectedSubjectId = _a.selectedSubjectId;
            var selectedSchoolYear = _this.props.schoolYearData[selectedSchoolYearId];
            if (!selectedSchoolYear)
                return (React.createElement("div", null, "Schuljahresdaten f\u00FCr " + selectedSchoolYearId + " sind nicht verf\u00FCgbar."));
            var rasterCount = getWeekDifference(new Date(selectedSchoolYear.utcStartDate), new Date(selectedSchoolYear.utcEndDate));
            var relevantEventData = _this.getRelevantEventData(_this.props.eventData, selectedSchoolYear);
            return classLevelArray.length > 0 ? (classLevelArray.map(function (classLevel) { return (React.createElement(ExpansionPanelContainer, { key: classLevel.classLevelId },
                React.createElement(ComponentProvider.ExpansionPanel, { key: selectedSchoolYearId + "-" + selectedSubjectId + "-" + classLevel.classLevelName, caption: classLevel.classLevelName },
                    React.createElement(RasterUnitDiv, null,
                        React.createElement(RasterUnitContainer, { rasterCount: rasterCount, rasterSize: RASTER_SIZE, topicTemplates: templates[classLevel.classLevelId] || [], classLevelId: classLevel.classLevelId, classInstances: classLevel.classes, schoolYear: selectedSchoolYear, eventData: relevantEventData, onAddTemplateClick: _this.onAddTemplateClick, onEditTemplate: _this.props.onEditTemplate, onDeleteTemplate: _this.props.onDeleteTemplate, onEditInstance: _this.props.onEditInstance, onUpdate: _this.updateLocalClassTopicsForYear }))))); })) : (React.createElement("div", null, "No classes assigned!"));
        };
        _this.onSelectChange = function (selectedSchoolYearId) {
            var selectedSubjectId = _this.state.selectedSubjectId;
            if (!_this.props.allClassTopics[selectedSchoolYearId].subjects[selectedSubjectId])
                selectedSubjectId = Object.keys(_this.props.allClassTopics[selectedSchoolYearId].subjects)[0];
            _this.setState({
                selectedSchoolYearId: selectedSchoolYearId,
                selectedSubjectId: selectedSubjectId
            });
        };
        _this.onRadioButtonChange = function (id) {
            _this.setState({
                selectedSubjectId: id
            });
        };
        _this.onAddTemplateClick = function (classLevelId) {
            var selectedSubjectId = _this.state.selectedSubjectId;
            _this.props.onAddTemplate(selectedSubjectId, classLevelId);
        };
        _this.onSaveButtonClick = function () {
            _this.props.onSaveClassInstances(_this.state.localAllClassTopics);
        };
        var defaultSelectedSchoolYearId = Object.keys(props.allClassTopics)[0];
        var defaultSelectedSubjectId = Object.keys(props.allClassTopics[defaultSelectedSchoolYearId].subjects)[0];
        _this.state = {
            selectedSchoolYearId: props.initialSchoolYearId || defaultSelectedSchoolYearId,
            selectedSubjectId: defaultSelectedSubjectId,
            localAllClassTopics: props.allClassTopics,
            prevClassTopics: props.allClassTopics
        };
        return _this;
    }
    ClassConfigurationView.getDerivedStateFromProps = function (props, state) {
        if (state.prevClassTopics !== props.allClassTopics) {
            var defaultSelectedSchoolYearId = Object.keys(props.allClassTopics)[0];
            var defaultSelectedSubjectId = Object.keys(props.allClassTopics[defaultSelectedSchoolYearId].subjects)[0];
            return {
                selectedSchoolYearId: props.initialSchoolYearId || defaultSelectedSchoolYearId,
                selectedSubjectId: defaultSelectedSubjectId,
                localAllClassTopics: props.allClassTopics,
                prevClassTopics: props.allClassTopics
            };
        }
        return null;
    };
    ClassConfigurationView.prototype.render = function () {
        var _this = this;
        var instancesAndTemplates = this.getCurrentTopicInstancesAndTemplates();
        var selectOptions = this.getSelectOptions();
        var rasterUnits = this.generateRasterUnits(instancesAndTemplates);
        return (React.createElement(StyledContainer, null,
            React.createElement(FlexContainer, null,
                React.createElement(ComponentProvider.Select, { initialValue: this.state.selectedSchoolYearId, onChange: function (event) {
                        return _this.onSelectChange(event.target.value);
                    }, values: selectOptions, caption: 'Schuljahr:' }),
                React.createElement(ComponentProvider.Button, { caption: "Speichern", color: "primary", disabled: this.props.allClassTopics === this.state.localAllClassTopics, onClick: this.onSaveButtonClick })),
            React.createElement(ComponentProvider.Tabs, { items: this.getRadioItems(), onChange: this.onRadioButtonChange, selected: this.state.selectedSubjectId }),
            rasterUnits));
    };
    return ClassConfigurationView;
}(Component));
export default ClassConfigurationView;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=ClassConfigurationView.js.map