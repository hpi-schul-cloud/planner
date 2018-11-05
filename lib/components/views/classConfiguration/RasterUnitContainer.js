"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var InteractiveRasterUnit_1 = __importDefault(require("./InteractiveRasterUnit"));
var plannerBase_1 = require("../../plannerBase");
var RowCaptions_1 = __importDefault(require("./RowCaptions"));
var plannerBase_2 = require("../../plannerBase");
var componentProvider_1 = __importDefault(require("../../provider/componentProvider"));
var FlexContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  > * {\n    box-sizing: border-box;\n  }\n"], ["\n  display: flex;\n  > * {\n    box-sizing: border-box;\n  }\n"])));
var FlexChild = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  min-width: 0px;\n"], ["\n  min-width: 0px;\n"])));
var RasterUnitContainer = (function (_super) {
    __extends(RasterUnitContainer, _super);
    function RasterUnitContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.wrapRasterRowsWithGrid = function (children) {
            var monthLabels = plannerBase_2.generateMonthLabelMap(_this.props.schoolYear.utcStartDate, _this.props.schoolYear.utcEndDate);
            var rasterColors = plannerBase_2.generateWeeklyColorMap(_this.props.eventData, _this.props.schoolYear.utcStartDate);
            return (react_1.default.createElement(plannerBase_1.TimeRasterWrapper, { rasterCount: _this.props.rasterCount, rasterSize: _this.props.rasterSize, columnColorMap: rasterColors, topLabelsMap: monthLabels }, children));
        };
        _this.updateClassInstance = function (classInstances) {
            _this.props.onUpdate(_this.props.classLevelId, classInstances);
        };
        _this.generateLabels = function () {
            var rasterColors = plannerBase_2.generateWeeklyColorMap(_this.props.eventData, _this.props.schoolYear.utcStartDate);
            var noSchoolIndexSet = new Set(Object.keys(rasterColors));
            return Object.values(_this.props.classInstances).map(function (classInstance) {
                var freeSlotsCount = classInstance.topics.reduce(function (count, topic) {
                    var actualTopicLength = 0;
                    for (var i = topic.startIndex; i <= topic.endIndex; i++) {
                        actualTopicLength += noSchoolIndexSet.has("" + i) ? 0 : 1;
                    }
                    return count - actualTopicLength;
                }, _this.props.rasterCount - noSchoolIndexSet.size);
                return {
                    text: classInstance.name,
                    subText: freeSlotsCount > 0 ? freeSlotsCount + " frei" : ''
                };
            });
        };
        _this.state = {
            classInstances: props.classInstances
        };
        return _this;
    }
    RasterUnitContainer.prototype.render = function () {
        var _this = this;
        var onAddTemplateClick = this.props.onAddTemplateClick;
        var labels = this.generateLabels();
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(FlexContainer, null,
                react_1.default.createElement(RowCaptions_1.default, { labels: labels }),
                react_1.default.createElement(FlexChild, null,
                    react_1.default.createElement(InteractiveRasterUnit_1.default, { updateClassInstances: this.updateClassInstance, classInstances: this.props.classInstances, topicTemplates: this.props.topicTemplates, rasterCount: this.props.rasterCount, rasterSize: this.props.rasterSize, wrapRasterRows: this.wrapRasterRowsWithGrid, classLevelId: this.props.classLevelId, onEditTemplate: this.props.onEditTemplate, onDeleteTemplate: this.props.onDeleteTemplate, onEditInstance: this.props.onEditInstance }),
                    react_1.default.createElement(componentProvider_1.default.Button, { caption: "+ Thema", size: "small", type: "thin", onClick: function () { return onAddTemplateClick(_this.props.classLevelId); } })))));
    };
    return RasterUnitContainer;
}(react_1.Component));
exports.default = RasterUnitContainer;
var templateObject_1, templateObject_2;
//# sourceMappingURL=RasterUnitContainer.js.map