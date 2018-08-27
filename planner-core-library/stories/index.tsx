import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import SchicView from '../src/components/schiC';
import TopicElement from '../src/components/planner/TopicElement';
import RasterTopicElement from '../src/components/planner/RasterTopicElement';
import ResizableRasterTopicElement from '../src/components/planner/ResizableRasterTopicElement';
import InteractiveRasterRow from '../src/components/planner/InteractiveRasterRow';
import InteractiveRasterUnit from '../src/components/planner/InteractiveRasterUnit';
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

addDecorator(withKnobs);

storiesOf('SchicView', module)
  .add('with default styles', () => <SchicView onSave={action('onSave')} />)
  .add('with Schul-Cloud styles', () => {
    return <SchicView onSave={action('onSave')} styles={schulCloudStyles} />;
  });

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
      rasterCount={number('Raster Count', 45)}
      rasterSize={number('Raster Size', 15)}
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
  const classInstances = {
    '8a': {
      id: '8a',
      name: '',
      topics: [
        {
          id: '1',
          text: '1.Topic',
          color: '#92DB92',
          startIndex: 0,
          endIndex: 3
        },
        {
          id: '2',
          text: '2.Topic',
          color: '#92DB92',
          startIndex: 4,
          endIndex: 6
        },
        {
          id: '3',
          text: '3.Topic',
          color: '#92DB92',
          startIndex: 8,
          endIndex: 12
        }
      ]
    },
    '8b': {
      id: '8b',
      name: '',
      topics: [
        {
          id: '1',
          text: '1.Topic',
          color: '#92DB92',
          startIndex: 0,
          endIndex: 3
        },
        {
          id: '2',
          text: '2.Topic',
          color: '#92DB92',
          startIndex: 4,
          endIndex: 6
        },
        {
          id: '3',
          text: '3.Topic',
          color: '#92DB92',
          startIndex: 8,
          endIndex: 12
        }
      ]
    }
  };
  const topicTemplates = [
    { id: '4', text: 'Evolution', width: 5 },
    { id: '5', text: 'Replikation', width: 10 },
    { id: '6', text: 'Zellteilung', width: 8 }
  ];
  return (
    <InteractiveRasterUnit
      topicTemplates={topicTemplates}
      classInstances={classInstances}
    />
  );
});
