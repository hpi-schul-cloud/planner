var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
import Label from './Label';
var StyledTextArea = styled.textarea(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: #ffffff;\n  border: 1px solid #979797;\n  border-radius: 5px;\n  font-family: sans-serif;\n  font-size: 12px;\n  color: #5e5e5e;\n  padding: 7px 10px;\n"], ["\n  background: #ffffff;\n  border: 1px solid #979797;\n  border-radius: 5px;\n  font-family: sans-serif;\n  font-size: 12px;\n  color: #5e5e5e;\n  padding: 7px 10px;\n"])));
var StyledTextAreaContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 5px 0px;\n  display: inline-flex;\n  flex-direction: column;\n"], ["\n  margin: 5px 0px;\n  display: inline-flex;\n  flex-direction: column;\n"])));
var TextArea = function (_a) {
    var _b = _a.label, label = _b === void 0 ? '' : _b, _c = _a.value, value = _c === void 0 ? '' : _c, _d = _a.onChange, onChange = _d === void 0 ? function () { } : _d;
    var labelComponent = label ? React.createElement(Label, { caption: label }) : null;
    return (React.createElement(StyledTextAreaContainer, null,
        labelComponent,
        React.createElement(StyledTextArea, { value: value, onChange: onChange })));
};
export default TextArea;
var templateObject_1, templateObject_2;
//# sourceMappingURL=TextArea.js.map