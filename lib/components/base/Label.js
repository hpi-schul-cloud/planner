var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
var StyledLabel = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 14px;\n  color: #4a4a4a;\n  font-family: sans-serif;\n  font-weight: normal;\n  margin-bottom: 5px;\n"], ["\n  font-size: 14px;\n  color: #4a4a4a;\n  font-family: sans-serif;\n  font-weight: normal;\n  margin-bottom: 5px;\n"])));
var Label = function (_a) {
    var caption = _a.caption, className = _a.className, _b = _a.type, type = _b === void 0 ? 'medium' : _b;
    return React.createElement(StyledLabel, { className: className }, caption);
};
export default Label;
var templateObject_1;
//# sourceMappingURL=Label.js.map