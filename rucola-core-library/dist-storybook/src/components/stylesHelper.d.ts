import { ViewStylesType, BaseComponentsStylesType } from "./stylesType";
export declare function mergeStyles<SpecificComponentStylesType>(styles: ViewStylesType<SpecificComponentStylesType>, baseComponent: keyof BaseComponentsStylesType, specificComponent: keyof SpecificComponentStylesType): string;
