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
var Label_1 = __importDefault(require("./Label"));
var StyledTextArea = styled_components_1.default.textarea(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: #ffffff;\n  border: 1px solid #979797;\n  border-radius: 5px;\n  font-family: sans-serif;\n  font-size: 12px;\n  color: #5e5e5e;\n  padding: 7px 10px;\n"], ["\n  background: #ffffff;\n  border: 1px solid #979797;\n  border-radius: 5px;\n  font-family: sans-serif;\n  font-size: 12px;\n  color: #5e5e5e;\n  padding: 7px 10px;\n"])));
var StyledTextAreaContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 5px 0px;\n  display: inline-flex;\n  flex-direction: column;\n"], ["\n  margin: 5px 0px;\n  display: inline-flex;\n  flex-direction: column;\n"])));
var TextArea = function (_a) {
    var _b = _a.label, label = _b === void 0 ? '' : _b, _c = _a.value, value = _c === void 0 ? '' : _c, _d = _a.onChange, onChange = _d === void 0 ? function () { } : _d;
    var labelComponent = label ? react_1.default.createElement(Label_1.default, { caption: label }) : null;
    return (react_1.default.createElement(StyledTextAreaContainer, null,
        labelComponent,
        react_1.default.createElement(StyledTextArea, { value: value, onChange: onChange })));
};
exports.default = TextArea;
var templateObject_1, templateObject_2;
//# sourceMappingURL=TextArea.js.map