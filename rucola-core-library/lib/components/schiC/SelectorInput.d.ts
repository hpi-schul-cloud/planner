import { ViewStylesType } from "../stylesType";
import { ComponentStylesType } from "./stylesType";
export declare type ItemType = {
    optionIndex: number;
    value: string;
};
interface PropsType {
    options: string[];
    items: ItemType[];
    onChange: (value: ItemType[]) => void;
    styles: ViewStylesType<ComponentStylesType>;
}
declare function SelectorInput(props: PropsType): JSX.Element;
export default SelectorInput;
