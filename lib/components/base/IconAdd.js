"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var IconAdd = function (props) { return (react_1.default.createElement("svg", __assign({ width: 24, height: 24 }, props),
    react_1.default.createElement("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z", fill: props.color }),
    react_1.default.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }))); };
exports.default = IconAdd;
//# sourceMappingURL=IconAdd.js.map