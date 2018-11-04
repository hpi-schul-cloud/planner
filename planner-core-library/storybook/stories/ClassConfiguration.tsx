import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { ClassConfigurationView } from '../../src/components/views';
import TopicElement from '../../src/components/views/classConfiguration/TopicElement';
import RasterTopicElement from '../../src/components/plannerBase/RasterTopicElement';
import ResizableRasterTopicElement from '../../src/components/views/classConfiguration/ResizableRasterTopicElement';
import InteractiveRasterRow from '../../src/components/views/classConfiguration/InteractiveRasterRow';
import InteractiveRasterUnit from '../../src/components/views/classConfiguration/InteractiveRasterUnit';
import RasterUnitContainer from '../../src/components/views/classConfiguration/RasterUnitContainer';

import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  select,
  text,
  color,
  object,
  number
} from '@storybook/addon-knobs';
import {
  getClassInstances,
  getTopicTemplates,
  getAllClassInstances,
  getAllTopicTemplates
} from '../storyHelpers';
import {
  setupMaterialComponents,
  resetCustomComponents
} from '../componentHelper';

addDecorator(withKnobs);

const schoolYear = {
  utcStartDate: 1534723200000, // (20.08.2018) Erster Schultag Brandenburg
  utcEndDate: 1560902400000 // (19.06.2019) Letzer Schultag Brandenburg
};
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

storiesOf('ClassConfiguration/TopicElement', module).add(
  'with all values',
  () => (
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
  )
);

storiesOf('ClassConfiguration/RasterTopicElement', module).add(
  'with small size',
  () => (
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
  )
);

storiesOf('ClassConfiguration/ResizableRasterTopicElement', module).add(
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

storiesOf('ClassConfiguration/InteractiveRasterRow', module).add(
  'with small size',
  () => {
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
        onEditInstance={action('onEditInstance')}
      />
    );
  }
);

storiesOf('ClassConfiguration/InteractiveRasterUnit', module).add(
  'default',
  () => {
    return (
      <InteractiveRasterUnit
        topicTemplates={getTopicTemplates()}
        classInstances={getClassInstances(8)}
        classLevelId={text('ClassLevelId', '1')}
        updateClassInstances={classInstaces => console.log(classInstaces)}
        rasterCount={number('Raster Count', 30)}
        rasterSize={number('Raster Size', 20)}
        onEditTemplate={action('onEditTemplate')}
        onDeleteTemplate={action('onDeleteTemplate')}
        onEditInstance={action('onEditInstance')}
      />
    );
  }
);

storiesOf('ClassConfiguration/RasterUnitContainer', module).add(
  'default',
  () => {
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
        onEditTemplate={action('onEditTemplate')}
        onDeleteTemplate={action('onDeleteTemplate')}
        onEditInstance={action('onEditInstance')}
        onUpdate={action('onUpdate')}
      />
    );
  }
);

const schoolYearData = {
  '17/18': {
    utcStartDate: 1503900000000,
    utcEndDate: 1530079200000
  },
  '18/19': schoolYear
};
storiesOf('ClassConfiguration', module)
  .add('default', () => {
    resetCustomComponents();

    return (
      <ClassConfigurationView
        allClassTopics={getAllClassInstances()}
        allTopicTemplates={getAllTopicTemplates()}
        schoolYearData={object('School Year', schoolYearData)}
        eventData={[...holidaysData, ...eventsData]}
        onAddTemplate={action('onAddTemplate')}
        onEditTemplate={action('onEditTemplate')}
        onDeleteTemplate={action('onDeleteTemplate')}
        onEditInstance={action('onEditInstance')}
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
        schoolYearData={object('School Year', schoolYearData)}
        eventData={[...holidaysData, ...eventsData]}
        onAddTemplate={action('onAddTemplate')}
        onEditTemplate={action('onEditTemplate')}
        onDeleteTemplate={action('onDeleteTemplate')}
        onEditInstance={action('onEditInstance')}
        onSaveClassInstances={action('onSaveClassInstances')}
      />
    );
  });
