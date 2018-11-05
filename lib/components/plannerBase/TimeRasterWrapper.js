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
var generalStylesProvider_1 = __importDefault(require("../provider/generalStylesProvider"));
var StyledTodayLine = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  top: -5px;\n  bottom: -5px;\n  position: absolute;\n  z-index: -1;\n  width: 2px;\n  background: #ea3e3e;\n  left: ", ";\n"], ["\n  top: -5px;\n  bottom: -5px;\n  position: absolute;\n  z-index: -1;\n  width: 2px;\n  background: #ea3e3e;\n  left: ", ";\n"])), function (_a) {
    var left = _a.left;
    return left + "px";
});
var StyledOverflowContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  overflow-x: scroll;\n  overflow-y: hidden;\n  margin-bottom: 20px;\n  vertical-align: top;\n  /* To adjust the size of inline-block elements https://stackoverflow.com/questions/27536428/inline-block-element-height-issue */\n  font-size: 1px;\n"], ["\n  overflow-x: scroll;\n  overflow-y: hidden;\n  margin-bottom: 20px;\n  vertical-align: top;\n  /* To adjust the size of inline-block elements https://stackoverflow.com/questions/27536428/inline-block-element-height-issue */\n  font-size: 1px;\n"])));
var StyledLabel = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-block;\n  position: absolute;\n  left: ", ";\n  text-overflow: ellipsis;\n  overflow-x: hidden;\n  font-family: ", ";\n  font-size: 12px;\n  color: ", ";\n  vertical-align: top;\n"], ["\n  display: inline-block;\n  position: absolute;\n  left: ", ";\n  text-overflow: ellipsis;\n  overflow-x: hidden;\n  font-family: ",
    ";\n  font-size: 12px;\n  color: ",
    ";\n  vertical-align: top;\n"])), function (_a) {
    var left = _a.left;
    return left + "px";
}, function (_a) {
    var styles = _a.styles;
    return styles['font-family'];
}, function (_a) {
    var styles = _a.styles;
    return styles.lightTextColor;
});
var StyledCenteredLabel = styled_components_1.default(StyledLabel)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  /* Centered to middle of text */\n  transform: translate(-50%, 0);\n"], ["\n  /* Centered to middle of text */\n  transform: translate(-50%, 0);\n"])));
var StyledRasterColumn = styled_components_1.default.div.attrs({
    width: function (props) { return props.width + "px" || '0px'; },
    backgroundColor: function (props) {
        return "" + props.backgroundColor || 'none';
    },
    left: function (props) { return props.left + "px" || '0px'; }
})(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  z-index: -1;\n  box-sizing: border-box;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: ", ";\n  width: ", ";\n  background: ", ";\n"], ["\n  z-index: -1;\n  box-sizing: border-box;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: ", ";\n  width: ", ";\n  background: ", ";\n"])), function (props) { return props.left; }, function (props) { return props.width; }, function (props) { return props.backgroundColor; });
var StyledWidthContainer = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: ", ";\n  z-index: 1;\n  position: relative;\n  ", " {\n    border: 1px solid #e9e8e8;\n  }\n  ", " ~ ", " {\n    border-left: none;\n  }\n"], ["\n  width: ", ";\n  z-index: 1;\n  position: relative;\n  ", " {\n    border: 1px solid #e9e8e8;\n  }\n  ", " ~ ", " {\n    border-left: none;\n  }\n"])), function (_a) {
    var width = _a.width;
    return width + "px";
}, StyledRasterColumn, StyledRasterColumn, StyledRasterColumn);
var StyledTopLabelContainer = styled_components_1.default(StyledWidthContainer)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  height: 14px;\n  margin-bottom: 2px;\n"], ["\n  height: 14px;\n  margin-bottom: 2px;\n"])));
var StyledBottomLabelContainer = styled_components_1.default(StyledTopLabelContainer)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  padding-top: 5px;\n"], ["\n  padding-top: 5px;\n"])));
var generateTopLabels = function (rasterSize, rasterColumnLabelMap) {
    if (rasterColumnLabelMap === void 0) { rasterColumnLabelMap = {}; }
    return Object.keys(rasterColumnLabelMap).map(function (key) { return (react_1.default.createElement(StyledLabel, { styles: generalStylesProvider_1.default.styles, left: +key * rasterSize, key: key }, rasterColumnLabelMap[key])); });
};
var generateBottomLabels = function (rasterSize, rasterColumnLabelMap) {
    if (rasterColumnLabelMap === void 0) { rasterColumnLabelMap = {}; }
    return Object.keys(rasterColumnLabelMap).map(function (key) { return (react_1.default.createElement(StyledCenteredLabel, { styles: generalStylesProvider_1.default.styles, left: +key * rasterSize + 0.5 * rasterSize, key: key }, rasterColumnLabelMap[key])); });
};
var generateRaster = function (rasterCount, rasterSize, rasterColumnColorMap) {
    if (rasterColumnColorMap === void 0) { rasterColumnColorMap = {}; }
    var result = [];
    for (var i = 0; i < rasterCount; i++) {
        result.push(react_1.default.createElement(StyledRasterColumn, { key: i, left: i * rasterSize, width: rasterSize, backgroundColor: rasterColumnColorMap[i] ? rasterColumnColorMap[i] : 'none' }));
    }
    return result;
};
var TimeRasterWrapper = function (props) {
    var className = props.className, topChildren = props.topChildren, rasterSize = props.rasterSize, rasterCount = props.rasterCount, columnColorMap = props.columnColorMap, topLabelsMap = props.topLabelsMap, bottomLabelsMap = props.bottomLabelsMap, todayLineIndex = props.todayLineIndex;
    var todayLineLeft = todayLineIndex !== undefined
        ? todayLineIndex < 0
            ? 0
            : todayLineIndex > rasterCount - 1
                ? rasterCount * rasterSize - 2
                : todayLineIndex * rasterSize + 0.5 * rasterSize
        : null;
    return (react_1.default.createElement(StyledOverflowContainer, { className: className },
        topChildren && (react_1.default.createElement(StyledWidthContainer, { width: rasterCount * rasterSize }, topChildren)),
        react_1.default.createElement(StyledTopLabelContainer, { width: rasterCount * rasterSize }, generateTopLabels(rasterSize, topLabelsMap)),
        react_1.default.createElement(StyledWidthContainer, { width: rasterCount * rasterSize },
            props.children,
            generateRaster(rasterCount, rasterSize, columnColorMap),
            todayLineLeft !== null && react_1.default.createElement(StyledTodayLine, { left: todayLineLeft })),
        bottomLabelsMap && (react_1.default.createElement(StyledBottomLabelContainer, { width: rasterCount * rasterSize }, generateBottomLabels(rasterSize, bottomLabelsMap)))));
};
exports.default = TimeRasterWrapper;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=TimeRasterWrapper.js.map