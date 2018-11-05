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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var map_1 = __importDefault(require("lodash/map"));
var throttle_1 = __importDefault(require("lodash/throttle"));
var react_dnd_1 = require("react-dnd");
var react_dnd_html5_backend_1 = __importDefault(require("react-dnd-html5-backend"));
var InteractiveRasterRow_1 = __importDefault(require("./InteractiveRasterRow"));
var DraggableRasterElement_1 = __importDefault(require("./dragAndDrop/DraggableRasterElement"));
var TrashDrop_1 = __importDefault(require("./TrashDrop"));
var constants_1 = require("./constants");
var helper_1 = require("./helper");
var TopicTooltip_1 = __importDefault(require("./TopicTooltip"));
var FlexContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n"])));
var FlexChild = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  min-width: 0px;\n  > * {\n    margin-right: 5px;\n    margin-bottom: 5px;\n  }\n"], ["\n  min-width: 0px;\n  > * {\n    margin-right: 5px;\n    margin-bottom: 5px;\n  }\n"])));
var StyledContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  min-width: 0px;\n"], ["\n  min-width: 0px;\n"])));
var RowContainer = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  & > * {\n    padding: 10px 0px;\n    margin-top: 20px;\n    :first-child {\n      margin-top: 15px;\n    }\n    :last-child {\n      margin-bottom: 5px;\n    }\n  }\n"], ["\n  & > * {\n    padding: 10px 0px;\n    margin-top: 20px;\n    :first-child {\n      margin-top: 15px;\n    }\n    :last-child {\n      margin-bottom: 5px;\n    }\n  }\n"])));
var StyledTrashDrop = styled_components_1.default(TrashDrop_1.default)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-left: 20px;\n  margin-top: -15px;\n  line-height: 1px;\n"], ["\n  margin-left: 20px;\n  margin-top: -15px;\n  line-height: 1px;\n"])));
var InteractiveRasterUnit = (function (_super) {
    __extends(InteractiveRasterUnit, _super);
    function InteractiveRasterUnit(props) {
        var _this = _super.call(this, props) || this;
        _this.setDraggingState = function () {
            _this.setState(__assign({}, _this.state, { isDragging: true }));
        };
        _this.resetDragState = function () {
            _this.softRelocateTopicElement.cancel();
            _this.softInsertTopicElement.cancel();
            _this.setState(__assign({}, _this.state, { tempClassInstances: _this.props.classInstances, isDragging: false }));
        };
        _this.commitCurrentDragState = function () {
            _this.softRelocateTopicElement.cancel();
            _this.softInsertTopicElement.cancel();
            _this.setState({
                isDragging: false
            });
            _this.props.updateClassInstances(_this.state.tempClassInstances);
        };
        _this.softRelocateTopicElement = throttle_1.default(function (rowId, elementIndex, insertStartIndex, width, elementValues) {
            var _a;
            var newTemporaryClassTopics = helper_1.getClassTopicsAfterMove(insertStartIndex, elementIndex, width, elementValues, _this.props.rasterCount, _this.props.classInstances[rowId].topics);
            var newTempClassInstances = __assign({}, _this.props.classInstances, (_a = {}, _a[rowId] = __assign({}, _this.props.classInstances[rowId], { topics: newTemporaryClassTopics }), _a));
            _this.setState({
                isDragging: true,
                tempClassInstances: newTempClassInstances
            });
        }, 100);
        _this.softInsertTopicElement = throttle_1.default(function (rowId, insertStartIndex, width, elementValues) {
            var _a;
            var newTemporaryClassTopics = helper_1.getClassTopicsAfterInsertion(insertStartIndex, width, elementValues, _this.props.rasterCount, _this.props.classInstances[rowId].topics);
            var newTempClassInstances = __assign({}, _this.props.classInstances, (_a = {}, _a[rowId] = __assign({}, _this.props.classInstances[rowId], { topics: newTemporaryClassTopics }), _a));
            _this.setState({
                isDragging: true,
                tempClassInstances: newTempClassInstances
            });
        }, 100);
        _this.deleteTopic = function (classId, index) {
            var newTopics = _this.props.classInstances[classId].topics.slice();
            newTopics.splice(index, 1);
            _this.updateClassInstance(classId, newTopics);
            _this.setState({
                isDragging: false
            });
        };
        _this.updateClassInstance = function (classId, topics) {
            var _a;
            var newClassInstances = __assign({}, _this.props.classInstances, (_a = {}, _a[classId] = __assign({}, _this.props.classInstances[classId], { topics: topics }), _a));
            _this.props.updateClassInstances(newClassInstances);
        };
        _this.state = {
            tempClassInstances: props.classInstances,
            isDragging: false
        };
        return _this;
    }
    InteractiveRasterUnit.prototype.render = function () {
        var _this = this;
        var _a = this.props, topicTemplates = _a.topicTemplates, rasterSize = _a.rasterSize, rasterCount = _a.rasterCount, wrapRasterRows = _a.wrapRasterRows, classLevelId = _a.classLevelId;
        var classInstances = this.state.isDragging
            ? this.state.tempClassInstances
            : this.props.classInstances;
        return (react_1.default.createElement(StyledContainer, null,
            wrapRasterRows(react_1.default.createElement(RowContainer, null, map_1.default(classInstances, function (classInstance) { return (react_1.default.createElement(InteractiveRasterRow_1.default, { topicElements: classInstance.topics, rasterSize: rasterSize, rasterCount: rasterCount, rowId: classInstance.id, classLevelId: classLevelId, key: classInstance.id, updateElements: function (topics) {
                    return _this.updateClassInstance(classInstance.id, topics);
                }, softRelocateTopicElement: _this.softRelocateTopicElement, softInsertTopicElement: _this.softInsertTopicElement, onElementDidNotDrop: _this.resetDragState, onElementDidDrop: _this.commitCurrentDragState, onEditInstance: _this.props.onEditInstance })); }))),
            react_1.default.createElement(FlexContainer, null,
                react_1.default.createElement(FlexChild, null, topicTemplates.map(function (topicTemplate) { return (react_1.default.createElement(TopicTooltip_1.default, { key: topicTemplate.id, isDisabled: _this.state.isDragging, onDeleteClick: function () {
                        return _this.props.onDeleteTemplate(topicTemplate.id);
                    }, onEditClick: function () { return _this.props.onEditTemplate(topicTemplate.id); } },
                    react_1.default.createElement("span", null,
                        react_1.default.createElement(DraggableRasterElement_1.default, { id: topicTemplate.id, classLevelId: classLevelId, type: constants_1.TOPIC_TEMPLATE, color: topicTemplate.color, isTransparentWhileDragging: false, onElementDidNotDrop: _this.resetDragState, onElementStartDrag: _this.setDraggingState, text: topicTemplate.text, rasterSize: rasterSize, startIndex: 0, endIndex: topicTemplate.width })))); })),
                react_1.default.createElement(StyledTrashDrop, { onElementDidDrop: this.deleteTopic }))));
    };
    InteractiveRasterUnit.defaultProps = {
        wrapRasterRows: function (children) { return children; }
    };
    InteractiveRasterUnit = __decorate([
        react_dnd_1.DragDropContext(react_dnd_html5_backend_1.default)
    ], InteractiveRasterUnit);
    return InteractiveRasterUnit;
}(react_1.Component));
exports.default = InteractiveRasterUnit;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=InteractiveRasterUnit.js.map