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
var StyledTopLabel = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: ", ";\n  font-size: 14px;\n  color: ", ";\n  overflow-x: hidden;\n  text-overflow: clip;\n  margin-top: 21px;\n"], ["\n  font-family: ",
    ";\n  font-size: 14px;\n  color: ",
    ";\n  overflow-x: hidden;\n  text-overflow: clip;\n  margin-top: 21px;\n"])), function (_a) {
    var styles = _a.styles;
    return styles['font-family'];
}, function (_a) {
    var styles = _a.styles;
    return styles.defaultTextColor;
});
var StyledSubLabel = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-family: ", ";\n  font-size: 14px;\n  color: ", ";\n  text-align: center;\n  overflow-x: hidden;\n  text-overflow: clip;\n  padding-top: 10px;\n  padding-left: 25px;\n"], ["\n  font-family: ",
    ";\n  font-size: 14px;\n  color: ",
    ";\n  text-align: center;\n  overflow-x: hidden;\n  text-overflow: clip;\n  padding-top: 10px;\n  padding-left: 25px;\n"])), function (_a) {
    var styles = _a.styles;
    return styles['font-family'];
}, function (_a) {
    var styles = _a.styles;
    return styles.defaultTextColor;
});
var StyledLabels = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding-right: 10px;\n  white-space: nowrap;\n  max-width: 100px;\n  ", ":first-child {\n    margin-top: 0px;\n  }\n  ", " + ", " {\n    padding-top: 21px;\n  }\n"], ["\n  padding-right: 10px;\n  white-space: nowrap;\n  max-width: 100px;\n  ", ":first-child {\n    margin-top: 0px;\n  }\n  ", " + ", " {\n    padding-top: 21px;\n  }\n"])), StyledTopLabel, StyledSubLabel, StyledSubLabel);
var RowCaptions = function (_a) {
    var labels = _a.labels, className = _a.className;
    function generateLabels(labels) {
        var result = [];
        labels.forEach(function (label, i) {
            result.push(react_1.default.createElement(StyledTopLabel, { key: i, styles: generalStylesProvider_1.default.styles }, label.topLabel));
            label.subLabels.forEach(function (subLabel, j) {
                result.push(react_1.default.createElement(StyledSubLabel, { key: i + "-" + j, styles: generalStylesProvider_1.default.styles }, subLabel));
            });
        });
        return result;
    }
    var labelComponents = generateLabels(labels);
    return react_1.default.createElement(StyledLabels, { className: className }, labelComponents);
};
exports.default = RowCaptions;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=RowCaptions.js.map