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
      rasterCount={5}
      onClick={action('onClick')}
      text="Biologie"
    />
  ))
  .add('with large size', () => (
    <RasterTopicElement
      rasterSize={15}
      rasterCount={5}
      size="large"
      text="Biologie"
    />
  ));

storiesOf('ResizableRasterTopicElement', module).add('with small size', () => (
  <ResizableRasterTopicElement
    onChangeSizeLeft={newSize => {
      console.log(`Left: ${newSize}`);
    }}
    onChangeSizeRight={newSize => {
      console.log(`Right: ${newSize}`);
    }}
    rasterSize={15}
    rasterCount={5}
    text="Biologie"
  />
));
