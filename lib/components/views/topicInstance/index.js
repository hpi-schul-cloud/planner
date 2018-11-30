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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React, { Component } from 'react';
import styled from 'styled-components';
import range from 'lodash/range';
import ComponentProvider from '../../provider/componentProvider';
import StylesProvider from '../../provider/generalStylesProvider';
import { EXAMINATION_TYPES } from '../../constants';
var FlexContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n"], ["\n  display: flex;\n  flex-direction: column;\n"])));
var FormElementDiv = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-bottom: 10px;\n"], ["\n  margin-bottom: 10px;\n"])));
var InlineTextFieldDiv = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-flex;\n  flex-direction: column;\n  vertical-align: top;\n  margin-right: 10px;\n"], ["\n  display: inline-flex;\n  flex-direction: column;\n  vertical-align: top;\n  margin-right: 10px;\n"])));
var StyledContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  > * {\n    box-sizing: border-box;\n    line-height: normal;\n    outline: none;\n  }\n"], ["\n  > * {\n    box-sizing: border-box;\n    line-height: normal;\n    outline: none;\n  }\n"])));
var StyledLink = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-family: ", ";\n  color: ", ";\n  cursor: pointer;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  font-family: ", ";\n  color: ", ";\n  cursor: pointer;\n  &:hover {\n    text-decoration: underline;\n  }\n"])), function (_a) {
    var styles = _a.styles;
    return styles['font-family'];
}, function (_a) {
    var styles = _a.styles;
    return styles.primaryColor;
});
var TopicInstanceView = (function (_super) {
    __extends(TopicInstanceView, _super);
    function TopicInstanceView(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            currentValues: {
                subject: '',
                classLevel: '',
                name: '',
                numberOfWeeks: '4',
                unitsPerWeek: '2',
                content: '',
                subjectUnits: [],
                examinations: [],
                material: []
            }
        };
        _this.onDeleteButtonClick = function () {
            _this.props.onDelete();
        };
        _this.onSaveButtonClick = function () {
            _this.props.onSave(_this.state.currentValues);
        };
        _this.onFormChange = function (value, key) {
            var _a;
            _this.setState(__assign({}, _this.state, { currentValues: __assign({}, _this.state.currentValues, (_a = {}, _a[key] = value, _a)) }));
        };
        _this.getTextFieldTableCaptions = function (numberOfWeeks, unitsPerWeek) {
            var captions = [];
            range(+numberOfWeeks).forEach(function (weekNumber) {
                range(+unitsPerWeek).forEach(function (unitNumber) {
                    captions.push(weekNumber + 1 + ".Woche " + (unitNumber + 1) + ".Einheit");
                });
            });
            return captions;
        };
        _this.getTimeOptions = function (numberOfWeeks, unitsPerWeek) {
            var captions = [];
            range(+numberOfWeeks).forEach(function (weekNumber) {
                range(+unitsPerWeek).forEach(function (unitNumber) {
                    captions.push({
                        text: weekNumber + 1 + ".Woche " + (unitNumber + 1) + ".Einheit",
                        value: weekNumber + "-" + unitNumber
                    });
                });
            });
            return captions;
        };
        if (_this.props.initialValues) {
            var _a = props.initialValues, parentTemplate = _a.parentTemplate, otherProps = __rest(_a, ["parentTemplate"]);
            _this.state = {
                currentValues: __assign({}, _this.state.currentValues, otherProps)
            };
        }
        return _this;
    }
    TopicInstanceView.prototype.render = function () {
        var _this = this;
        var captions = this.getTextFieldTableCaptions(this.state.currentValues.numberOfWeeks, this.state.currentValues.unitsPerWeek);
        var timeOptions = this.getTimeOptions(this.state.currentValues.numberOfWeeks, this.state.currentValues.unitsPerWeek);
        var rows = captions.map(function (caption, index) { return ({
            caption: caption,
            value: _this.state.currentValues.subjectUnits[index] || ''
        }); });
        var parentTemplate = this.props.initialValues.parentTemplate;
        return (React.createElement(StyledContainer, null,
            React.createElement(FormElementDiv, null,
                React.createElement(InlineTextFieldDiv, null,
                    React.createElement(ComponentProvider.Text, { label: "Fach", text: this.state.currentValues.subject })),
                React.createElement(InlineTextFieldDiv, null,
                    React.createElement(ComponentProvider.Text, { label: "Jahrgang", text: this.state.currentValues.classLevel })),
                React.createElement(FormElementDiv, null,
                    React.createElement(InlineTextFieldDiv, null,
                        React.createElement(ComponentProvider.TextField, { label: "Name", value: this.state.currentValues.name, onChange: function (event) {
                                return _this.onFormChange(event.target.value, 'name');
                            } })),
                    parentTemplate && (React.createElement(InlineTextFieldDiv, null,
                        React.createElement(ComponentProvider.Text, { label: "Elter-Template", text: React.createElement(StyledLink, { styles: StylesProvider.styles, onClick: function () {
                                    return _this.props.onTemplateClick(parentTemplate.id);
                                } }, parentTemplate.name) })))),
                React.createElement(FormElementDiv, null,
                    React.createElement(InlineTextFieldDiv, null,
                        React.createElement(ComponentProvider.TextField, { label: "Anzahl der Wochen", value: this.state.currentValues.numberOfWeeks, onChange: function (event) {
                                return _this.onFormChange(event.target.value, 'numberOfWeeks');
                            } })),
                    React.createElement(InlineTextFieldDiv, null,
                        React.createElement(ComponentProvider.TextField, { label: "Einheiten pro Woche", value: this.state.currentValues.unitsPerWeek, onChange: function (event) {
                                return _this.onFormChange(event.target.value, 'unitsPerWeek');
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
                React.createElement(ComponentProvider.SelectorInput, { typeOptions: EXAMINATION_TYPES, timeOptions: timeOptions, values: this.state.currentValues.examinations, onChange: function (value) { return _this.onFormChange(value, 'examinations'); } })),
            React.createElement(FormElementDiv, null,
                React.createElement(ComponentProvider.Label, { caption: "Materialien", type: "small" }),
                React.createElement(ComponentProvider.FileSelector, { files: this.state.currentValues.material, onFileClick: this.props.onFileClick, onFileAdd: this.props.onFileAdd, onFileRemove: this.props.onFileRemove, onFormChange: function (value) { return _this.onFormChange(value, 'material'); } })),
            React.createElement(ComponentProvider.Button, { onClick: this.onDeleteButtonClick, caption: "L\u00F6schen", color: "default", type: "thin" }),
            React.createElement(ComponentProvider.Button, { onClick: this.onSaveButtonClick, caption: "Speichern", color: "primary" })));
    };
    TopicInstanceView.defaultProps = {
        onTemplateClick: function () { }
    };
    return TopicInstanceView;
}(Component));
export default TopicInstanceView;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=index.js.map