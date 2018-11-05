var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import Label from './Label';
import styled from 'styled-components';
var StyledInput = styled.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: #ffffff;\n  border: 1px solid #979797;\n  border-radius: 5px;\n  font-family: sans-serif;\n  font-size: 12px;\n  color: #5e5e5e;\n\n  padding: ", ";\n"], ["\n  background: #ffffff;\n  border: 1px solid #979797;\n  border-radius: 5px;\n  font-family: sans-serif;\n  font-size: 12px;\n  color: #5e5e5e;\n\n  padding: ",
    ";\n"])), function (_a) {
    var margin = _a.margin;
    return margin === 'dense' ? '0px' : '9px 12px';
});
var StyledTextFieldContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 5px 0px;\n  display: inline-flex;\n  flex-direction: column;\n  width: ", ";\n"], ["\n  margin: 5px 0px;\n  display: inline-flex;\n  flex-direction: column;\n  width: ",
    ";\n"])), function (_a) {
    var fullWidth = _a.fullWidth;
    return fullWidth ? '100%' : 'initial';
});
var TextField = function (_a) {
    var _b = _a.label, label = _b === void 0 ? '' : _b, _c = _a.placeHolderText, placeHolderText = _c === void 0 ? '' : _c, _d = _a.value, value = _d === void 0 ? '' : _d, _e = _a.onChange, onChange = _e === void 0 ? function () { } : _e, className = _a.className, _f = _a.margin, margin = _f === void 0 ? 'normal' : _f, _g = _a.fullWidth, fullWidth = _g === void 0 ? false : _g;
    var labelComponent = label ? React.createElement(Label, { caption: label }) : null;
    return (React.createElement(StyledTextFieldContainer, { fullWidth: fullWidth },
        labelComponent,
        React.createElement(StyledInput, { placeholder: placeHolderText, value: value, onChange: onChange, className: className, margin: margin })));
};
export default TextField;
var templateObject_1, templateObject_2;
//# sourceMappingURL=TextField.js.map