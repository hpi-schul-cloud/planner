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
var componentProvider_1 = __importDefault(require("../../provider/componentProvider"));
var StyledChipsContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n"])));
var StyledChipContainer = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-bottom: 4px;\n  max-width: 100%;\n"], ["\n  margin-bottom: 4px;\n  max-width: 100%;\n"])));
var CompetenceChips = (function (_super) {
    __extends(CompetenceChips, _super);
    function CompetenceChips() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.deleteCompetence = function (index) {
            _this.props.onChange(_this.props.competences.slice(0, index).concat(_this.props.competences.slice(index + 1)));
        };
        _this.addCompetence = function () {
            _this.props.onChange(_this.props.competences.concat([
                {
                    id: 'new',
                    level: 'Stufe E',
                    text: 'Diagramme mit zwei Variablen beschreiben und aus ihnen Daten entnehmen'
                }
            ]));
        };
        return _this;
    }
    CompetenceChips.prototype.render = function () {
        var _this = this;
        var _a = this.props, caption = _a.caption, competences = _a.competences;
        return (react_1.default.createElement(StyledChipsContainer, null,
            react_1.default.createElement(componentProvider_1.default.Label, { caption: caption, type: "small" }),
            competences.map(function (competence, index) { return (react_1.default.createElement(StyledChipContainer, null,
                react_1.default.createElement(componentProvider_1.default.Chip, { key: index, firstLabel: competence.level, secondLabel: competence.text, onDeleteClick: function () { return _this.deleteCompetence(index); } }))); }),
            react_1.default.createElement(componentProvider_1.default.IconButton, { onClick: this.addCompetence, iconType: "ADD" })));
    };
    return CompetenceChips;
}(react_1.Component));
exports.default = CompetenceChips;
var templateObject_1, templateObject_2;
//# sourceMappingURL=CompetenceChips.js.map