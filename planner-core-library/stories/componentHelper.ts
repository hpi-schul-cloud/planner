import {
  ExpansionPanel,
  Select,
  Tabs,
  Headline,
  Button,
  TextField,
  TextArea,
  Chip
} from './materialComponents';
import { setupComponentMap } from '../src/components/provider/componentProvider';
import { setupCustomStyles } from '../src/components/provider/generalStylesProvider';

export const setupMaterialComponents = () => {
  setupComponentMap({
    expansionPanel: ExpansionPanel,
    select: Select,
    tabs: Tabs,
    headline: Headline,
    button: Button,
    textField: TextField,
    textArea: TextArea,
    chip: Chip
  });
  setupCustomStyles({
    'font-family': 'Roboto, Helvetica, Arial, sans-serif',
    strongTextColor: 'rgba(0, 0, 0, 0.95)',
    defaultTextColor: 'rgba(0, 0, 0, 0.87)',
    lightTextColor: 'rgba(0, 0, 0, 0.54)'
  });
};

export const resetCustomComponents = () => {
  setupComponentMap({});
};
