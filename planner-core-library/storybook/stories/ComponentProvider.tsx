import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, object, color, number } from '@storybook/addon-knobs';

import {
  setupMaterialComponents,
  resetCustomComponents
} from '../componentHelper';
import ComponentProvider from '../../src/components/provider/componentProvider';

addDecorator(withKnobs);

storiesOf('ComponentProvider/ExpansionPanel', module)
  .add('base', () => {
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

storiesOf('ComponentProvider/TopicElement', module)
  .add('base', () => {
    resetCustomComponents();

    return (
      <ComponentProvider.TopicElement
        onClick={action('onClick')}
        text={text('Text', 'Evolution')}
        color={color('Color', '#92DB92')}
        width={number('Width', 100)}
        height={number('Height', 100)}
      />
    );
  })
  .add('with material design', () => {
    setupMaterialComponents();

    return (
      <ComponentProvider.TopicElement
        onClick={action('onClick')}
        text={text('Text', 'Evolution')}
        color={color('Color', '#92DB92')}
        width={number('Width', 100)}
        height={number('Height', 100)}
      />
    );
  });

storiesOf('ComponentProvider/Tabs', module)
  .add('base', () => {
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

storiesOf('ComponentProvider/TextField', module)
  .add('base', () => {
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

storiesOf('ComponentProvider/TextArea', module)
  .add('base', () => {
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

storiesOf('ComponentProvider/TextFieldTable', module)
  .add('base', () => {
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

storiesOf('ComponentProvider/Chip', module)
  .add('base', () => {
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

storiesOf('ComponentProvider/SelectorInput', module)
  .add('base', () => {
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
