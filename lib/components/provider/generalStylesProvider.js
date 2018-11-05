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
Object.defineProperty(exports, "__esModule", { value: true });
var GeneralStylesProvider = (function () {
    function GeneralStylesProvider() {
        this.defaultStyles = {
            'font-family': 'sans-serif',
            primaryColor: '#b10438',
            secondaryColor: '#009688',
            defaultTextColor: '#5e5e5e',
            strongTextColor: '#4a4a4a',
            lightTextColor: '#9a9a9a'
        };
        this.customStyles = {};
    }
    GeneralStylesProvider.prototype.setupCustomStyles = function (customStyles) {
        this.customStyles = customStyles;
    };
    Object.defineProperty(GeneralStylesProvider.prototype, "styles", {
        get: function () {
            return __assign({}, this.defaultStyles, this.customStyles);
        },
        enumerable: true,
        configurable: true
    });
    return GeneralStylesProvider;
}());
var stylesProvider = new GeneralStylesProvider();
exports.default = stylesProvider;
function setupCustomStyles(customStyles) {
    stylesProvider.setupCustomStyles(customStyles);
}
exports.setupCustomStyles = setupCustomStyles;
//# sourceMappingURL=generalStylesProvider.js.map