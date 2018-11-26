var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
import StylesProvider from '../../provider/generalStylesProvider';
var StyledLabels = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding-top: 42px;\n  padding-right: 10px;\n  white-space: nowrap;\n  max-width: 70px;\n"], ["\n  padding-top: 42px;\n  padding-right: 10px;\n  white-space: nowrap;\n  max-width: 70px;\n"])));
var StyledLabelArea = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 57px;\n"], ["\n  height: 57px;\n"])));
var StyledLabel = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-family: ", ";\n  font-size: 14px;\n  color: ", ";\n  overflow-x: hidden;\n  text-overflow: clip;\n"], ["\n  font-family: ",
    ";\n  font-size: 14px;\n  color: ",
    ";\n  overflow-x: hidden;\n  text-overflow: clip;\n"])), function (_a) {
    var styles = _a.styles;
    return styles['font-family'];
}, function (_a) {
    var styles = _a.styles;
    return styles.defaultTextColor;
});
var StyledLastLabelArea = styled(StyledLabelArea)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  height: 30px;\n"], ["\n  height: 30px;\n"])));
var StyledSubLabel = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-family: ", ";\n  font-size: 12px;\n  color: ", ";\n  text-align: center;\n  overflow-x: hidden;\n  text-overflow: clip;\n"], ["\n  font-family: ",
    ";\n  font-size: 12px;\n  color: ",
    ";\n  text-align: center;\n  overflow-x: hidden;\n  text-overflow: clip;\n"])), function (_a) {
    var styles = _a.styles;
    return styles['font-family'];
}, function (_a) {
    var styles = _a.styles;
    return styles.lightTextColor;
});
var StyledTopicLabel = styled(StyledLabel)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  padding-top: 22px;\n"], ["\n  padding-top: 22px;\n"])));
var RowCaptions = function (_a) {
    var labels = _a.labels;
    return (React.createElement(StyledLabels, null,
        labels.map(function (label, i) {
            return labels.length - 1 === i ? (React.createElement(StyledLastLabelArea, { key: i },
                React.createElement(StyledLabel, { styles: StylesProvider.styles }, label.text),
                label.subText && (React.createElement(StyledSubLabel, { styles: StylesProvider.styles }, label.subText)))) : (React.createElement(StyledLabelArea, { key: i },
                React.createElement(StyledLabel, { styles: StylesProvider.styles }, label.text),
                label.subText && (React.createElement(StyledSubLabel, { styles: StylesProvider.styles }, label.subText))));
        }),
        React.createElement(StyledTopicLabel, { styles: StylesProvider.styles }, "Vorlagen:")));
};
export default RowCaptions;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=RowCaptions.js.map