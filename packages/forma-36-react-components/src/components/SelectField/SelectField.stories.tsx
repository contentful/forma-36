import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import SelectField from './SelectField';
import Option from '../Select/Option';

storiesOf('Components|SelectField', module)
  .addParameters({
    propTypes: [SelectField['__docgenInfo'], Option['__docgenInfo']],
  })
  .add('default', () => (
    <SelectField
      extraClassNames={text('extraClassNames', '')}
      required={boolean('required', false)}
      formLabelProps={{
        requiredText: text('Required Text', undefined),
      }}
      name="optionSelect"
      id="optionSelect"
      labelText={text('labelText', 'Label')}
      value={select(
        'value',
        {
          'Option 1': 'optionOne',
          'Option 2': 'optionTwo',
        },
        'optionOne',
      )}
      onBlur={action('onBlur')}
      onChange={action('onChange')}
      selectProps={{
        isDisabled: boolean('isDisabled', false),
        width: select(
          'width',
          {
            'Full (default)': 'full',
            large: 'large',
            medium: 'medium',
            small: 'small',
          },
          'full',
        ),
      }}
      helpText={text('helpText', '')}
      validationMessage={text('validationMessage', '')}
    >
      <Option value="optionOne">Option 1</Option>
      <Option value="optionTwo">Long Option 2</Option>
    </SelectField>
  ));
