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
import ComponentProvider from '../provider/componentProvider';
import { TOPIC_ELEMENT_SIZE_MAP } from '../constants';
var RasterTopicElement = (function (_super) {
    __extends(RasterTopicElement, _super);
    function RasterTopicElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RasterTopicElement.prototype.render = function () {
        var _a = this.props, startIndex = _a.startIndex, endIndex = _a.endIndex, rasterSize = _a.rasterSize, size = _a.size, otherProps = __rest(_a, ["startIndex", "endIndex", "rasterSize", "size"]);
        var width = (1 + endIndex - startIndex) * rasterSize;
        var height = TOPIC_ELEMENT_SIZE_MAP[size];
        return (React.createElement(ComponentProvider.TopicElement, __assign({ width: width, height: height }, otherProps)));
    };
    RasterTopicElement.defaultProps = {
        color: '#FFF',
        size: 'small'
    };
    return RasterTopicElement;
}(Component));
export default RasterTopicElement;
//# sourceMappingURL=RasterTopicElement.js.map