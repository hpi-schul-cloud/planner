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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
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
var react_dom_1 = require("react-dom");
var styled_components_1 = __importDefault(require("styled-components"));
var react_dnd_1 = require("react-dnd");
var RasterTopicElement_1 = __importDefault(require("../../../plannerBase/RasterTopicElement"));
var StyledDragContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  opacity: ", ";\n  * {\n    box-sizing: border-box;\n  }\n"], ["\n  display: inline-block;\n  opacity: ",
    ";\n  * {\n    box-sizing: border-box;\n  }\n"])), function (_a) {
    var isTransparent = _a.isTransparent;
    return isTransparent ? 0 : 1;
});
var StyledTopicElementContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  cursor: move;\n  /* Fixes the drag and drop preview image. See https://github.com/react-dnd/react-dnd/issues/788 */\n  transform: translate(0, 0);\n"], ["\n  display: inline-block;\n  cursor: move;\n  /* Fixes the drag and drop preview image. See https://github.com/react-dnd/react-dnd/issues/788 */\n  transform: translate(0, 0);\n"])));
var elementSource = {
    beginDrag: function (props) {
        if (props.onElementStartDrag)
            props.onElementStartDrag();
        return {
            id: props.id,
            index: props.index,
            type: props.type,
            width: props.endIndex - props.startIndex + 1,
            text: props.text,
            color: props.color,
            rowId: props.rowId,
            classLevelId: props.classLevelId
        };
    },
    endDrag: function (props, monitor) {
        if (monitor.didDrop() === false) {
            props.onElementDidNotDrop();
        }
    }
};
var collect = function (connect, monitor) { return ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
}); };
var DragDropRasterTopicElement = (function (_super) {
    __extends(DragDropRasterTopicElement, _super);
    function DragDropRasterTopicElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DragDropRasterTopicElement.prototype.render = function () {
        var _a = this.props, connectDragSource = _a.connectDragSource, isDragging = _a.isDragging, isTransparentWhileDragging = _a.isTransparentWhileDragging, type = _a.type, props = __rest(_a, ["connectDragSource", "isDragging", "isTransparentWhileDragging", "type"]);
        var isTransparent = !!(isDragging && isTransparentWhileDragging);
        return (connectDragSource && (react_1.default.createElement(StyledDragContainer, { isTransparent: isTransparent },
            this.props.children,
            react_1.default.createElement(StyledTopicElementContainer, { innerRef: function (instance) {
                    var domNode = react_dom_1.findDOMNode(instance);
                    connectDragSource(domNode);
                } },
                react_1.default.createElement(RasterTopicElement_1.default, __assign({}, props))))));
    };
    DragDropRasterTopicElement = __decorate([
        react_dnd_1.DragSource('TopicElement', elementSource, collect)
    ], DragDropRasterTopicElement);
    return DragDropRasterTopicElement;
}(react_1.Component));
exports.default = DragDropRasterTopicElement;
var templateObject_1, templateObject_2;
//# sourceMappingURL=DraggableRasterElement.js.map