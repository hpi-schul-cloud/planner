"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var generalStylesProvider_1 = __importDefault(require("../../provider/generalStylesProvider"));
var StyledLabels = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding-top: 42px;\n  padding-right: 10px;\n  white-space: nowrap;\n  max-width: 70px;\n"], ["\n  padding-top: 42px;\n  padding-right: 10px;\n  white-space: nowrap;\n  max-width: 70px;\n"])));
var StyledLabelArea = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 57px;\n"], ["\n  height: 57px;\n"])));
var StyledLabel = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-family: ", ";\n  font-size: 14px;\n  color: ", ";\n  overflow-x: hidden;\n  text-overflow: clip;\n"], ["\n  font-family: ",
    ";\n  font-size: 14px;\n  color: ",
    ";\n  overflow-x: hidden;\n  text-overflow: clip;\n"])), function (_a) {
    var styles = _a.styles;
    return styles['font-family'];
}, function (_a) {
    var styles = _a.styles;
    return styles.defaultTextColor;
});
var StyledLastLabelArea = styled_components_1.default(StyledLabelArea)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  height: 30px;\n"], ["\n  height: 30px;\n"])));
var StyledSubLabel = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-family: ", ";\n  font-size: 12px;\n  color: ", ";\n  text-align: center;\n  overflow-x: hidden;\n  text-overflow: clip;\n"], ["\n  font-family: ",
    ";\n  font-size: 12px;\n  color: ",
    ";\n  text-align: center;\n  overflow-x: hidden;\n  text-overflow: clip;\n"])), function (_a) {
    var styles = _a.styles;
    return styles['font-family'];
}, function (_a) {
    var styles = _a.styles;
    return styles.lightTextColor;
});
var StyledTopicLabel = styled_components_1.default(StyledLabel)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  padding-top: 22px;\n"], ["\n  padding-top: 22px;\n"])));
var RowCaptions = function (_a) {
    var labels = _a.labels;
    return (react_1.default.createElement(StyledLabels, null,
        labels.map(function (label, i) {
            return labels.length - 1 === i ? (react_1.default.createElement(StyledLastLabelArea, { key: i },
                react_1.default.createElement(StyledLabel, { styles: generalStylesProvider_1.default.styles }, label.text),
                label.subText && (react_1.default.createElement(StyledSubLabel, { styles: generalStylesProvider_1.default.styles }, label.subText)))) : (react_1.default.createElement(StyledLabelArea, { key: i },
                react_1.default.createElement(StyledLabel, { styles: generalStylesProvider_1.default.styles }, label.text),
                label.subText && (react_1.default.createElement(StyledSubLabel, { styles: generalStylesProvider_1.default.styles }, label.subText))));
        }),
        react_1.default.createElement(StyledTopicLabel, { styles: generalStylesProvider_1.default.styles }, "Themen:")));
};
exports.default = RowCaptions;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=RowCaptions.js.map