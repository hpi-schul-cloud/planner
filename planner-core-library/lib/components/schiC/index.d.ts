import { PropsType as SchicViewPropsType } from "./SchicView";
import { ComponentStylesInputType } from "./stylesType";
import { ViewStylesInputType } from "../stylesType";
declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
declare type PropsType = Omit<SchicViewPropsType, "styles"> & {
    styles?: ViewStylesInputType<ComponentStylesInputType>;
};
declare function SchicViewWithStyles(props: PropsType): JSX.Element;
export default SchicViewWithStyles;
