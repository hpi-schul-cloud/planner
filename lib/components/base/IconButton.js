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
var IconAdd_1 = __importDefault(require("./IconAdd"));
var IconContainer = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  cursor: pointer;\n  display: inline-block;\n  border-radius: 50%;\n  height: 24px;\n  :hover {\n    background: #f2f2f2;\n  }\n"], ["\n  cursor: pointer;\n  display: inline-block;\n  border-radius: 50%;\n  height: 24px;\n  :hover {\n    background: #f2f2f2;\n  }\n"])));
var IconButton = function (props) {
    return (react_1.default.createElement(IconContainer, { onClick: props.onClick },
        react_1.default.createElement(IconAdd_1.default, { color: "#5e5e5e" })));
};
exports.default = IconButton;
var templateObject_1;
//# sourceMappingURL=IconButton.js.map