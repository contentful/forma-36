import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs/react';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import CheckboxField from './CheckboxField';

storiesOf('Components|CheckboxField', module)
  .addDecorator(
    host({
      align: 'center middle',
      cropMarks: false,
    }),
  )
  .add(
    'default',
    withInfo()(() => (
      <CheckboxField
        labelText={text('Label Text', 'Accept Terms and Conditions')}
        helpText={text('Help Text', 'This is a helptext')}
        validationMessage={text('Validation Message', 'Checkbox is required')}
        disabled={boolean('Disabled', false)}
        checked={boolean('Checked', false)}
        value={text('Value', 'value')}
        onChange={action('onChange')}
        light={boolean('Light', false)}
        checkboxProps={{
          onBlur: action('onBlur'),
          onFocus: action('onFoucs'),
        }}
        id="termsCheckbox"
      />
    )),
  );
