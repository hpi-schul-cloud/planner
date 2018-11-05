var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import Label from './Label';
import styled from 'styled-components';
var StyledText = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: sans-serif;\n  font-size: 12px;\n  color: #5e5e5e;\n"], ["\n  font-family: sans-serif;\n  font-size: 12px;\n  color: #5e5e5e;\n"])));
var StyledTextFieldContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 5px 0px;\n  display: inline-flex;\n  flex-direction: column;\n"], ["\n  margin: 5px 0px;\n  display: inline-flex;\n  flex-direction: column;\n"])));
var TextField = function (_a) {
    var _b = _a.label, label = _b === void 0 ? '' : _b, text = _a.text;
    var labelComponent = label ? React.createElement(Label, { caption: label }) : null;
    return (React.createElement(StyledTextFieldContainer, null,
        labelComponent,
        React.createElement(StyledText, null, text)));
};
export default TextField;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Text.js.map