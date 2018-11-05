"use strict";
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var range_1 = __importDefault(require("lodash/range"));
var componentProvider_1 = __importDefault(require("../../provider/componentProvider"));
var CompetenceChips_1 = __importDefault(require("../topicTemplate/CompetenceChips"));
var generalStylesProvider_1 = __importDefault(require("../../provider/generalStylesProvider"));
var FlexContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n"], ["\n  display: flex;\n  flex-direction: column;\n"])));
var FormElementDiv = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-bottom: 10px;\n"], ["\n  margin-bottom: 10px;\n"])));
var InlineTextFieldDiv = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-flex;\n  flex-direction: column;\n  vertical-align: top;\n  margin-right: 10px;\n"], ["\n  display: inline-flex;\n  flex-direction: column;\n  vertical-align: top;\n  margin-right: 10px;\n"])));
var StyledContainer = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  > * {\n    box-sizing: border-box;\n    line-height: normal;\n    outline: none;\n  }\n"], ["\n  > * {\n    box-sizing: border-box;\n    line-height: normal;\n    outline: none;\n  }\n"])));
var StyledLink = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-family: ", ";\n  color: ", ";\n  cursor: pointer;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  font-family: ", ";\n  color: ", ";\n  cursor: pointer;\n  &:hover {\n    text-decoration: underline;\n  }\n"])), function (_a) {
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
                unitsPerPeek: '2',
                content: '',
                subjectUnits: [],
                examinations: [],
                competences: []
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
        _this.getTextFieldTableCaptions = function (numberOfWeeks, unitsPerPeek) {
            var captions = [];
            range_1.default(+numberOfWeeks).forEach(function (weekNumber) {
                range_1.default(+unitsPerPeek).forEach(function (unitNumber) {
                    captions.push(weekNumber + 1 + ".Woche " + (unitNumber + 1) + ".Einheit");
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
        var captions = this.getTextFieldTableCaptions(this.state.currentValues.numberOfWeeks, this.state.currentValues.unitsPerPeek);
        var rows = captions.map(function (caption, index) { return ({
            caption: caption,
            value: _this.state.currentValues.subjectUnits[index] || ''
        }); });
        var parentTemplate = this.props.initialValues.parentTemplate;
        return (react_1.default.createElement(StyledContainer, null,
            react_1.default.createElement(FormElementDiv, null,
                react_1.default.createElement(InlineTextFieldDiv, null,
                    react_1.default.createElement(componentProvider_1.default.Text, { label: "Fach", text: this.state.currentValues.subject })),
                react_1.default.createElement(InlineTextFieldDiv, null,
                    react_1.default.createElement(componentProvider_1.default.Text, { label: "Jahrgang", text: this.state.currentValues.classLevel })),
                react_1.default.createElement(FormElementDiv, null,
                    react_1.default.createElement(InlineTextFieldDiv, null,
                        react_1.default.createElement(componentProvider_1.default.TextField, { label: "Name", value: this.state.currentValues.name, onChange: function (event) {
                                return _this.onFormChange(event.target.value, 'name');
                            } })),
                    parentTemplate && (react_1.default.createElement(InlineTextFieldDiv, null,
                        react_1.default.createElement(componentProvider_1.default.Text, { label: "Elter-Template", text: react_1.default.createElement(StyledLink, { styles: generalStylesProvider_1.default.styles, onClick: function () {
                                    return _this.props.onTemplateClick(parentTemplate.id);
                                } }, parentTemplate.name) })))),
                react_1.default.createElement(FormElementDiv, null,
                    react_1.default.createElement(InlineTextFieldDiv, null,
                        react_1.default.createElement(componentProvider_1.default.TextField, { label: "Anzahl der Wochen", value: this.state.currentValues.numberOfWeeks, onChange: function (event) {
                                return _this.onFormChange(event.target.value, 'numberOfWeeks');
                            } })),
                    react_1.default.createElement(InlineTextFieldDiv, null,
                        react_1.default.createElement(componentProvider_1.default.TextField, { label: "Einheiten pro Woche", value: this.state.currentValues.unitsPerPeek, onChange: function (event) {
                                return _this.onFormChange(event.target.value, 'unitsPerPeek');
                            } })))),
            react_1.default.createElement(FormElementDiv, null,
                react_1.default.createElement(FlexContainer, null,
                    react_1.default.createElement(componentProvider_1.default.TextArea, { label: "Inhalt", value: this.state.currentValues.content, onChange: function (event) {
                            return _this.onFormChange(event.target.value, 'content');
                        } }))),
            react_1.default.createElement(FormElementDiv, null,
                react_1.default.createElement(FlexContainer, null,
                    react_1.default.createElement(componentProvider_1.default.Label, { caption: "Unterrichtseinheiten", type: "small" }),
                    react_1.default.createElement(componentProvider_1.default.TextFieldTable, { rows: rows, onChange: function (rows) {
                            return _this.onFormChange(rows.map(function (row) { return row.value; }), 'subjectUnits');
                        } }))),
            react_1.default.createElement(FormElementDiv, null,
                react_1.default.createElement(componentProvider_1.default.Label, { caption: "Leistungserfassung", type: "small" }),
                react_1.default.createElement(componentProvider_1.default.SelectorInput, { typeOptions: [{ text: 'Mündlich', value: 'spoken' }], timeOptions: [{ text: '1.Woche', value: '1W' }], values: this.state.currentValues.examinations, onChange: function (value) { return _this.onFormChange(value, 'examinations'); } })),
            react_1.default.createElement(FormElementDiv, null,
                react_1.default.createElement(FlexContainer, null,
                    react_1.default.createElement(CompetenceChips_1.default, { caption: "Kompetenzen vom Lehrplan", competences: this.state.currentValues.competences, onChange: function (value) { return _this.onFormChange(value, 'competences'); } }))),
            react_1.default.createElement(componentProvider_1.default.Button, { onClick: this.onDeleteButtonClick, caption: "L\u00F6schen", color: "default", type: "thin" }),
            react_1.default.createElement(componentProvider_1.default.Button, { onClick: this.onSaveButtonClick, caption: "Speichern", color: "primary" })));
    };
    TopicInstanceView.defaultProps = {
        onTemplateClick: function () { }
    };
    return TopicInstanceView;
}(react_1.Component));
exports.default = TopicInstanceView;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=index.js.map