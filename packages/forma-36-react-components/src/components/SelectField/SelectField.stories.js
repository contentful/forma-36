import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import { host } from 'storybook-host';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import SelectField from './SelectField';
import Option from '../Select/Option';

storiesOf('Components|SelectField', module)
  .addDecorator(
    host({
      align: 'center middle',
      cropMarks: false,
    }),
  )
  .add(
    'default',
    withInfo()(() => (
      <SelectField
        extraClassNames={text('Extra Class Names', '')}
        required={boolean('Required', false)}
        formLabelProps={{
          requiredText: text('Required Text', undefined),
        }}
        name="optionSelect"
        id="optionSelect"
        labelText={text('Label', 'Label')}
        value={select(
          'Value',
          {
            'Option 1': 'optionOne',
            'Option 2': 'optionTwo',
          },
          'optionOne',
        )}
        onBlur={action('onBlur')}
        onChange={action('onChange')}
        selectProps={{
          isDisabled: boolean('Disabled', false),
          width: select(
            'Width',
            {
              'Full (default)': 'full',
              large: 'large',
              medium: 'medium',
              small: 'small',
            },
            'full',
          ),
        }}
        helpText={text('Help Text', '')}
        validationMessage={text('Validation Message', '')}
      >
        <Option value="optionOne">Option 1</Option>
        <Option value="optionTwo">Long Option 2</Option>
      </SelectField>
    )),
  );
