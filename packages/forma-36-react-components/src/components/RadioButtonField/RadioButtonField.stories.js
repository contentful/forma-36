import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { StateDecorator, Store } from '@sambego/storybook-state';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import RadioButtonField from './RadioButtonField';
import FieldGroup from '../Form/FieldGroup';

const store = new Store({
  activeOption: 'yes',
});

storiesOf('Components|RadioButtonField', module)
  .addDecorator(
    host({
      align: 'center middle',
      cropMarks: false,
    }),
  )
  .addDecorator(StateDecorator(store))
  .add(
    'default',
    withInfo()(() => (
      <FieldGroup>
        <RadioButtonField
          labelText={text('Label Text', 'Option 1')}
          helpText={text('Help Text', 'This is a helptext')}
          validationMessage={text('Validation Message', undefined)}
          disabled={boolean('Disabled', false)}
          name="someOption"
          checked={store.state.activeOption === 'yes'}
          value="yes"
          onChange={e => store.set({ activeOption: e.target.value })}
          labelIsLight={boolean('Light', false)}
          inputProps={{
            onBlur: action('onBlur'),
            onFocus: action('onFoucs'),
          }}
          id="termsCheckbox"
        />
        <RadioButtonField
          labelText={text('Label Text', 'Option 2')}
          helpText={text('Help Text', 'This is a helptext')}
          validationMessage={text('Validation Message', undefined)}
          disabled={boolean('Disabled', false)}
          name="someOption"
          value="no"
          checked={store.state.activeOption === 'no'}
          onChange={e => store.set({ activeOption: e.target.value })}
          light={boolean('Light', false)}
          inputProps={{
            onBlur: action('onBlur'),
            onFocus: action('onFoucs'),
          }}
          id="termsCheckboxOption2"
        />
      </FieldGroup>
    )),
  );
