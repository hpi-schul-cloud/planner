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
import React, { Component } from 'react';
import styled from 'styled-components';
import RasterTopicElement from '../../plannerBase/RasterTopicElement';
var FillerElement = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  display: inline-block;\n"], ["\n  width: ", ";\n  height: ",
    ";\n  display: inline-block;\n"])), function (_a) {
    var width = _a.width;
    return width + "px";
}, function (_a) {
    var size = _a.size;
    return size === 'medium' ? '21px' : size === 'large' ? '25px' : '17px';
});
var RasterRowContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n"], ["\n  display: inline-block;\n"])));
var InteractiveRasterRow = (function (_super) {
    __extends(InteractiveRasterRow, _super);
    function InteractiveRasterRow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.generateElements = function () {
            var _a = _this.props, topicElements = _a.topicElements, rasterSize = _a.rasterSize, rasterCount = _a.rasterCount, topicElementSize = _a.topicElementSize, onTopicInstanceClick = _a.onTopicInstanceClick;
            var elements = [];
            var nextIndex = 0;
            var i = 0;
            var _loop_1 = function () {
                var _a = topicElements[i], id = _a.id, text = _a.text, color = _a.color, startIndex = _a.startIndex, endIndex = _a.endIndex;
                if (topicElements[i].startIndex > nextIndex) {
                    elements.push(React.createElement(FillerElement, { width: (startIndex - nextIndex) * rasterSize, size: topicElementSize, key: "Filler-" + i }));
                }
                elements.push(React.createElement(RasterTopicElement, { id: id, rasterSize: rasterSize, startIndex: startIndex, endIndex: endIndex, color: color, text: text, key: id, onClick: function () { return onTopicInstanceClick(id); }, size: topicElementSize }));
                nextIndex = endIndex + 1;
            };
            for (i = 0; i < topicElements.length; i++) {
                _loop_1();
            }
            if (nextIndex < rasterCount) {
                elements.push(React.createElement(FillerElement, { width: (rasterCount - nextIndex) * rasterSize, size: topicElementSize, key: "Filler-" + i }));
            }
            return elements;
        };
        return _this;
    }
    InteractiveRasterRow.prototype.render = function () {
        var elements = this.generateElements();
        return React.createElement(RasterRowContainer, null, elements);
    };
    return InteractiveRasterRow;
}(Component));
export default InteractiveRasterRow;
var templateObject_1, templateObject_2;
//# sourceMappingURL=RasterRow.js.map