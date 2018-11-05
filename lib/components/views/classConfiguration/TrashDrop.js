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
var react_dom_1 = require("react-dom");
var styled_components_1 = __importDefault(require("styled-components"));
var react_dnd_1 = require("react-dnd");
var IconTrash_1 = __importDefault(require("../../../assets/IconTrash"));
var constants_1 = require("./constants");
var IconContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  padding: 10px;\n  background: ", ";\n  border-radius: 22px;\n"], ["\n  display: inline-block;\n  padding: 10px;\n  background: ", ";\n  border-radius: 22px;\n"])), function (_a) {
    var color = _a.color;
    return color;
});
var cardTarget = {
    canDrop: function (_, monitor) {
        var type = monitor.getItem().type;
        return type === constants_1.TOPIC_INSTANCE;
    },
    drop: function (props, monitor) {
        var _a = monitor.getItem(), index = _a.index, rowId = _a.rowId;
        props.onElementDidDrop(rowId, index);
    }
};
var TrashDrop = (function (_super) {
    __extends(TrashDrop, _super);
    function TrashDrop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TrashDrop.prototype.render = function () {
        var _a = this.props, canDrop = _a.canDrop, isOver = _a.isOver, connectDropTarget = _a.connectDropTarget, className = _a.className;
        var containerColor = canDrop
            ? isOver
                ? '#afffb585'
                : '#aff0ff85'
            : 'none';
        return (connectDropTarget && (react_1.default.createElement(IconContainer, { color: containerColor, innerRef: function (instance) {
                var domNode = react_dom_1.findDOMNode(instance);
                connectDropTarget(domNode);
            }, className: className },
            react_1.default.createElement(IconTrash_1.default, { color: canDrop ? '#838383' : '#e9e8e8' }))));
    };
    TrashDrop = __decorate([
        react_dnd_1.DropTarget('TopicElement', cardTarget, function (connect, monitor) { return ({
            connectDropTarget: connect.dropTarget(),
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        }); })
    ], TrashDrop);
    return TrashDrop;
}(react_1.Component));
exports.default = TrashDrop;
var templateObject_1;
//# sourceMappingURL=TrashDrop.js.map