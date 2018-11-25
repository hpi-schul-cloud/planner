import BaseExpansionPanel from '../base/ExpansionPanel';
import BaseSelect from '../base/Select';
import BaseTabs from '../base/Tabs';
import BaseLabel from '../base/Label';
import BaseButton from '../base/Button';
import BaseIconButton from '../base/IconButton';
import BaseText from '../base/Text';
import BaseTextField from '../base/TextField';
import BaseTextFieldTable from '../base/TextFieldTable';
import BaseTextArea from '../base/TextArea';
import BaseSelectorInput from '../base/SelectorInput';
import BaseTopicElement from '../base/TopicElement';
var ComponentProvider = (function () {
    function ComponentProvider() {
        this.defaultComponentMap = {
            expansionPanel: BaseExpansionPanel,
            select: BaseSelect,
            tabs: BaseTabs,
            label: BaseLabel,
            button: BaseButton,
            iconButton: BaseIconButton,
            text: BaseText,
            textField: BaseTextField,
            textFieldTable: BaseTextFieldTable,
            textArea: BaseTextArea,
            selectorInput: BaseSelectorInput,
            topicElement: BaseTopicElement
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
export default componentProvider;
export function setupComponentMap(customComponents) {
    componentProvider.setupComponentMap(customComponents);
}
//# sourceMappingURL=componentProvider.js.map