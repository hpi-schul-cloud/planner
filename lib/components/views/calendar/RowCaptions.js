var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
import StylesProvider from '../../provider/generalStylesProvider';
var StyledTopLabel = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: ", ";\n  font-size: 14px;\n  color: ", ";\n  overflow-x: hidden;\n  text-overflow: clip;\n  margin-top: 21px;\n"], ["\n  font-family: ",
    ";\n  font-size: 14px;\n  color: ",
    ";\n  overflow-x: hidden;\n  text-overflow: clip;\n  margin-top: 21px;\n"])), function (_a) {
    var styles = _a.styles;
    return styles['font-family'];
}, function (_a) {
    var styles = _a.styles;
    return styles.defaultTextColor;
});
var StyledSubLabel = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-family: ", ";\n  font-size: 14px;\n  color: ", ";\n  text-align: center;\n  overflow-x: hidden;\n  text-overflow: clip;\n  padding-top: 10px;\n  padding-left: 25px;\n"], ["\n  font-family: ",
    ";\n  font-size: 14px;\n  color: ",
    ";\n  text-align: center;\n  overflow-x: hidden;\n  text-overflow: clip;\n  padding-top: 10px;\n  padding-left: 25px;\n"])), function (_a) {
    var styles = _a.styles;
    return styles['font-family'];
}, function (_a) {
    var styles = _a.styles;
    return styles.defaultTextColor;
});
var StyledLabels = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding-right: 10px;\n  white-space: nowrap;\n  max-width: 100px;\n  ", ":first-child {\n    margin-top: 0px;\n  }\n  ", " + ", " {\n    padding-top: 21px;\n  }\n"], ["\n  padding-right: 10px;\n  white-space: nowrap;\n  max-width: 100px;\n  ", ":first-child {\n    margin-top: 0px;\n  }\n  ", " + ", " {\n    padding-top: 21px;\n  }\n"])), StyledTopLabel, StyledSubLabel, StyledSubLabel);
var RowCaptions = function (_a) {
    var labels = _a.labels, className = _a.className;
    function generateLabels(labels) {
        var result = [];
        labels.forEach(function (label, i) {
            result.push(React.createElement(StyledTopLabel, { key: i, styles: StylesProvider.styles }, label.topLabel));
            label.subLabels.forEach(function (subLabel, j) {
                result.push(React.createElement(StyledSubLabel, { key: i + "-" + j, styles: StylesProvider.styles }, subLabel));
            });
        });
        return result;
    }
    var labelComponents = generateLabels(labels);
    return React.createElement(StyledLabels, { className: className }, labelComponents);
};
export default RowCaptions;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=RowCaptions.js.map