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
var componentProvider_1 = __importDefault(require("../../provider/componentProvider"));
var StyledOverlayLabel = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  z-index: 0;\n  left: ", ";\n  width: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  z-index: 0;\n  left: ", ";\n  width: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])), function (props) { return props.left + "px"; }, function (props) { return props.width + "px"; });
var LabelOverlays = function (_a) {
    var rasterSize = _a.rasterSize, labelArray = _a.labelArray;
    return (react_1.default.createElement(react_1.default.Fragment, null, labelArray.map(function (label) { return (react_1.default.createElement(StyledOverlayLabel, { left: label.startIndex * rasterSize, width: (label.endIndex - label.startIndex + 1) * rasterSize },
        react_1.default.createElement(componentProvider_1.default.Label, { caption: label.name, type: 'large' }))); })));
};
exports.default = LabelOverlays;
var templateObject_1;
//# sourceMappingURL=LabelOverlays.js.map