var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
import Label from './Label';
var StyledSelect = styled.select(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: #ffffff;\n  border: 1px solid #979797;\n  border-radius: 5px;\n  font-family: sans-serif;\n  font-size: 12px;\n  color: #5e5e5e;\n  height: 34px;\n"], ["\n  background: #ffffff;\n  border: 1px solid #979797;\n  border-radius: 5px;\n  font-family: sans-serif;\n  font-size: 12px;\n  color: #5e5e5e;\n  height: 34px;\n"])));
var StyledSelectContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 5px 0px;\n  display: inline-flex;\n  flex-direction: column;\n"], ["\n  margin: 5px 0px;\n  display: inline-flex;\n  flex-direction: column;\n"])));
var Select = function (_a) {
    var initialValue = _a.initialValue, values = _a.values, caption = _a.caption, onChange = _a.onChange;
    var labelComponent = caption ? React.createElement(Label, { caption: caption }) : null;
    return (React.createElement(StyledSelectContainer, null,
        labelComponent,
        React.createElement(StyledSelect, { value: initialValue, onChange: onChange }, values.map(function (option) { return (React.createElement("option", { value: option.value, key: option.value }, option.text)); }))));
};
export default Select;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Select.js.map