export declare type ItemType = {
    typeValue: string;
    timeValue: string;
    textValue: string;
};
interface PropsType {
    typeOptions: {
        text: string;
        value: string;
    }[];
    timeOptions: {
        text: string;
        value: string;
    }[];
    values: ItemType[];
    onChange: (values: ItemType[]) => void;
}
declare function SelectorInput(props: PropsType): JSX.Element;
export default SelectorInput;
