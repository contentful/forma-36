import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import FieldGroup from '../Form/FieldGroup';
import CheckboxField from './CheckboxField';

function DefaultStory() {
  const [optionOne, setOptionOne] = useState(false);
  const [optionTwo, setOptionTwo] = useState(false);

  return (
    <FieldGroup>
      <CheckboxField
        labelText={text('Label Text', 'Option 1')}
        helpText={text('Help Text', 'This is a helptext')}
        validationMessage={text('Validation Message', undefined)}
        disabled={boolean('Disabled', false)}
        name="someOption"
        checked={optionOne}
        value="yes"
        onChange={e => setOptionOne((e.target as HTMLInputElement).checked)}
        labelIsLight={boolean('Light', false)}
        inputProps={{
          onBlur: action('onBlur'),
          onFocus: action('onFoucs'),
        }}
        id="termsCheckbox"
      />
      <CheckboxField
        labelText={text('Label Text', 'Option 2')}
        helpText={text('Help Text', 'This is a helptext')}
        validationMessage={text('Validation Message', undefined)}
        disabled={boolean('Disabled', false)}
        name="someOption"
        value="no"
        checked={optionTwo}
        onChange={e => setOptionTwo((e.target as HTMLInputElement).checked)}
        labelIsLight={boolean('Light', false)}
        inputProps={{
          onBlur: action('onBlur'),
          onFocus: action('onFoucs'),
        }}
        id="termsCheckboxOption2"
      />
    </FieldGroup>
  );
}

storiesOf('Components|CheckboxField', module).add('default', () => (
  <DefaultStory />
));
