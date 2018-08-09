import { ViewStylesType, BaseComponentsStylesType } from "./stylesType";

export function mergeStyles<SpecificComponentStylesType>(
  styles: ViewStylesType<SpecificComponentStylesType>,
  baseComponent: keyof BaseComponentsStylesType,
  specificComponent: keyof SpecificComponentStylesType
) {
  const baseStyles = styles.baseComponents[baseComponent];
  const specificStyles = styles.specificComponents[specificComponent];

  return [baseStyles, specificStyles].join(" ");
}
