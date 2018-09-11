import React from 'react';
import BaseExpansionPanel from '../base/ExpansionPanel';
import BaseSelect from '../base/Select';
import BaseTabs from '../base/RadioButtons';
import BaseHeadline from '../base/Headline';

type ComponentType<Props> = React.SFC<Props> | React.ComponentClass<Props>;

type ExpansionPanelPropsType = {
  className?: string;
  children: string | JSX.Element | JSX.Element[];
  caption?: string;
};
type SelectPropsType = {
  initialValue: string;
  values: {
    value: string;
    text: string;
  }[];
  onChange: (event: React.FormEvent<HTMLSelectElement>) => void;
};
type TabsPropsType = {
  selected?: string;
  items: {
    id: string;
    text: string;
    color: string;
  }[];
  onChange: (id: string) => void;
};
type HeadlinePropsType = {
  caption: string;
};

type ComponentMapType = {
  expansionPanel: ComponentType<ExpansionPanelPropsType>;
  select: ComponentType<SelectPropsType>;
  tabs: ComponentType<TabsPropsType>;
  headline: ComponentType<HeadlinePropsType>;
};

class ComponentProvider {
  defaultComponentMap: ComponentMapType = {
    expansionPanel: BaseExpansionPanel,
    select: BaseSelect,
    tabs: BaseTabs,
    headline: BaseHeadline
  };
  customComponentMap: Partial<ComponentMapType> = {};

  setupComponentMap(customComponents: Partial<ComponentMapType>) {
    this.customComponentMap = customComponents;
  }

  getElement(id: keyof ComponentMapType) {
    return this.customComponentMap[id] || this.defaultComponentMap[id];
  }

  get ExpansionPanel() {
    return this.getElement('expansionPanel');
  }

  get Select() {
    return this.getElement('select');
  }

  get Tabs() {
    return this.getElement('tabs');
  }

  get Headline() {
    return this.getElement('headline');
  }
}

const componentProvider = new ComponentProvider();

export default componentProvider;

export function setupComponentMap(customComponents: Partial<ComponentMapType>) {
  componentProvider.setupComponentMap(customComponents);
}
