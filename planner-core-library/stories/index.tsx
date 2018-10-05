import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import {
  TopicTemplateView,
  TopicInstanceView
} from '../src/components/topicTemplateView';
import ComponentProvider from '../src/components/provider/componentProvider';
import TopicElement from '../src/components/classConfigurationView/TopicElement';
import RasterTopicElement from '../src/components/classConfigurationView/RasterTopicElement';
import ResizableRasterTopicElement from '../src/components/classConfigurationView/ResizableRasterTopicElement';
import InteractiveRasterRow from '../src/components/classConfigurationView/InteractiveRasterRow';
import InteractiveRasterUnit from '../src/components/classConfigurationView/InteractiveRasterUnit';
import RasterUnitContainer from '../src/components/classConfigurationView/RasterUnitContainer';
import ClassConfigurationView from '../src/components/classConfigurationView/ClassConfigurationView';
import YearlyCalendar from '../src/components/calendarView/YearlyCalendar';
import CalendarView from '../src/components/calendarView/CalendarView';
import TwoWeekCalendar from '../src/components/calendarView/TwoWeekCalendar';

import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  selectV2,
  text,
  color,
  object,
  number,
  select
} from '@storybook/addon-knobs';
import {
  getClassInstances,
  getTopicTemplates,
  getAllClassInstances,
  getAllTopicTemplates,
  getClassTopicsData
} from './storyHelpers';
import {
  setupMaterialComponents,
  resetCustomComponents
} from './componentHelper';

addDecorator(withKnobs);

storiesOf('Base/ExpansionPanel', module)
  .add('default', () => {
    resetCustomComponents();
    return (
      <ComponentProvider.ExpansionPanel caption={text('Caption', 'Test')}>
        Haaaallo!
      </ComponentProvider.ExpansionPanel>
    );
  })
  .add('with material design', () => {
    setupMaterialComponents();
    return (
      <ComponentProvider.ExpansionPanel caption={text('Caption', 'Test')}>
        Haaaallo!
      </ComponentProvider.ExpansionPanel>
    );
  });

storiesOf('Base/Tabs', module)
  .add('default', () => {
    resetCustomComponents();

    return (
      <ComponentProvider.Tabs
        selected={text('Id', '')}
        items={object('items', [
          { id: 'biology', text: 'Biologie', color: '#58C853' },
          { id: 'chemistry', text: 'Chemie', color: '#DBC192' },
          { id: 'german', text: 'Deutsch', color: '#DB9292' }
        ])}
        onChange={action('onChange')}
      />
    );
  })
  .add('with material design', () => {
    setupMaterialComponents();

    return (
      <ComponentProvider.Tabs
        selected={text('Id', '')}
        items={object('items', [
          { id: 'biology', text: 'Biologie', color: '#58C853' },
          { id: 'chemistry', text: 'Chemie', color: '#DBC192' },
          { id: 'german', text: 'Deutsch', color: '#DB9292' }
        ])}
        onChange={action('onChange')}
      />
    );
  });

storiesOf('Base/TextField', module)
  .add('default', () => {
    resetCustomComponents();
    return (
      <ComponentProvider.TextField
        label={text('Label', 'Test')}
        placeHolderText={text('Placeholder', 'Placeholder')}
        value={text('Value', 'Hallo')}
        onChange={action('onChange')}
      />
    );
  })
  .add('with material design', () => {
    setupMaterialComponents();
    return (
      <ComponentProvider.TextField
        label={text('Label', 'Test')}
        placeHolderText={text('Placeholder', 'Placeholder')}
        value={text('Value', 'Hallo')}
        onChange={action('onChange')}
      />
    );
  });

storiesOf('Base/TextArea', module)
  .add('default', () => {
    resetCustomComponents();
    return (
      <ComponentProvider.TextArea
        label={text('Label', 'Test')}
        placeHolderText={text('Placeholder', 'Placeholder')}
        value={text('Value', 'Hallo')}
        onChange={action('onChange')}
      />
    );
  })
  .add('with material design', () => {
    setupMaterialComponents();
    return (
      <ComponentProvider.TextArea
        label={text('Label', 'Test')}
        placeHolderText={text('Placeholder', 'Placeholder')}
        value={text('Value', 'Hallo')}
        onChange={action('onChange')}
      />
    );
  });

storiesOf('Base/TextFieldTable', module)
  .add('default', () => {
    resetCustomComponents();
    return (
      <ComponentProvider.TextFieldTable
        rows={object('Rows', [
          { caption: 'W1 - 1. Einheit', value: 'Einführung Thema' },
          { caption: 'W1 - 2. Einheit', value: 'Weiterführung Thema' },
          { caption: 'W2 - 1. Einheit', value: 'Kontrolle' }
        ])}
        onChange={action('onChange')}
      />
    );
  })
  .add('with material design', () => {
    setupMaterialComponents();
    return (
      <ComponentProvider.TextFieldTable
        rows={object('Rows', [
          { caption: 'W1 - 1. Einheit', value: 'Einführung Thema' },
          { caption: 'W1 - 2. Einheit', value: 'Weiterführung Thema' },
          { caption: 'W2 - 1. Einheit', value: 'Kontrolle' }
        ])}
        onChange={action('onChange')}
      />
    );
  });

storiesOf('Base/Chip', module)
  .add('default', () => {
    resetCustomComponents();
    return (
      <ComponentProvider.Chip
        firstLabel={text('First Label', 'Stufe E')}
        secondLabel={text(
          'Second Label',
          'Kennzeichen der Fortpflanzung sowie Stadien der Entwicklung von Organismen beschreiben'
        )}
        onDeleteClick={action('onDeleteClick')}
      />
    );
  })
  .add('with material design', () => {
    setupMaterialComponents();
    return (
      <ComponentProvider.Chip
        firstLabel={text('First Label', 'Stufe E')}
        secondLabel={text(
          'Second Label',
          'Kennzeichen der Fortpflanzung sowie Stadien der Entwicklung von Organismen beschreiben'
        )}
        onDeleteClick={action('onDeleteClick')}
      />
    );
  });

storiesOf('Base/SelectorInput', module)
  .add('default', () => {
    resetCustomComponents();
    return (
      <ComponentProvider.SelectorInput
        typeOptions={object('Type Options', [
          { text: 'Mündlich', value: 'spoken' },
          { text: 'Schriftlich', value: 'written' }
        ])}
        timeOptions={object('Time Options', [
          { text: '1. Woche', value: '1w' },
          { text: '2.Woche', value: '2w' }
        ])}
        values={object('Values', [
          { typeValue: 'spoken', timeValue: '1w', textValue: 'Test' }
        ])}
        onChange={action('onChange')}
      />
    );
  })
  .add('with material design', () => {
    setupMaterialComponents();
    return (
      <ComponentProvider.SelectorInput
        typeOptions={object('Type Options', [
          { text: 'Mündlich', value: 'spoken' },
          { text: 'Schriftlich', value: 'written' }
        ])}
        timeOptions={object('Time Options', [
          { text: '1. Woche', value: '1w' },
          { text: '2.Woche', value: '2w' }
        ])}
        values={object('Values', [
          { typeValue: 'spoken', timeValue: '1w', textValue: 'Test' }
        ])}
        onChange={action('onChange')}
      />
    );
  });

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
storiesOf('CalendarView/TwoWeekCalendar', module)
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

storiesOf('CalendarView/YearlyCalendar', module)
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

storiesOf('CalendarView/CalendarView', module)
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

storiesOf('CreateTemplate/TopicTemplateView', module)
  .add('default', () => {
    resetCustomComponents();

    return (
      <TopicTemplateView
        onCreate={action('onCreate')}
        onSave={action('onSave')}
        onDelete={action('onDelete')}
        mode={selectV2('Mode', { new: 'NEW', edit: 'EDIT' }, 'NEW')}
        id={text('ID', '1')}
      />
    );
  })
  .add('with Material Design', () => {
    setupMaterialComponents();

    return (
      <TopicTemplateView
        onCreate={action('onCreate')}
        onSave={action('onSave')}
        onDelete={action('onDelete')}
        mode={selectV2('Mode', { new: 'NEW', edit: 'EDIT' }, 'NEW')}
        id={text('ID', '1')}
      />
    );
  });

storiesOf('EditInstace/TopicInstanceView', module)
  .add('default', () => {
    resetCustomComponents();

    return (
      <TopicInstanceView
        onSave={action('onSave')}
        onDelete={action('onDelete')}
        initialValues={object('Initial Values', {
          subject: 'Biologie',
          classLevel: 'Klasse 8a'
        })}
        id={text('ID', '1')}
      />
    );
  })
  .add('with Material Design', () => {
    setupMaterialComponents();

    return (
      <TopicInstanceView
        onSave={action('onSave')}
        onDelete={action('onDelete')}
        initialValues={object('Initial Values', {
          subject: 'Biologie',
          classLevel: 'Klasse 8a'
        })}
        id={text('ID', '1')}
      />
    );
  });

storiesOf('MyClass/TopicElement', module).add('with all values', () => (
  <TopicElement
    onClick={action('onClick')}
    text={text('Text', 'Evolution')}
    color={color('Color', '#92DB92')}
    size={select(
      'Size',
      { small: 'small', medium: 'medium', large: 'large' },
      'small'
    )}
    width={number('Width', 100)}
  />
));

storiesOf('MyClass/RasterTopicElement', module).add('with small size', () => (
  <RasterTopicElement
    id={text('Id', '1')}
    rasterSize={number('Raster Size', 15)}
    startIndex={number('Start Index', 0)}
    endIndex={number('End Index', 4)}
    onClick={action('onClick')}
    text={text('Text', 'Evolution')}
    color={color('Color', '#92DB92')}
    size={select(
      'Size',
      { small: 'small', medium: 'medium', large: 'large' },
      'small'
    )}
  />
));

storiesOf('MyClass/ResizableRasterTopicElement', module).add(
  'with small size',
  () => (
    <ResizableRasterTopicElement
      id={text('Id', '1')}
      index={1}
      type={''}
      onChangeSizeLeft={action('onChangeSizeLeft')}
      onChangeSizeRight={action('onChangeSizeRight')}
      rasterSize={number('Raster Size', 15)}
      startIndex={number('Start Index', 0)}
      endIndex={number('End Index', 4)}
      text={text('Text', 'Evolution')}
      color={color('Color', '#92DB92')}
      onElementDidNotDrop={action('onElementDidNotDrop')}
    />
  )
);

storiesOf('MyClass/InteractiveRasterRow', module).add('with small size', () => {
  const topicElements = [
    {
      id: '1',
      text: 'Evolution',
      color: '#92DB92',
      startIndex: 0,
      endIndex: 5
    },
    {
      id: '2',
      text: 'Blub',
      color: '#92DB92',
      startIndex: 7,
      endIndex: 9
    }
  ];
  return (
    <InteractiveRasterRow
      topicElements={object('Topic Elements', topicElements)}
      rasterCount={number('Raster Count', 30)}
      rasterSize={number('Raster Size', 20)}
      rowId={text('RowId', '1')}
      classLevelId={text('ClassLevelId', '1')}
      updateElements={topics => console.log(topics)}
      softRelocateTopicElement={() => {}}
      softInsertTopicElement={() => {}}
      onElementDidNotDrop={() => {}}
      onElementDidDrop={() => {}}
    />
  );
});

storiesOf('MyClass/InteractiveRasterUnit', module).add('default', () => {
  return (
    <InteractiveRasterUnit
      topicTemplates={getTopicTemplates()}
      classInstances={getClassInstances(8)}
      classLevelId={text('ClassLevelId', '1')}
      updateClassInstances={classInstaces => console.log(classInstaces)}
      rasterCount={number('Raster Count', 30)}
      rasterSize={number('Raster Size', 20)}
    />
  );
});

storiesOf('MyClass/RasterUnitContainer', module).add('default', () => {
  return (
    <RasterUnitContainer
      topicTemplates={getTopicTemplates()}
      classInstances={getClassInstances(8)}
      rasterCount={number('Raster Count', 30)}
      rasterSize={number('Raster Size', 20)}
      classLevelId={text('ClassLevelId', '1')}
      schoolYear={object('School Year', schoolYear)}
      eventData={[...holidaysData, ...eventsData]}
      onAddTemplateClick={action('onAddTemplateClick')}
      onUpdate={action('onUpdate')}
    />
  );
});

storiesOf('MyClass/ClassConfigurationView', module)
  .add('default', () => {
    resetCustomComponents();

    return (
      <ClassConfigurationView
        allClassTopics={getAllClassInstances()}
        allTopicTemplates={getAllTopicTemplates()}
        schoolYear={object('School Year', schoolYear)}
        eventData={[...holidaysData, ...eventsData]}
        onAddTemplate={action('onAddTemplate')}
        onSaveClassInstances={action('onSaveClassInstances')}
      />
    );
  })
  .add('with material design', () => {
    setupMaterialComponents();

    return (
      <ClassConfigurationView
        allClassTopics={getAllClassInstances()}
        allTopicTemplates={getAllTopicTemplates()}
        schoolYear={object('School Year', schoolYear)}
        eventData={[...holidaysData, ...eventsData]}
        onAddTemplate={action('onAddTemplate')}
        onSaveClassInstances={action('onSaveClassInstances')}
      />
    );
  });
