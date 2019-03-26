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
        labelText={text('labelText', 'Option 1')}
        helpText={text('helpText', 'This is a helptext')}
        validationMessage={text('validationMessage', undefined)}
        isDisabled={boolean('isDisabled', false)}
        name="someOption"
        isChecked={activeOption === 'yes'}
        value="yes"
        onChange={e => {
          setActiveOption((e.target as HTMLInputElement).value);
        }}
        labelIsLight={boolean('labelIsLight', false)}
        inputProps={{
          onBlur: action('onBlur'),
          onFocus: action('onFoucs'),
        }}
        id="termsCheckbox"
      />
      <RadioButtonField
        labelText={text('labelText', 'Option 2')}
        helpText={text('helpText', 'This is a helptext')}
        validationMessage={text('validationMessage', undefined)}
        isDisabled={boolean('isDisabled', false)}
        name="someOption"
        value="no"
        isChecked={activeOption === 'no'}
        onChange={e => {
          setActiveOption((e.target as HTMLInputElement).value);
        }}
        labelIsLight={boolean('labelIsLight', false)}
        inputProps={{
          onBlur: action('onBlur'),
          onFocus: action('onFoucs'),
        }}
        id="termsCheckboxOption2"
      />
    </FieldGroup>
  );
}

storiesOf('Components|RadioButtonField', module)
  .addParameters({
    propTypes: RadioButtonField['__docgenInfo'],
  })
  .add('default', () => <DefaultStory />);
