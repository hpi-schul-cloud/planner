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
var StyledSelect = styled_components_1.default.select(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: #ffffff;\n  border: 1px solid #979797;\n  border-radius: 5px;\n  font-family: sans-serif;\n  font-size: 12px;\n  color: #5e5e5e;\n  height: 34px;\n"], ["\n  background: #ffffff;\n  border: 1px solid #979797;\n  border-radius: 5px;\n  font-family: sans-serif;\n  font-size: 12px;\n  color: #5e5e5e;\n  height: 34px;\n"])));
var StyledSelectContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 5px 0px;\n  display: inline-flex;\n  flex-direction: column;\n"], ["\n  margin: 5px 0px;\n  display: inline-flex;\n  flex-direction: column;\n"])));
var Select = function (_a) {
    var initialValue = _a.initialValue, values = _a.values, caption = _a.caption, onChange = _a.onChange;
    var labelComponent = caption ? react_1.default.createElement(Label_1.default, { caption: caption }) : null;
    return (react_1.default.createElement(StyledSelectContainer, null,
        labelComponent,
        react_1.default.createElement(StyledSelect, { value: initialValue, onChange: onChange }, values.map(function (option) { return (react_1.default.createElement("option", { value: option.value, key: option.value }, option.text)); }))));
};
exports.default = Select;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Select.js.map