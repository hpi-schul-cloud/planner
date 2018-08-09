// General View Style Interface
// ########################################################
// It consists of
//    general (for every view) -> e.g. primaryColor, font-family
//    baseComponents (for every view) -> input, textarea
//    specificComponents (for single view) -> topicInput, contentTextarea
// Type for complete ViewStyle handed to View component
export interface ViewStylesType<SpecificComponentStylesType> {
  general: GeneralStylesType;
  baseComponents: BaseComponentsStylesType;
  specificComponents: SpecificComponentStylesType;
}

// Type for input styles handed to context from user. Thus, styles can be incomplete
// and are combined with the default styles to end up being a ViewStylesType
export interface ViewStylesInputType<SpecificComponentStylesInputType> {
  general: GeneralStylesInputType;
  baseComponents: BaseComponentsStylesInputType;
  specificComponents: SpecificComponentStylesInputType;
}

// Type for default styles.
export interface ViewStylesDefaultType<SpecificComponentStylesDefaultType> {
  general: GeneralStylesType;
  baseComponents: BaseComponentsStylesDefaultType;
  specificComponents: SpecificComponentStylesDefaultType;
}

// General Styles Interface
// ########################################################
interface GenericGeneralStylesType {
  "font-family": string;
  textColor: string;
  primaryColor: string;
  secondaryColor: string;
  strongerTextColor: string;
  lighterTextColor: string;
}

export type GeneralStylesType = GenericGeneralStylesType;
export type GeneralStylesInputType = Partial<GenericGeneralStylesType>;

// Base Component Styles Interface
// ########################################################
interface GenericBaseComponentsStylesType<ReturnType> {
  button: ReturnType;
  input: ReturnType;
  textarea: ReturnType;
  select: ReturnType;
  label: ReturnType;
}

export type BaseComponentsStylesType = GenericBaseComponentsStylesType<string>;
export type BaseComponentsStylesDefaultType = GenericBaseComponentsStylesType<
  (generalStyle: GeneralStylesType) => string
>;
export type BaseComponentsStylesInputType = Partial<
  GenericBaseComponentsStylesType<(generalStyle: GeneralStylesType) => string>
>;
