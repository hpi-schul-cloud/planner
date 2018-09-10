import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import SchicView from '../src/components/schiC';
import ExpansionPanel from '../src/components/base/ExpansionPanel';
import RadioButtons from '../src/components/base/RadioButtons';
import Test from '../src/components/base/Test';
import TopicElement from '../src/components/planner/TopicElement';
import RasterTopicElement from '../src/components/planner/RasterTopicElement';
import ResizableRasterTopicElement from '../src/components/planner/ResizableRasterTopicElement';
import InteractiveRasterRow from '../src/components/planner/InteractiveRasterRow';
import InteractiveRasterUnit from '../src/components/planner/InteractiveRasterUnit';
import RasterUnitContainer from '../src/components/planner/RasterUnitContainer';
import ClassConfiguration from '../src/components/planner/ClassConfiguration';

import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  color,
  object,
  number,
  select
} from '@storybook/addon-knobs';
import { styles as schulCloudStyles } from './schulCloudStyles';
import {
  getClassInstances,
  getTopicTemplates,
  getAllClassInstances,
  getAllTopicTemplates
} from './storyHelpers';

addDecorator(withKnobs);

storiesOf('SchicView', module)
  .add('with default styles', () => <SchicView onSave={action('onSave')} />)
  .add('with Schul-Cloud styles', () => {
    return <SchicView onSave={action('onSave')} styles={schulCloudStyles} />;
  });

storiesOf('ExpansionPanel', module).add('with all values', () => (
  <ExpansionPanel caption="Test">Haaaallo!</ExpansionPanel>
));

storiesOf('Test', module).add('with all values', () => (
  <Test buttonType={text('Text', '1')} />
));

storiesOf('RadioButtons', module).add('with all values', () => (
  <RadioButtons
    items={[
      { id: 'biology', text: 'Biologie', color: '#58C853' },
      { id: 'chemistry', text: 'Chemie', color: '#DBC192' },
      { id: 'german', text: 'Deutsch', color: '#DB9292' }
    ]}
    onChange={action('onChange')}
  />
));

storiesOf('TopicElement', module).add('with all values', () => (
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

storiesOf('RasterTopicElement', module).add('with small size', () => (
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

storiesOf('ResizableRasterTopicElement', module).add('with small size', () => (
  <ResizableRasterTopicElement
    id={text('Id', '1')}
    index={1}
    type={''}
    onChangeSizeLeft={(id, index, startIndex, endIndex) => {
      console.log(`Left: ${startIndex}-${endIndex}`);
    }}
    onChangeSizeRight={(id, index, startIndex, endIndex) => {
      console.log(`Right: ${startIndex}-${endIndex}`);
    }}
    rasterSize={number('Raster Size', 15)}
    startIndex={number('Start Index', 0)}
    endIndex={number('End Index', 4)}
    text={text('Text', 'Evolution')}
    color={color('Color', '#92DB92')}
    onElementDidNotDrop={() => {}}
  />
));

storiesOf('InteractiveRasterRow', module).add('with small size', () => {
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
      updateElements={topics => console.log(topics)}
      softRelocateTopicElement={() => {}}
      softInsertTopicElement={() => {}}
      onElementDidNotDrop={() => {}}
      onElementDidDrop={() => {}}
    />
  );
});

storiesOf('InteractiveRasterUnit', module).add('default', () => {
  return (
    <InteractiveRasterUnit
      topicTemplates={getTopicTemplates()}
      classInstances={getClassInstances(8)}
      updateClassInstances={classInstaces => console.log(classInstaces)}
      rasterCount={number('Raster Count', 30)}
      rasterSize={number('Raster Size', 20)}
    />
  );
});

storiesOf('RasterUnitContainer', module).add('default', () => {
  return (
    <RasterUnitContainer
      topicTemplates={getTopicTemplates()}
      classInstances={getClassInstances(8)}
      rasterCount={number('Raster Count', 30)}
      rasterSize={number('Raster Size', 20)}
    />
  );
});

storiesOf('ClassConfiguration', module).add('default', () => {
  return (
    <ClassConfiguration
      allClassTopics={getAllClassInstances()}
      allTopicTemplates={getAllTopicTemplates()}
    />
  );
});
