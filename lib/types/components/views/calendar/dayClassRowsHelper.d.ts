declare type EventTypesType = 'HOLIDAY' | 'OTHER' | 'WEEKEND';
declare type StringMapType = {
    [index: number]: string;
};
export declare const determineIndices: ({ topicStartDate, topicEndDate, rowStartDate, rowEndDate, eventsMap }: {
    topicStartDate: Date;
    topicEndDate: Date;
    rowStartDate: Date;
    rowEndDate: Date;
    eventsMap: EventMapType;
}) => {
    startIndex: number;
    endIndex: number;
} | null;
export declare type EventMapType = {
    [id: string]: (EventTypesType)[];
};
export declare const getEventMaps: (holidayEvents: {
    name: string;
    color?: string | undefined;
    utcStartDate: number;
    utcEndDate: number;
}[], otherEvents: {
    name: string;
    color?: string | undefined;
    utcStartDate: number;
    utcEndDate: number;
}[], rowPeriod: {
    utcStartDate: number;
    utcEndDate: number;
}) => {
    columnColorMap: StringMapType;
    eventTypeMap: EventMapType;
    eventArray: {
        startIndex: number;
        endIndex: number;
        name: string;
    }[];
};
export {};
