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
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import InteractiveRasterUnit from './InteractiveRasterUnit';
import { TimeRasterWrapper } from '../../plannerBase';
import RowCaptions from './RowCaptions';
import { generateMonthLabelMap, generateWeeklyColorMap } from '../../plannerBase';
import ComponentProvider from '../../provider/componentProvider';
var FlexContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  > * {\n    box-sizing: border-box;\n  }\n"], ["\n  display: flex;\n  > * {\n    box-sizing: border-box;\n  }\n"])));
var FlexChild = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  min-width: 0px;\n"], ["\n  min-width: 0px;\n"])));
var StyledButtonContainer = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-top: ", ";\n"], ["\n  margin-top: ", ";\n"])), function (_a) {
    var hasTemplates = _a.hasTemplates;
    return (hasTemplates ? '0px' : '-36px');
});
var RasterUnitContainer = (function (_super) {
    __extends(RasterUnitContainer, _super);
    function RasterUnitContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.wrapRasterRowsWithGrid = function (children) {
            var monthLabels = generateMonthLabelMap(_this.props.schoolYear.utcStartDate, _this.props.schoolYear.utcEndDate);
            var rasterColors = generateWeeklyColorMap(_this.props.eventData, _this.props.schoolYear.utcStartDate);
            return (React.createElement(TimeRasterWrapper, { rasterCount: _this.props.rasterCount, rasterSize: _this.props.rasterSize, columnColorMap: rasterColors, topLabelsMap: monthLabels }, children));
        };
        _this.updateClassInstance = function (classInstances) {
            _this.props.onUpdate(_this.props.classLevelId, classInstances);
        };
        _this.generateLabels = function () {
            var rasterColors = generateWeeklyColorMap(_this.props.eventData, _this.props.schoolYear.utcStartDate);
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
        return (React.createElement(React.Fragment, null,
            React.createElement(FlexContainer, null,
                React.createElement(RowCaptions, { labels: labels }),
                React.createElement(FlexChild, null,
                    React.createElement(InteractiveRasterUnit, { updateClassInstances: this.updateClassInstance, classInstances: this.props.classInstances, topicTemplates: this.props.topicTemplates, rasterCount: this.props.rasterCount, rasterSize: this.props.rasterSize, wrapRasterRows: this.wrapRasterRowsWithGrid, classLevelId: this.props.classLevelId, onEditTemplate: this.props.onEditTemplate, onDeleteTemplate: this.props.onDeleteTemplate, onEditInstance: this.props.onEditInstance, onSaveConfiguration: this.props.onSaveConfiguration }),
                    React.createElement(StyledButtonContainer, { hasTemplates: !!this.props.topicTemplates.length },
                        React.createElement(ComponentProvider.Button, { caption: "+ Themenvorlage", size: "small", type: "thin", onClick: function () { return onAddTemplateClick(_this.props.classLevelId); } }))))));
    };
    return RasterUnitContainer;
}(PureComponent));
export default RasterUnitContainer;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=RasterUnitContainer.js.map