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
const props = {
  onSave: action('onSave'),
  onDelete: action('onDelete'),
  onTemplateClick: action('onTemplateClick'),
  initialValues: object('Initial Values', {
    subject: 'Biologie',
    classLevel: 'Klasse 8a',
    parentTemplate: {
      id: 'templateId1',
      name: 'Genetik'
    }
  }),
  onFileClick: action('onFileClick'),
  onFileAdd: action('onFileAdd'),
  onFileRemove: action('onFileRemove')
};

storiesOf('TopicInstance', module)
  .add('default', () => {
    resetCustomComponents();

    return <TopicInstanceView {...props} />;
  })
  .add('with Material Design', () => {
    setupMaterialComponents();

    return <TopicInstanceView {...props} />;
  });
