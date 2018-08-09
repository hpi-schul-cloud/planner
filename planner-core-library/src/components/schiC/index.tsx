import React from "react";
import StyleProvider from "../styleProvider";
import SchicView, { PropsType as SchicViewPropsType } from "./SchicView";
import { ComponentStylesType, ComponentStylesInputType } from "./stylesType";
import { defaultSpecificStyle } from "./defaultSpecificStyle";
import { ViewStylesInputType, ViewStylesType } from "../stylesType";

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type PropsType = Omit<SchicViewPropsType, "styles"> & {
  styles?: ViewStylesInputType<ComponentStylesInputType>;
};

function SchicViewWithStyles(props: PropsType) {
  const { styles, ...otherProps } = props;

  return (
    <StyleProvider
      inputStyles={styles}
      specificComponentDefaultStyles={defaultSpecificStyle}
    >
      {(styles: ViewStylesType<ComponentStylesType>) => (
        <SchicView styles={styles} {...otherProps} />
      )}
    </StyleProvider>
  );
}

export default SchicViewWithStyles;
