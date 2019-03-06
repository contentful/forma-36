import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import RadioButtonField from './RadioButtonField';
import FieldGroup from '../Form/FieldGroup';

function DefaultStory() {
  const [activeOption, setActiveOption] = useState('yes');
  return (
    <FieldGroup>
      <RadioButtonField
        labelText={text('Label Text', 'Option 1')}
        helpText={text('Help Text', 'This is a helptext')}
        validationMessage={text('Validation Message', undefined)}
        disabled={boolean('Disabled', false)}
        name="someOption"
        checked={activeOption === 'yes'}
        value="yes"
        onChange={e => {
          setActiveOption((e.target as HTMLInputElement).value);
        }}
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
        checked={activeOption === 'no'}
        onChange={e => {
          setActiveOption((e.target as HTMLInputElement).value);
        }}
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

storiesOf('Components|RadioButtonField', module).add('default', () => (
  <DefaultStory />
));
