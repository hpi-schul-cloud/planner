import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { TopicTemplateView } from '../src/components/topicTemplateView';
import ComponentProvider from '../src/components/provider/componentProvider';
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
import {
  getClassInstances,
  getTopicTemplates,
  getAllClassInstances,
  getAllTopicTemplates
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

storiesOf('CreateTemplate/TopicTemplateView', module)
  .add('default', () => {
    resetCustomComponents();

    return <TopicTemplateView onSave={action('onSave')} />;
  })
  .add('with Material Design', () => {
    setupMaterialComponents();

    return <TopicTemplateView onSave={action('onSave')} />;
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
      onAddTemplateClick={action('onAddTemplateClick')}
      onUpdate={action('onUpdate')}
    />
  );
});

storiesOf('MyClass/ClassConfiguration', module)
  .add('default', () => {
    resetCustomComponents();

    return (
      <ClassConfiguration
        allClassTopics={getAllClassInstances()}
        allTopicTemplates={getAllTopicTemplates()}
        onAddTemplate={action('onAddTemplate')}
        onSaveClassInstances={action('onSaveClassInstances')}
      />
    );
  })
  .add('with material design', () => {
    setupMaterialComponents();

    return (
      <ClassConfiguration
        allClassTopics={getAllClassInstances()}
        allTopicTemplates={getAllTopicTemplates()}
        onAddTemplate={action('onAddTemplate')}
        onSaveClassInstances={action('onSaveClassInstances')}
      />
    );
  });
