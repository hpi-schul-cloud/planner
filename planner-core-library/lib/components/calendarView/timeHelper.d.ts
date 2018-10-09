export declare function getDayDifference(first: Date, second: Date): number;
export declare function getWeekDifference(first: Date, second: Date, countIncompleteWeekAsOneWeek?: boolean): number;
export declare function getMonthAndYearString(date: Date): string;
export declare function getDayAndMonthString(date: Date): string;
export declare function dayIsSmallerOrEquals(date1: Date, date2: Date): boolean;
export declare function dayIsGreaterThan(date1: Date, date2: Date): boolean;
export declare const getDayCount: (utcStartDate: number, utcEndDate: number) => number;
