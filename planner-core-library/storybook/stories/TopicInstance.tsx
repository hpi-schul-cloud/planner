import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { TopicInstanceView } from '../../src/components/views';

import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs';
import {
  setupMaterialComponents,
  resetCustomComponents
} from '../componentHelper';

addDecorator(withKnobs);

storiesOf('TopicInstance', module)
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
      />
    );
  });
