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
      extraClassNames={text('extraClassNames', '')}
      required={boolean('required', false)}
      formLabelProps={{
        requiredText: text('requiredText', undefined),
      }}
      name="emailInput"
      id="emailInput"
      labelText={text('labelText', 'Label')}
      value={text('value', '123456')}
      onBlur={action('onBlur')}
      onChange={action('onChange')}
      textInputProps={{
        withCopyButton: boolean('withCopyButton', false),
        disabled: boolean('disabled', false),
        placeholder: text('placeholder', 'Placeholder text'),
        maxLength: number('maxLength', 50),
        type: select(
          'type',
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
    />
  ))
  .add('with Textarea', () => (
    <TextField
      extraClassNames={text('extraClassNames', '')}
      textarea
      required={boolean('required', false)}
      formLabelProps={{
        requiredText: text('requiredText', undefined),
      }}
      name="emailInput"
      id="emailInput"
      labelText={text('labelText', 'Label')}
      value={text('value', '123456')}
      onBlur={action('onBlur')}
      onChange={action('onChange')}
      textInputProps={{
        disabled: boolean('disabled', false),
        placeholder: text('placeholder', 'Placeholder text'),
        maxLength: number('maxLength', 50),
        rows: number('rows', 2),
        type: select(
          'type',
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
    />
  ))
  .add('with TextLink', () => (
    <TextField
      extraClassNames={text('extraClassNames', '')}
      textarea
      required={boolean('required', false)}
      formLabelProps={{
        requiredText: text('requiredText', undefined),
      }}
      labelText={text('labelText', 'Label')}
      textLinkProps={{
        icon: text('icon', 'Lock'),
        text: text('text', 'Unlock to edit'),
        onClick: action('onClick'),
      }}
      name="emailInput"
      id="emailInput"
      value={text('Value', '123456')}
      onBlur={action('onBlur')}
      onChange={action('onChange')}
      textInputProps={{
        disabled: boolean('disabled', false),
        placeholder: text('placeholder', 'Placeholder text'),
        maxLength: number('maxLength', 50),
        rows: number('rows', 2),
        type: select(
          'type',
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
    />
  ))
  .add('with Character count', () => (
    <TextField
      countCharacters={boolean('countCharacters', true)}
      extraClassNames={text('extraClassNames', '')}
      required={boolean('required', false)}
      formLabelProps={{
        requiredText: text('requiredText', undefined),
      }}
      labelText={text('labelText', 'Label')}
      name="emailInput"
      id="emailInput"
      value={text('value', '123456')}
      onBlur={action('onBlur')}
      onChange={action('onChange')}
      textInputProps={{
        disabled: boolean('disabled', false),
        placeholder: text('placeholder', 'Placeholder text'),
        maxLength: number('maxLength', 20),
        rows: number('rows', 2),
        type: select(
          'type',
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
    />
  ));
