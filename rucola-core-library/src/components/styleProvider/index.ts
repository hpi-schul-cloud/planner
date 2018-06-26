import React from "react";
import reduce from "lodash/reduce";
import {
  ViewStylesInputType,
  ViewStylesDefaultType,
  ViewStylesType,
  BaseComponentsStylesType
} from "../stylesType";
import {
  defaultGeneralStyle,
  defaultBaseComponentsStyle
} from "../defaultStyles";

type PropsType<
  SpecificComponentStylesInputType,
  SpecificComponentStylesDefaultType,
  SpecificComponentStylesType
> = {
  inputStyles?: ViewStylesInputType<SpecificComponentStylesInputType>;
  specificComponentDefaultStyles: SpecificComponentStylesDefaultType;
  children(styles: ViewStylesType<SpecificComponentStylesType>): JSX.Element;
};

function mergeStyles<
  SpecificComponentStylesInputType,
  SpecificComponentStylesDefaultType,
  SpecificComponentStylesType
>(
  defaultStyle: ViewStylesDefaultType<SpecificComponentStylesDefaultType>,
  inputStyle?: ViewStylesInputType<SpecificComponentStylesInputType>
): ViewStylesType<SpecificComponentStylesType> {
  const general = {
    ...defaultStyle.general,
    ...(inputStyle && inputStyle.general ? inputStyle.general : {})
  };
  const baseComponentFunctions = {
    ...defaultStyle.baseComponents,
    ...(inputStyle && inputStyle.baseComponents
      ? inputStyle.baseComponents
      : {})
  };
  const baseComponents = Object.keys(baseComponentFunctions).reduce<
    BaseComponentsStylesType
  >(
    (result, key) => {
      result[key] = baseComponentFunctions[key](general);
      return result;
    },
    {} as BaseComponentsStylesType
  );

  const specificComponentsFunctions = {
    // @ts-ignore - Typescript does not handle spread/rest types https://github.com/Microsoft/TypeScript/issues/10727
    ...defaultStyle.specificComponents,
    ...(inputStyle && inputStyle.specificComponents
      ? inputStyle.specificComponents
      : {})
  };
  const specificComponents = Object.keys(specificComponentsFunctions).reduce<
    SpecificComponentStylesType
  >(
    (result, key) => {
      result[key] = specificComponentsFunctions[key](general);
      return result;
    },
    {} as SpecificComponentStylesType
  );

  return {
    general,
    baseComponents,
    specificComponents
  };
}

function Provider<
  SpecificComponentStylesInputType,
  SpecificComponentStylesDefaultType,
  SpecificComponentStylesType
>(
  props: PropsType<
    SpecificComponentStylesInputType,
    SpecificComponentStylesDefaultType,
    SpecificComponentStylesType
  >
) {
  // @ts-ignore - Typescript does not handle spread/rest types https://github.com/Microsoft/TypeScript/issues/10727
  const { inputStyles, specificComponentDefaultStyles, children } = props;
  const defaultStyle: ViewStylesDefaultType<
    SpecificComponentStylesDefaultType
  > = {
    general: defaultGeneralStyle,
    baseComponents: defaultBaseComponentsStyle,
    specificComponents: specificComponentDefaultStyles
  };
  const mergedStyles: ViewStylesType<SpecificComponentStylesType> = mergeStyles(
    defaultStyle,
    inputStyles
  );

  return children(mergedStyles);
}

export default Provider;
