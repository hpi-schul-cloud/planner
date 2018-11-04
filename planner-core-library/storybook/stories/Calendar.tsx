import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, object, number } from '@storybook/addon-knobs';
import { CalendarView } from '../../src/components/views';
import YearlyCalendar from '../../src/components/views/calendar/YearlyCalendar';
import TwoWeekCalendar from '../../src/components/views/calendar/TwoWeekCalendar';

import { getClassTopicsData } from '../storyHelpers';
import {
  setupMaterialComponents,
  resetCustomComponents
} from '../componentHelper';

addDecorator(withKnobs);

const schoolYear = {
  utcStartDate: 1534723200000, // (20.08.2018) Erster Schultag Brandenburg
  utcEndDate: 1560902400000 // (19.06.2019) Letzer Schultag Brandenburg
};
const classTopicsData = getClassTopicsData(schoolYear.utcStartDate);
const holidaysData = [
  {
    name: 'Herbstferien',
    color: '#FBFFCF',
    utcStartDate: 1540166400000,
    utcEndDate: 1541116800000
  },
  {
    name: 'Weihnachtsferien',
    color: '#FBFFCF',
    utcStartDate: 1545436800000,
    utcEndDate: 1546646400000
  }
];
const eventsData = [
  {
    name: 'Projektwoche',
    color: '#e9e8e8',
    utcStartDate: 1548633600000,
    utcEndDate: 1548979200000
  }
];
const today = new Date();
const utcToday = Date.UTC(
  today.getFullYear(),
  today.getMonth(),
  today.getDate()
);

storiesOf('Calendar/TwoWeekCalendar', module)
  .add('default', () => {
    resetCustomComponents();
    return (
      <TwoWeekCalendar
        rasterSize={55}
        classTopicsData={object('Class Topics Data', classTopicsData)}
        holidaysData={object('Holidays Data', holidaysData)}
        otherEventsData={object('Other Events Data', eventsData)}
        utcToday={number('Today', utcToday)}
        onTopicInstanceClick={action('onTopicInstanceClick')}
      />
    );
  })
  .add('with Material Design', () => {
    setupMaterialComponents();
    return (
      <TwoWeekCalendar
        rasterSize={55}
        classTopicsData={object('Class Topics Data', classTopicsData)}
        holidaysData={object('Holidays Data', holidaysData)}
        otherEventsData={object('Other Events Data', eventsData)}
        utcToday={number('Today', utcToday)}
        onTopicInstanceClick={action('onTopicInstanceClick')}
      />
    );
  });

storiesOf('Calendar/YearlyCalendar', module)
  .add('default', () => {
    resetCustomComponents();
    return (
      <YearlyCalendar
        classTopicsData={object('Class Topics Data', classTopicsData)}
        holidaysData={object('Holidays Data', holidaysData)}
        otherEventsData={object('Other Events Data', eventsData)}
        utcToday={number('Today', utcToday)}
        onTopicInstanceClick={action('onTopicInstanceClick')}
      />
    );
  })
  .add('with Material Design', () => {
    setupMaterialComponents();
    return (
      <YearlyCalendar
        classTopicsData={object('Class Topics Data', classTopicsData)}
        holidaysData={object('Holidays Data', holidaysData)}
        otherEventsData={object('Other Events Data', eventsData)}
        utcToday={number('Today', utcToday)}
        onTopicInstanceClick={action('onTopicInstanceClick')}
      />
    );
  });

storiesOf('Calendar', module)
  .add('default', () => {
    resetCustomComponents();
    return (
      <CalendarView
        schoolYear={object('School Year', schoolYear)}
        classTopicsData={object('Class Topics Data', classTopicsData)}
        holidaysData={object('Holidays Data', holidaysData)}
        otherEventsData={object('Other Events Data', eventsData)}
        utcToday={number('Today', utcToday)}
        onTopicInstanceClick={action('onTopicInstanceClick')}
      />
    );
  })
  .add('with Material Design', () => {
    setupMaterialComponents();
    return (
      <CalendarView
        schoolYear={object('School Year', schoolYear)}
        classTopicsData={object('Class Topics Data', classTopicsData)}
        holidaysData={object('Holidays Data', holidaysData)}
        otherEventsData={object('Other Events Data', eventsData)}
        utcToday={number('Today', utcToday)}
        onTopicInstanceClick={action('onTopicInstanceClick')}
      />
    );
  });
