import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import TextField from './TextField';

storiesOf('Components|TextField', module)
  .addParameters({
    propTypes: TextField['__docgenInfo'],
  })
  .add('default', () => (
    <TextField
      extraClassNames={text('Extra Class Names', '')}
      required={boolean('Required', false)}
      formLabelProps={{
        requiredText: text('Required Text', undefined),
      }}
      name="emailInput"
      id="emailInput"
      labelText={text('Label', 'Label')}
      value={text('Value', '123456')}
      onBlur={action('onBlur')}
      onChange={action('onChange')}
      textInputProps={{
        withCopyButton: boolean('With Copy Button', false),
        disabled: boolean('Disabled', false),
        placeholder: text('Placeholder', 'Placeholder text'),
        maxLength: number('Max Length Characters', 50),
        type: select(
          'Type',
          {
            'Text (default)': 'text',
            password: 'password',
            email: 'email',
            number: 'number',
            url: 'url',
            search: 'search',
          },
          'text',
        ),
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
    />
  ))
  .add('with Textarea', () => (
    <TextField
      extraClassNames={text('Extra Class Names', '')}
      textarea
      required={boolean('Required', false)}
      formLabelProps={{
        requiredText: text('Required Text', undefined),
      }}
      name="emailInput"
      id="emailInput"
      labelText={text('Label', 'Label')}
      value={text('Value', '123456')}
      onBlur={action('onBlur')}
      onChange={action('onChange')}
      textInputProps={{
        disabled: boolean('Disabled', false),
        placeholder: text('Placeholder', 'Placeholder text'),
        maxLength: number('Max Length Characters', 50),
        rows: number('Rows', 2),
        type: select(
          'Type',
          {
            'Text (default)': 'text',
            password: 'password',
            email: 'email',
            number: 'number',
            url: 'url',
            search: 'search',
          },
          'text',
        ),
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
    />
  ))
  .add('with TextLink', () => (
    <TextField
      extraClassNames={text('Extra Class Names', '')}
      textarea
      required={boolean('Required', false)}
      formLabelProps={{
        requiredText: text('Required Text', undefined),
      }}
      labelText={text('Label', 'Label')}
      textLinkProps={{
        icon: text('Icon', 'Lock'),
        text: text('Text', 'Unlock to edit'),
        onClick: action('onClick'),
      }}
      name="emailInput"
      id="emailInput"
      value={text('Value', '123456')}
      onBlur={action('onBlur')}
      onChange={action('onChange')}
      textInputProps={{
        disabled: boolean('Disabled', false),
        placeholder: text('Placeholder', 'Placeholder text'),
        maxLength: number('Max Length Characters', 50),
        rows: number('Rows', 2),
        type: select(
          'Type',
          {
            'Text (default)': 'text',
            password: 'password',
            email: 'email',
            number: 'number',
            url: 'url',
            search: 'search',
          },
          'text',
        ),
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
    />
  ))
  .add('with Character count', () => (
    <TextField
      countCharacters={boolean('Count characters', true)}
      extraClassNames={text('Extra Class Names', '')}
      required={boolean('Required', false)}
      formLabelProps={{
        requiredText: text('Required Text', undefined),
      }}
      labelText={text('Label', 'Label')}
      name="emailInput"
      id="emailInput"
      value={text('Value', '123456')}
      onBlur={action('onBlur')}
      onChange={action('onChange')}
      textInputProps={{
        disabled: boolean('Disabled', false),
        placeholder: text('Placeholder', 'Placeholder text'),
        maxLength: number('Max Length Characters', 20),
        rows: number('Rows', 2),
        type: select(
          'Type',
          {
            'Text (default)': 'text',
            password: 'password',
            email: 'email',
            number: 'number',
            url: 'url',
            search: 'search',
          },
          'text',
        ),
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
    />
  ));
