// Specific Component Styles Interface
// ########################################################
import { GeneralStylesType } from "../stylesType";

interface GenericSpecificComponentStylesType<ReturnType> {
  minusButton: ReturnType;
  plusButton: ReturnType;
}

export type ComponentStylesType = GenericSpecificComponentStylesType<string>;
export type ComponentStylesDefaultType = GenericSpecificComponentStylesType<
  (generalStyle: GeneralStylesType) => string
>;
export type ComponentStylesInputType = Partial<
  GenericSpecificComponentStylesType<
    (generalStyle: GeneralStylesType) => string
  >
>;
