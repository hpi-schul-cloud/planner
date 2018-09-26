import { EventType } from '../types';
import { getDayDifference, dayIsGreaterThan, getDayCount } from './timeHelper';

const DAY = 1000 * 60 * 60 * 24;
type EventTypesType = 'HOLIDAY' | 'OTHER' | 'WEEKEND';
type StringMapType = {
  [index: number]: string;
};

const determineEndIndex = ({
  topicEndDate,
  rowStartDate,
  rowEndDate,
  rowDayCount,
  eventsMap
}: {
  topicEndDate: Date;
  rowStartDate: Date;
  rowEndDate: Date;
  rowDayCount: number;
  eventsMap: EventMapType;
}) => {
  if (dayIsGreaterThan(topicEndDate, rowEndDate)) {
    // End date of topic is later than the end date of the displayed row -> Topic goes beyond the dates of the displayed row
    let checkIndex = rowDayCount - 1;
    // If we come across a break event (holidays, other events), the weekend is excluded for the end index calculation
    // Otherwise we include the weekend, because we only look at a part of the event anyway
    let foundBreak = false;
    for (let i = checkIndex; checkIndex >= 0; i--) {
      if (eventsMap[i]) {
        if (foundBreak) checkIndex = i - 1;
        if (eventsMap[i].includes('WEEKEND')) continue;
        if (
          eventsMap[i].includes('HOLIDAY') ||
          eventsMap[i].includes('OTHER')
        ) {
          checkIndex = i - 1;
          foundBreak = true;
          continue;
        }
      } else {
        return checkIndex;
      }
    }

    return null;
  } else {
    let initialEndIndex = getDayDifference(rowStartDate, topicEndDate);
    // If there is a weekend or holidays, etc. we decrease the index
    for (let i = initialEndIndex; i >= 0; i--) {
      // If the eventsMap has a property at i, there is a weekend or holiday
      if (eventsMap[i]) continue;
      else return i;
    }
    return null;
  }
};

const determineStartIndex = ({
  topicStartDate,
  rowStartDate,
  rowDayCount,
  eventsMap
}: {
  topicStartDate: Date;
  rowStartDate: Date;
  rowDayCount: number;
  eventsMap: EventMapType;
}) => {
  // If start date of topic is smaller than start date of row, the index is set to zero
  let initialIndex =
    rowStartDate.getTime() <= topicStartDate.getTime()
      ? getDayDifference(rowStartDate, topicStartDate)
      : 0;
  for (let i = initialIndex; i < rowDayCount; i++) {
    // If there are events (like holidays/weekend/etc.) at index, we need to keep looking for a suitable start index
    if (eventsMap[i]) continue;
    else return i;
  }

  return null;
};

export const determineIndices = ({
  topicStartDate,
  topicEndDate,
  rowStartDate,
  rowEndDate,
  eventsMap
}: {
  topicStartDate: Date;
  topicEndDate: Date;
  rowStartDate: Date;
  rowEndDate: Date;
  eventsMap: EventMapType;
}) => {
  const rowDayCount = getDayCount(rowStartDate.getTime(), rowEndDate.getTime());
  const startIndex = determineStartIndex({
    topicStartDate,
    rowStartDate,
    rowDayCount,
    eventsMap
  });
  const endIndex = determineEndIndex({
    topicEndDate,
    rowStartDate,
    rowEndDate,
    rowDayCount,
    eventsMap
  });
  if (startIndex === null || endIndex === null) return null;

  return {
    startIndex,
    endIndex
  };
};

export type EventMapType = {
  [id: string]: (EventTypesType)[];
};
const addItemToEventTypeMap = (
  item: EventTypesType,
  map: EventMapType,
  index: number
) => {
  if (map[index]) {
    map[index].push(item);
  } else {
    map[index] = [item];
  }
};
export const getEventMaps = (
  holidayEvents: EventType,
  otherEvents: EventType,
  rowPeriod: {
    utcStartDate: number;
    utcEndDate: number;
  }
) => {
  const columnColorMap: StringMapType = {};
  const eventTypeMap: EventMapType = {};
  const utcStartDate = new Date(rowPeriod.utcStartDate);
  const deltaDays = getDayCount(rowPeriod.utcStartDate, rowPeriod.utcEndDate);
  const setupMapsForEvents = (
    events: EventType,
    columnColorMap: StringMapType,
    eventTypeMap: EventMapType,
    type: EventTypesType
  ) => {
    events.forEach(event => {
      const startIndex =
        utcStartDate.getTime() >= event.utcStartDate
          ? 0
          : getDayDifference(utcStartDate, new Date(event.utcStartDate));
      const endIndex = getDayDifference(
        utcStartDate,
        new Date(event.utcEndDate)
      );
      for (let i = startIndex; i <= endIndex && i < deltaDays; i++) {
        columnColorMap[i] = event.color || 'none';
        addItemToEventTypeMap(type, eventTypeMap, i);
      }
    });
  };

  setupMapsForEvents(holidayEvents, columnColorMap, eventTypeMap, 'HOLIDAY');
  setupMapsForEvents(otherEvents, columnColorMap, eventTypeMap, 'OTHER');

  for (let i = 0; i < deltaDays; i++) {
    const currentDay = new Date(utcStartDate.getTime() + i * DAY);
    const day = currentDay.getUTCDay();
    // Saturday or Sunday
    if (day === 0 || day === 6) {
      columnColorMap[i] = '#DFDFDF';
      addItemToEventTypeMap('WEEKEND', eventTypeMap, i);
    }
  }
  return {
    columnColorMap,
    eventTypeMap
  };
};
