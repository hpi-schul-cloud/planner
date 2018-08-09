import { ViewStylesInputType, ViewStylesType } from "../stylesType";
declare type PropsType<SpecificComponentStylesInputType, SpecificComponentStylesDefaultType, SpecificComponentStylesType> = {
    inputStyles?: ViewStylesInputType<SpecificComponentStylesInputType>;
    specificComponentDefaultStyles: SpecificComponentStylesDefaultType;
    children(styles: ViewStylesType<SpecificComponentStylesType>): JSX.Element;
};
declare function Provider<SpecificComponentStylesInputType, SpecificComponentStylesDefaultType, SpecificComponentStylesType>(props: PropsType<SpecificComponentStylesInputType, SpecificComponentStylesDefaultType, SpecificComponentStylesType>): JSX.Element;
export default Provider;
