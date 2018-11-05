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
var StyledChip = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: #f2f2f2;\n  border-radius: 5px;\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 10px;\n  @media (max-width: 400px) {\n    padding: 5px 5px;\n  }\n"], ["\n  background: #f2f2f2;\n  border-radius: 5px;\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 10px;\n  @media (max-width: 400px) {\n    padding: 5px 5px;\n  }\n"])));
var StyledFlexChild = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  min-width: 0px;\n  display: flex;\n  align-items: baseline;\n"], ["\n  min-width: 0px;\n  display: flex;\n  align-items: baseline;\n"])));
var StyledBigLabel = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-family: sans-serif;\n  font-size: 14px;\n  color: #4a4a4a;\n"], ["\n  font-family: sans-serif;\n  font-size: 14px;\n  color: #4a4a4a;\n"])));
var StyledCloseLabel = styled_components_1.default(StyledBigLabel)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  cursor: pointer;\n  padding: 0px 5px;\n  :hover {\n    color: #797979;\n  }\n"], ["\n  cursor: pointer;\n  padding: 0px 5px;\n  :hover {\n    color: #797979;\n  }\n"])));
var StyledFirstlabel = styled_components_1.default(StyledBigLabel)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-right: 10px;\n  min-width: 0px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex-shrink: 0;\n  @media (max-width: 400px) {\n    margin-right: 5px;\n  }\n"], ["\n  margin-right: 10px;\n  min-width: 0px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex-shrink: 0;\n  @media (max-width: 400px) {\n    margin-right: 5px;\n  }\n"])));
var StyledSecondLabel = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-family: sans-serif;\n  font-size: 12px;\n  color: #4a4a4a;\n  min-width: 0px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"], ["\n  font-family: sans-serif;\n  font-size: 12px;\n  color: #4a4a4a;\n  min-width: 0px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])));
var Chip = function (_a) {
    var _b = _a.firstLabel, firstLabel = _b === void 0 ? '' : _b, _c = _a.secondLabel, secondLabel = _c === void 0 ? '' : _c, _d = _a.onDeleteClick, onDeleteClick = _d === void 0 ? function () { } : _d;
    return (react_1.default.createElement(StyledChip, null,
        react_1.default.createElement(StyledFlexChild, null,
            react_1.default.createElement(StyledFirstlabel, null, firstLabel),
            react_1.default.createElement(StyledSecondLabel, null, secondLabel)),
        react_1.default.createElement(StyledCloseLabel, { onClick: onDeleteClick }, "x")));
};
exports.default = Chip;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=Chip.js.map