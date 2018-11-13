import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { TopicTemplateView } from '../../src/components/views';

import { action } from '@storybook/addon-actions';
import { withKnobs, object, select } from '@storybook/addon-knobs';
import {
  setupMaterialComponents,
  resetCustomComponents
} from '../componentHelper';

addDecorator(withKnobs);
const valueOptions = {
  subject: [{ id: '1', text: 'Biology' }, { id: '2', text: 'Chemistry' }],
  classLevel: [{ id: '1', text: '10' }, { id: '2', text: '11' }]
};
const props = {
  valueOptions: object('Value Options', valueOptions),
  onCreate: action('onCreate'),
  onSave: action('onSave'),
  onDelete: action('onDelete'),
  mode: select('Mode', { new: 'NEW', edit: 'EDIT' }, 'NEW') as 'NEW'
};
storiesOf('TopicTemplate', module)
  .add('default', () => {
    resetCustomComponents();

    return <TopicTemplateView {...props} />;
  })
  .add('with Material Design', () => {
    setupMaterialComponents();

    return <TopicTemplateView {...props} />;
  });
