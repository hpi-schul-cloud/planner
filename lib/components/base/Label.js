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
var StyledLabel = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 14px;\n  color: #4a4a4a;\n  font-family: sans-serif;\n  font-weight: normal;\n  margin-bottom: 5px;\n"], ["\n  font-size: 14px;\n  color: #4a4a4a;\n  font-family: sans-serif;\n  font-weight: normal;\n  margin-bottom: 5px;\n"])));
var Label = function (_a) {
    var caption = _a.caption, className = _a.className, _b = _a.type, type = _b === void 0 ? 'medium' : _b;
    return react_1.default.createElement(StyledLabel, { className: className }, caption);
};
exports.default = Label;
var templateObject_1;
//# sourceMappingURL=Label.js.map