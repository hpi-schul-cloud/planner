import {
  ExpansionPanel,
  Select,
  Tabs,
  Headline,
  Button
} from './materialComponents';
import { setupComponentMap } from '../src/components/provider/componentProvider';

export const setupMaterialComponents = () => {
  setupComponentMap({
    expansionPanel: ExpansionPanel,
    select: Select,
    tabs: Tabs,
    headline: Headline,
    button: Button
  });
};

export const resetCustomComponents = () => {
  setupComponentMap({});
};
