import React from 'react';
import { storiesOf } from '@storybook/react';
import SchicView from '../src/components/schiC';
import TopicElement from '../src/components/planner/TopicElement';
import RasterTopicElement from '../src/components/planner/RasterTopicElement';
import ResizableRasterTopicElement from '../src/components/planner/ResizableRasterTopicElement';
import { action } from '@storybook/addon-actions';
import { styles as schulCloudStyles } from './schulCloudStyles';

storiesOf('SchicView', module)
  .add('with default styles', () => <SchicView onSave={action('onSave')} />)
  .add('with Schul-Cloud styles', () => {
    return <SchicView onSave={action('onSave')} styles={schulCloudStyles} />;
  });

storiesOf('TopicElement', module)
  .add('with small size', () => (
    <TopicElement onClick={action('onClick')} text="Biologie" />
  ))
  .add('with large size', () => (
    <TopicElement size="large" text="Biologie" width={100} />
  ));

storiesOf('RasterTopicElement', module)
  .add('with small size', () => (
    <RasterTopicElement
      rasterSize={15}
      startIndex={0}
      endIndex={4}
      onClick={action('onClick')}
      text="Biologie"
    />
  ))
  .add('with large size', () => (
    <RasterTopicElement
      rasterSize={15}
      startIndex={0}
      endIndex={4}
      size="large"
      text="Biologie"
    />
  ));

storiesOf('ResizableRasterTopicElement', module).add('with small size', () => (
  <ResizableRasterTopicElement
    id={'1'}
    onChangeSizeLeft={(id, startIndex, endIndex) => {
      console.log(`Left: ${startIndex}-${endIndex}`);
    }}
    onChangeSizeRight={(id, startIndex, endIndex) => {
      console.log(`Right: ${startIndex}-${endIndex}`);
    }}
    rasterSize={15}
    startIndex={0}
    endIndex={4}
    text="Biologie"
  />
));
