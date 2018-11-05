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
var Label_1 = __importDefault(require("./Label"));
var styled_components_1 = __importDefault(require("styled-components"));
var StyledText = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: sans-serif;\n  font-size: 12px;\n  color: #5e5e5e;\n"], ["\n  font-family: sans-serif;\n  font-size: 12px;\n  color: #5e5e5e;\n"])));
var StyledTextFieldContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 5px 0px;\n  display: inline-flex;\n  flex-direction: column;\n"], ["\n  margin: 5px 0px;\n  display: inline-flex;\n  flex-direction: column;\n"])));
var TextField = function (_a) {
    var _b = _a.label, label = _b === void 0 ? '' : _b, text = _a.text;
    var labelComponent = label ? react_1.default.createElement(Label_1.default, { caption: label }) : null;
    return (react_1.default.createElement(StyledTextFieldContainer, null,
        labelComponent,
        react_1.default.createElement(StyledText, null, text)));
};
exports.default = TextField;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Text.js.map