var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
import IconAdd from './IconAdd';
var IconContainer = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  cursor: pointer;\n  display: inline-block;\n  border-radius: 50%;\n  height: 24px;\n  :hover {\n    background: #f2f2f2;\n  }\n"], ["\n  cursor: pointer;\n  display: inline-block;\n  border-radius: 50%;\n  height: 24px;\n  :hover {\n    background: #f2f2f2;\n  }\n"])));
var IconButton = function (props) {
    return (React.createElement(IconContainer, { onClick: props.onClick },
        React.createElement(IconAdd, { color: "#5e5e5e" })));
};
export default IconButton;
var templateObject_1;
//# sourceMappingURL=IconButton.js.map