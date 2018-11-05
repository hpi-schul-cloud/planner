var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
var StyledButton = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  cursor: pointer;\n  padding: 6px 18px;\n  border: 1px solid #979797;\n  border-radius: 5px;\n  font-family: sans-serif;\n  font-size: 14px;\n  color: #5e5e5e;\n  text-align: center;\n  background: white;\n  :hover {\n    background: #f2f2f2;\n  }\n"], ["\n  cursor: pointer;\n  padding: 6px 18px;\n  border: 1px solid #979797;\n  border-radius: 5px;\n  font-family: sans-serif;\n  font-size: 14px;\n  color: #5e5e5e;\n  text-align: center;\n  background: white;\n  :hover {\n    background: #f2f2f2;\n  }\n"])));
var Button = function (_a) {
    var caption = _a.caption, className = _a.className, onClick = _a.onClick, _b = _a.disabled, disabled = _b === void 0 ? false : _b;
    return (React.createElement(StyledButton, { onClick: onClick, className: className, disabled: disabled }, caption));
};
export default Button;
var templateObject_1;
//# sourceMappingURL=Button.js.map