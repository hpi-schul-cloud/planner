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
import React, { PureComponent } from 'react';
import { findDOMNode } from 'react-dom';
import styled from 'styled-components';
import { DropTarget } from 'react-dnd';
import { TOPIC_ELEMENT_SIZE_MAP } from '../../constants';
import ResizableRasterTopicElement from './ResizableRasterTopicElement';
import { TOPIC_INSTANCE, TOPIC_TEMPLATE } from './constants';
import { memoizeArguments } from './helper';
import TopicTooltip from './TopicTooltip';
var TOPIC_ELEMENT_SIZE = 'small';
var FillerElement = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  display: inline-block;\n  vertical-align: bottom;\n"], ["\n  width: ", ";\n  height: ", ";\n  display: inline-block;\n  vertical-align: bottom;\n"])), function (_a) {
    var width = _a.width;
    return width + "px";
}, function (_a) {
    var size = _a.size;
    return (size ? TOPIC_ELEMENT_SIZE_MAP[size] + "px" : '1px');
});
var RasterRowContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  background: ", ";\n"], ["\n  display: inline-block;\n  background: ", ";\n"])), function (_a) {
    var background = _a.background;
    return background;
});
var cache = {};
var cardTarget = {
    canDrop: function (props, monitor) {
        var _a = monitor.getItem(), type = _a.type, rowId = _a.rowId, classLevelId = _a.classLevelId;
        if (type === TOPIC_INSTANCE) {
            return rowId === props.rowId;
        }
        else if (type === TOPIC_TEMPLATE) {
            return props.classLevelId === classLevelId;
        }
        else
            return true;
    },
    hover: function (props, monitor, component) {
        if (!component ||
            !monitor.isOver({ shallow: true }) ||
            !monitor.canDrop()) {
            return;
        }
        var hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
        var clientOffset = monitor.getSourceClientOffset();
        var hoverClientY = clientOffset.x - hoverBoundingRect.left;
        var insertStartIndex = Math.round(hoverClientY / props.rasterSize);
        insertStartIndex =
            insertStartIndex < 0
                ? 0
                : insertStartIndex >= props.rasterCount
                    ? props.rasterCount - 1
                    : insertStartIndex;
        var _a = monitor.getItem(), type = _a.type, width = _a.width, id = _a.id, text = _a.text, color = _a.color;
        if (type === TOPIC_INSTANCE) {
            var _b = monitor.getItem(), rowId = _b.rowId, elementIndex = _b.index;
            if (props.topicElements[elementIndex].startIndex !== insertStartIndex) {
                var _c = props.topicElements[elementIndex], parentTemplateId = _c.parentTemplateId, isLocal = _c.isLocal;
                props.softRelocateTopicElement(rowId, elementIndex, insertStartIndex, width, { id: id, text: text, color: color, isLocal: isLocal, parentTemplateId: parentTemplateId });
            }
        }
        else if (type === TOPIC_TEMPLATE) {
            var hasToUpdate = [props.rowId, insertStartIndex, width].reduce(function (hasToUpdate, value, index) {
                if (cache[index] !== value) {
                    cache[index] = value;
                    return true;
                }
                return hasToUpdate;
            }, false);
            if (hasToUpdate) {
                props.softInsertTopicElement(props.rowId, insertStartIndex, width, {
                    text: text,
                    color: color,
                    isLocal: true,
                    parentTemplateId: id
                });
            }
        }
    },
    drop: function (props) {
        props.onElementDidDrop();
    }
};
var InteractiveRasterRow = (function (_super) {
    __extends(InteractiveRasterRow, _super);
    function InteractiveRasterRow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resizeElementLeft = function (oldStartIndex, newStartIndex, index) {
            var _a, _b, _c, _d;
            if (oldStartIndex > newStartIndex && index > 0) {
                var _e = _this.props.topicElements[index - 1], neighborStartIndex = _e.startIndex, neighborEndIndex = _e.endIndex;
                if (neighborEndIndex >= newStartIndex) {
                    if (newStartIndex > neighborStartIndex) {
                        _this.generateAndCommitElementChanges((_a = {},
                            _a[index - 1] = { endIndex: newStartIndex - 1 },
                            _a[index] = { startIndex: newStartIndex },
                            _a));
                    }
                    else {
                        _this.generateAndCommitElementChanges((_b = {},
                            _b[index - 1] = { endIndex: neighborStartIndex },
                            _b[index] = { startIndex: neighborStartIndex + 1 },
                            _b));
                    }
                }
                else {
                    _this.generateAndCommitElementChanges((_c = {},
                        _c[index] = { startIndex: newStartIndex },
                        _c));
                }
            }
            else {
                _this.generateAndCommitElementChanges((_d = {},
                    _d[index] = { startIndex: newStartIndex },
                    _d));
            }
        };
        _this.resizeElementRight = function (oldEndIndex, newEndIndex, index) {
            var _a, _b, _c, _d;
            if (newEndIndex > oldEndIndex &&
                index !== _this.props.topicElements.length - 1) {
                var _e = _this.props.topicElements[index + 1], neighborStartIndex = _e.startIndex, neighborEndIndex = _e.endIndex;
                if (newEndIndex >= neighborStartIndex) {
                    if (newEndIndex < neighborEndIndex) {
                        _this.generateAndCommitElementChanges((_a = {},
                            _a[index + 1] = { startIndex: newEndIndex + 1 },
                            _a[index] = { endIndex: newEndIndex },
                            _a));
                    }
                    else {
                        _this.generateAndCommitElementChanges((_b = {},
                            _b[index + 1] = { startIndex: neighborEndIndex },
                            _b[index] = { endIndex: neighborEndIndex - 1 },
                            _b));
                    }
                }
                else {
                    _this.generateAndCommitElementChanges((_c = {},
                        _c[index] = { endIndex: newEndIndex },
                        _c));
                }
            }
            else {
                _this.generateAndCommitElementChanges((_d = {},
                    _d[index] = { endIndex: newEndIndex },
                    _d));
            }
        };
        _this.handleElementSizeChangeLeft = memoizeArguments(function (id, index, startIndex, endIndex) {
            var currentElement = _this.props.topicElements[index];
            var oldStartIndex = currentElement.startIndex;
            var newStartIndex = startIndex < 0 ? 0 : startIndex;
            _this.resizeElementLeft(oldStartIndex, newStartIndex, index);
        });
        _this.handleElementSizeChangeRight = memoizeArguments(function (id, index, startIndex, endIndex) {
            var currentElement = _this.props.topicElements[index];
            var oldEndIndex = currentElement.endIndex;
            var newEndIndex = endIndex >= _this.props.rasterCount
                ? _this.props.rasterCount - 1
                : endIndex;
            _this.resizeElementRight(oldEndIndex, newEndIndex, index);
        });
        _this.generateElements = function () {
            var _a = _this.props, topicElements = _a.topicElements, rasterSize = _a.rasterSize, rasterCount = _a.rasterCount, rowId = _a.rowId, onElementDidNotDrop = _a.onElementDidNotDrop;
            var elements = [];
            var nextIndex = 0;
            var i = 0;
            var _loop_1 = function () {
                var _a = topicElements[i], id = _a.id, text = _a.text, color = _a.color, startIndex = _a.startIndex, endIndex = _a.endIndex, isLocal = _a.isLocal;
                if (topicElements[i].startIndex > nextIndex) {
                    elements.push(React.createElement(FillerElement, { size: TOPIC_ELEMENT_SIZE, width: (startIndex - nextIndex) * rasterSize, key: "Filler-" + i }));
                }
                elements.push(React.createElement(TopicTooltip, { key: id, isDisabled: _this.props.isOver, isLocal: !!isLocal, onEditClick: function () { return _this.props.onEditInstance(id); }, onSaveConfiguration: _this.props.onSaveConfiguration },
                    React.createElement(ResizableRasterTopicElement, { key: id, id: id, index: i, size: TOPIC_ELEMENT_SIZE, rowId: rowId, type: TOPIC_INSTANCE, isTransparentWhileDragging: false, onChangeSizeLeft: _this.handleElementSizeChangeLeft, onChangeSizeRight: _this.handleElementSizeChangeRight, onElementDidNotDrop: onElementDidNotDrop, rasterSize: rasterSize, startIndex: startIndex, endIndex: endIndex, color: color, text: text })));
                nextIndex = endIndex + 1;
            };
            for (i = 0; i < topicElements.length; i++) {
                _loop_1();
            }
            if (nextIndex < rasterCount) {
                elements.push(React.createElement(FillerElement, { size: TOPIC_ELEMENT_SIZE, width: (rasterCount - nextIndex) * rasterSize, key: "Filler-" + i }));
            }
            return elements;
        };
        return _this;
    }
    InteractiveRasterRow.prototype.generateAndCommitElementChanges = function (changes) {
        var _this = this;
        var newTopicElements = this.props.topicElements.slice();
        Object.keys(changes).forEach(function (key) {
            newTopicElements = newTopicElements.slice(0, +key).concat([
                __assign({}, _this.props.topicElements[key], changes[key])
            ], newTopicElements.slice(+key + 1, newTopicElements.length));
        });
        this.props.updateElements(this.props.rowId, newTopicElements);
    };
    InteractiveRasterRow.prototype.render = function () {
        var elements = this.generateElements();
        var _a = this.props, connectDropTarget = _a.connectDropTarget, isOver = _a.isOver, canDrop = _a.canDrop;
        var rasterRowState = canDrop
            ? isOver
                ? '#afffb585'
                : '#aff0ff85'
            : 'none';
        return (connectDropTarget && (React.createElement(RasterRowContainer, { background: rasterRowState, innerRef: function (instance) {
                var domNode = findDOMNode(instance);
                connectDropTarget(domNode);
            } }, elements)));
    };
    InteractiveRasterRow = __decorate([
        DropTarget('TopicElement', cardTarget, function (connect, monitor) { return ({
            connectDropTarget: connect.dropTarget(),
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        }); })
    ], InteractiveRasterRow);
    return InteractiveRasterRow;
}(PureComponent));
export default InteractiveRasterRow;
var templateObject_1, templateObject_2;
//# sourceMappingURL=InteractiveRasterRow.js.map