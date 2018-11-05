"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ExpansionPanel_1 = __importDefault(require("../base/ExpansionPanel"));
var Select_1 = __importDefault(require("../base/Select"));
var Tabs_1 = __importDefault(require("../base/Tabs"));
var Label_1 = __importDefault(require("../base/Label"));
var Button_1 = __importDefault(require("../base/Button"));
var IconButton_1 = __importDefault(require("../base/IconButton"));
var Text_1 = __importDefault(require("../base/Text"));
var TextField_1 = __importDefault(require("../base/TextField"));
var TextFieldTable_1 = __importDefault(require("../base/TextFieldTable"));
var TextArea_1 = __importDefault(require("../base/TextArea"));
var Chip_1 = __importDefault(require("../base/Chip"));
var SelectorInput_1 = __importDefault(require("../base/SelectorInput"));
var TopicElement_1 = __importDefault(require("../base/TopicElement"));
var ComponentProvider = (function () {
    function ComponentProvider() {
        this.defaultComponentMap = {
            expansionPanel: ExpansionPanel_1.default,
            select: Select_1.default,
            tabs: Tabs_1.default,
            label: Label_1.default,
            button: Button_1.default,
            iconButton: IconButton_1.default,
            text: Text_1.default,
            textField: TextField_1.default,
            textFieldTable: TextFieldTable_1.default,
            textArea: TextArea_1.default,
            chip: Chip_1.default,
            selectorInput: SelectorInput_1.default,
            topicElement: TopicElement_1.default
        };
        this.customComponentMap = {};
    }
    ComponentProvider.prototype.setupComponentMap = function (customComponents) {
        this.customComponentMap = customComponents;
    };
    ComponentProvider.prototype.getElement = function (id) {
        return this.customComponentMap[id] || this.defaultComponentMap[id];
    };
    Object.defineProperty(ComponentProvider.prototype, "ExpansionPanel", {
        get: function () {
            return this.getElement('expansionPanel');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentProvider.prototype, "Select", {
        get: function () {
            return this.getElement('select');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentProvider.prototype, "Tabs", {
        get: function () {
            return this.getElement('tabs');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentProvider.prototype, "Label", {
        get: function () {
            return this.getElement('label');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentProvider.prototype, "Button", {
        get: function () {
            return this.getElement('button');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentProvider.prototype, "IconButton", {
        get: function () {
            return this.getElement('iconButton');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentProvider.prototype, "Text", {
        get: function () {
            return this.getElement('text');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentProvider.prototype, "TextField", {
        get: function () {
            return this.getElement('textField');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentProvider.prototype, "TextFieldTable", {
        get: function () {
            return this.getElement('textFieldTable');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentProvider.prototype, "TextArea", {
        get: function () {
            return this.getElement('textArea');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentProvider.prototype, "Chip", {
        get: function () {
            return this.getElement('chip');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentProvider.prototype, "SelectorInput", {
        get: function () {
            return this.getElement('selectorInput');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentProvider.prototype, "TopicElement", {
        get: function () {
            return this.getElement('topicElement');
        },
        enumerable: true,
        configurable: true
    });
    return ComponentProvider;
}());
var componentProvider = new ComponentProvider();
exports.default = componentProvider;
function setupComponentMap(customComponents) {
    componentProvider.setupComponentMap(customComponents);
}
exports.setupComponentMap = setupComponentMap;
//# sourceMappingURL=componentProvider.js.map