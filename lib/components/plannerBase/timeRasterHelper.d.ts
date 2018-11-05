export declare const generateDayLabelMap: (utcStartDate: number, utcEndDate: number) => {};
export declare const generateMonthLabelMap: (utcStartDate: number, utcEndDate: number) => {};
export declare const generateWeeklyColorMap: (events: {
    name: string;
    color?: string | undefined;
    utcStartDate: number;
    utcEndDate: number;
}[], utcStartDate: number) => {};
