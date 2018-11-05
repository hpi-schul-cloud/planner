declare type StringMapType = {
    [index: number]: string;
};
interface PropsType {
    children: JSX.Element | JSX.Element[];
    topChildren?: JSX.Element | JSX.Element[];
    className?: string;
    rasterCount: number;
    rasterSize: number;
    columnColorMap?: StringMapType;
    topLabelsMap?: StringMapType;
    bottomLabelsMap?: StringMapType;
    todayLineIndex?: number;
}
declare const TimeRasterWrapper: (props: PropsType) => JSX.Element;
export default TimeRasterWrapper;
