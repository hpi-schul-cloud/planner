import React from 'react';
import BaseButton from '../base/Button';
import BaseExpansionPanel from '../base/ExpansionPanel';
import BaseSelect from '../base/Select';
type ComponentType<Props> = React.SFC<Props> | React.ComponentClass<Props>;

type ButtonPropsType = {
  onClick: () => void;
  text: string;
};
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

type ComponentMapType = {
  expansionPanel: ComponentType<ExpansionPanelPropsType>;
  select: ComponentType<SelectPropsType>;
};
let componentMap: ComponentMapType = {
  expansionPanel: BaseExpansionPanel,
  select: BaseSelect
};

export function setupComponentMap(customComponents: Partial<ComponentMapType>) {
  componentMap = {
    ...componentMap,
    ...customComponents
  };
}

export const ExpansionPanel = componentMap.expansionPanel;
export const Select = componentMap.select;
