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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React, { Component } from 'react';
import styled from 'styled-components';
import DraggableRasterElement from './dragAndDrop/DraggableRasterElement';
var Dragger = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  width: 8px;\n  z-index: 1;\n"], ["\n  position: absolute;\n  width: 8px;\n  z-index: 1;\n"])));
var LeftDragger = styled(Dragger)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  cursor: w-resize;\n  top: 0px;\n  left: 0px;\n  bottom: 0px;\n"], ["\n  cursor: w-resize;\n  top: 0px;\n  left: 0px;\n  bottom: 0px;\n"])));
var RightDragger = styled(Dragger)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  cursor: e-resize;\n  right: 0px;\n  top: 0px;\n  bottom: 0px;\n"], ["\n  cursor: e-resize;\n  right: 0px;\n  top: 0px;\n  bottom: 0px;\n"])));
var DraggerContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n  * {\n    box-sizing: border-box;\n  }\n"], ["\n  position: relative;\n  display: inline-block;\n  * {\n    box-sizing: border-box;\n  }\n"])));
var RIGHT = 'RIGHT';
var LEFT = 'LEFT';
var ResizableRasterTopicElement = (function (_super) {
    __extends(ResizableRasterTopicElement, _super);
    function ResizableRasterTopicElement(props) {
        var _this = _super.call(this, props) || this;
        _this.initialX = 0;
        _this.startIndex = 0;
        _this.endIndex = 0;
        _this.dragSide = 'LEFT';
        _this.setupDragLeft = function () {
            _this.initialX = _this.topicElementRef.getBoundingClientRect().x;
            _this.startIndex = _this.props.startIndex;
            _this.endIndex = _this.props.endIndex;
            _this.dragSide = LEFT;
            _this.setupDrag();
        };
        _this.setupDragRight = function () {
            var boundingRect = _this.topicElementRef.getBoundingClientRect();
            _this.initialX = boundingRect.x + boundingRect.width;
            _this.startIndex = _this.props.startIndex;
            _this.endIndex = _this.props.endIndex;
            _this.dragSide = RIGHT;
            _this.setupDrag();
        };
        _this.setupDrag = function () {
            window.addEventListener('mousemove', _this.handleMouseMove);
            window.addEventListener('mouseup', _this.handleMouseUp);
        };
        _this.handleMouseMove = function (event) {
            var delta = event.clientX - _this.initialX;
            var steps = Math.round(delta / _this.props.rasterSize);
            var _a = _this, startIndex = _a.startIndex, endIndex = _a.endIndex;
            var _b = _this.props, id = _b.id, index = _b.index, onChangeSizeRight = _b.onChangeSizeRight, onChangeSizeLeft = _b.onChangeSizeLeft;
            if (_this.dragSide === RIGHT) {
                var newEndIndex = endIndex + steps > startIndex ? endIndex + steps : startIndex;
                onChangeSizeRight(id, index, startIndex, newEndIndex);
            }
            else if (_this.dragSide === LEFT) {
                var newStartIndex = startIndex + steps < endIndex ? startIndex + steps : endIndex;
                onChangeSizeLeft(id, index, newStartIndex, endIndex);
            }
        };
        _this.handleMouseUp = function () {
            window.removeEventListener('mousemove', _this.handleMouseMove);
            window.removeEventListener('mouseup', _this.handleMouseUp);
        };
        _this.topicElementRef = React.createRef();
        return _this;
    }
    ResizableRasterTopicElement.prototype.render = function () {
        var _this = this;
        var _a = this.props, onChangeSizeLeft = _a.onChangeSizeLeft, onChangeSizeRight = _a.onChangeSizeRight, props = __rest(_a, ["onChangeSizeLeft", "onChangeSizeRight"]);
        return (React.createElement(DraggerContainer, { innerRef: function (x) {
                _this.topicElementRef = x;
            } },
            React.createElement(DraggableRasterElement, __assign({}, props),
                React.createElement(LeftDragger, { onMouseDown: this.setupDragLeft }),
                React.createElement(RightDragger, { onMouseDown: this.setupDragRight }))));
    };
    return ResizableRasterTopicElement;
}(Component));
export default ResizableRasterTopicElement;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=ResizableRasterTopicElement.js.map