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
var StyledButton = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  cursor: pointer;\n  padding: 6px 18px;\n  border: 1px solid #979797;\n  border-radius: 5px;\n  font-family: sans-serif;\n  font-size: 14px;\n  color: #5e5e5e;\n  text-align: center;\n  background: white;\n  :hover {\n    background: #f2f2f2;\n  }\n"], ["\n  cursor: pointer;\n  padding: 6px 18px;\n  border: 1px solid #979797;\n  border-radius: 5px;\n  font-family: sans-serif;\n  font-size: 14px;\n  color: #5e5e5e;\n  text-align: center;\n  background: white;\n  :hover {\n    background: #f2f2f2;\n  }\n"])));
var Button = function (_a) {
    var caption = _a.caption, className = _a.className, onClick = _a.onClick, _b = _a.disabled, disabled = _b === void 0 ? false : _b;
    return (react_1.default.createElement(StyledButton, { onClick: onClick, className: className, disabled: disabled }, caption));
};
exports.default = Button;
var templateObject_1;
//# sourceMappingURL=Button.js.map