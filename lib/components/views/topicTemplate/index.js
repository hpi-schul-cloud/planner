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
import range from 'lodash/range';
import ComponentProvider from '../../provider/componentProvider';
import CompetenceChips from './CompetenceChips';
var FlexContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n"], ["\n  display: flex;\n  flex-direction: column;\n"])));
var FormElementDiv = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-bottom: 10px;\n"], ["\n  margin-bottom: 10px;\n"])));
var InlineTextFieldDiv = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-flex;\n  flex-direction: column;\n  margin-right: 10px;\n"], ["\n  display: inline-flex;\n  flex-direction: column;\n  margin-right: 10px;\n"])));
var StyledContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  > * {\n    box-sizing: border-box;\n    line-height: normal;\n    outline: none;\n  }\n"], ["\n  > * {\n    box-sizing: border-box;\n    line-height: normal;\n    outline: none;\n  }\n"])));
var TopicTemplateView = (function (_super) {
    __extends(TopicTemplateView, _super);
    function TopicTemplateView(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            currentValues: {
                subjectId: '',
                classLevelId: '',
                name: '',
                numberOfWeeks: '4',
                unitsPerPeek: '2',
                content: '',
                subjectUnits: [],
                examinations: [],
                competences: []
            }
        };
        _this.onCreateButtonClick = function () {
            if (_this.props.mode === 'NEW')
                _this.props.onCreate(_this.state.currentValues);
        };
        _this.onSaveButtonClick = function () {
            if (_this.props.mode === 'EDIT')
                _this.props.onSave(_this.state.currentValues);
        };
        _this.onDeleteButtonClick = function () {
            if (_this.props.mode === 'EDIT')
                _this.props.onDelete();
        };
        _this.onFormChange = function (value, key) {
            var _a;
            _this.setState(__assign({}, _this.state, { currentValues: __assign({}, _this.state.currentValues, (_a = {}, _a[key] = value, _a)) }));
        };
        _this.getTextFieldTableCaptions = function (numberOfWeeks, unitsPerPeek) {
            var captions = [];
            range(+numberOfWeeks).forEach(function (weekNumber) {
                range(+unitsPerPeek).forEach(function (unitNumber) {
                    captions.push(weekNumber + 1 + ".Woche " + (unitNumber + 1) + ".Einheit");
                });
            });
            return captions;
        };
        if (_this.props.initialValues)
            _this.setState({
                currentValues: _this.props.initialValues
            });
        return _this;
    }
    TopicTemplateView.prototype.render = function () {
        var _this = this;
        var _a = this.props.valueOptions, subjectOptions = _a.subject, classLevelOptions = _a.classLevel;
        var captions = this.getTextFieldTableCaptions(this.state.currentValues.numberOfWeeks, this.state.currentValues.unitsPerPeek);
        var rows = captions.map(function (caption, index) { return ({
            caption: caption,
            value: _this.state.currentValues.subjectUnits[index] || ''
        }); });
        return (React.createElement(StyledContainer, null,
            React.createElement(FormElementDiv, null,
                React.createElement(InlineTextFieldDiv, null,
                    React.createElement(ComponentProvider.Select, { initialValue: this.state.currentValues.subjectId, values: subjectOptions, caption: "Fach", onChange: function (event) {
                            _this.onFormChange(event.target.value, 'subjectId');
                        } })),
                React.createElement(InlineTextFieldDiv, null,
                    React.createElement(ComponentProvider.Select, { initialValue: this.state.currentValues.classLevelId, values: classLevelOptions, caption: "Jahrgang", onChange: function (event) {
                            return _this.onFormChange(event.target.value, 'classLevelId');
                        } })),
                React.createElement(FormElementDiv, null,
                    React.createElement(InlineTextFieldDiv, null,
                        React.createElement(ComponentProvider.TextField, { label: "Name", value: this.state.currentValues.name, onChange: function (event) {
                                return _this.onFormChange(event.target.value, 'name');
                            } }))),
                React.createElement(FormElementDiv, null,
                    React.createElement(InlineTextFieldDiv, null,
                        React.createElement(ComponentProvider.TextField, { label: "Anzahl der Wochen", value: this.state.currentValues.numberOfWeeks, onChange: function (event) {
                                return _this.onFormChange(event.target.value, 'numberOfWeeks');
                            } })),
                    React.createElement(InlineTextFieldDiv, null,
                        React.createElement(ComponentProvider.TextField, { label: "Einheiten pro Woche", value: this.state.currentValues.unitsPerPeek, onChange: function (event) {
                                return _this.onFormChange(event.target.value, 'unitsPerPeek');
                            } })))),
            React.createElement(FormElementDiv, null,
                React.createElement(FlexContainer, null,
                    React.createElement(ComponentProvider.TextArea, { label: "Inhalt", value: this.state.currentValues.content, onChange: function (event) {
                            return _this.onFormChange(event.target.value, 'content');
                        } }))),
            React.createElement(FormElementDiv, null,
                React.createElement(FlexContainer, null,
                    React.createElement(ComponentProvider.Label, { caption: "Unterrichtseinheiten", type: "small" }),
                    React.createElement(ComponentProvider.TextFieldTable, { rows: rows, onChange: function (rows) {
                            return _this.onFormChange(rows.map(function (row) { return row.value; }), 'subjectUnits');
                        } }))),
            React.createElement(FormElementDiv, null,
                React.createElement(ComponentProvider.Label, { caption: "Leistungserfassung", type: "small" }),
                React.createElement(ComponentProvider.SelectorInput, { typeOptions: [
                        { text: 'Mündlich', value: 'spoken' },
                        { text: 'Schriftlich', value: 'written' },
                        { text: 'Anders', value: 'other' }
                    ], timeOptions: [{ text: '1.Woche', value: '1W' }], values: this.state.currentValues.examinations, onChange: function (value) { return _this.onFormChange(value, 'examinations'); } })),
            React.createElement(FormElementDiv, null,
                React.createElement(FlexContainer, null,
                    React.createElement(CompetenceChips, { caption: "Kompetenzen vom Lehrplan", competences: this.state.currentValues.competences, onChange: function (value) { return _this.onFormChange(value, 'competences'); } }))),
            this.props.mode === 'NEW' ? (React.createElement(ComponentProvider.Button, { onClick: this.onCreateButtonClick, caption: "Erstellen", color: "primary" })) : (React.createElement(React.Fragment, null,
                React.createElement(ComponentProvider.Button, { onClick: this.onDeleteButtonClick, caption: "L\u00F6schen", color: "default", type: "thin" }),
                React.createElement(ComponentProvider.Button, { onClick: this.onSaveButtonClick, caption: "Speichern", color: "primary" })))));
    };
    TopicTemplateView.defaultProps = {
        onCreate: function () { },
        onSave: function () { },
        onDelete: function () { },
        mode: 'NEW'
    };
    return TopicTemplateView;
}(Component));
export default TopicTemplateView;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=index.js.map