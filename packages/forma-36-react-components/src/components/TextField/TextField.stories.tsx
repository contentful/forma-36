import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import TextField from './TextField';
import SectionHeading from '../Typography/SectionHeading';
import Flex from '../Flex/Flex';

storiesOf('Components/TextField', module)
  .addParameters({
    propTypes: TextField['__docgenInfo'],
    component: TextField,
  })
  .add('default', () => (
    <TextField
      className={text('className', '')}
      required={boolean('required', false)}
      formLabelProps={{
        requiredText: text('requiredText', undefined),
      }}
      name="emailInput"
      id="emailInput"
      labelText={text('labelText', 'Label')}
      value={text('value', '123456')}
      width={select(
        'width',
        {
          'Full (default)': 'full',
          large: 'large',
          medium: 'medium',
          small: 'small',
        },
        'full',
      )}
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
      }}
      helpText={text('helpText', '')}
      validationMessage={text('validationMessage', '')}
    />
  ))
  .add('with Textarea', () => (
    <TextField
      className={text('className', '')}
      textarea
      required={boolean('required', false)}
      formLabelProps={{
        requiredText: text('requiredText', undefined),
      }}
      name="emailInput"
      id="emailInput"
      labelText={text('labelText', 'Label')}
      value={text('value', '123456')}
      width={select(
        'width',
        {
          'Full (default)': 'full',
          large: 'large',
          medium: 'medium',
          small: 'small',
        },
        'full',
      )}
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
      }}
      helpText={text('helpText', '')}
      validationMessage={text('validationMessage', '')}
    />
  ))
  .add('with TextLink', () => (
    <TextField
      className={text('className', '')}
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
      width={select(
        'width',
        {
          'Full (default)': 'full',
          large: 'large',
          medium: 'medium',
          small: 'small',
        },
        'full',
      )}
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
      }}
      helpText={text('helpText', '')}
      validationMessage={text('validationMessage', '')}
    />
  ))
  .add('with Character count', () => (
    <TextField
      countCharacters={boolean('countCharacters', true)}
      className={text('className', '')}
      required={boolean('required', false)}
      formLabelProps={{
        requiredText: text('requiredText', undefined),
      }}
      labelText={text('labelText', 'Label')}
      name="emailInput"
      id="emailInput"
      value={text('value', '123456')}
      width={select(
        'width',
        {
          'Full (default)': 'full',
          large: 'large',
          medium: 'medium',
          small: 'small',
        },
        'full',
      )}
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
      }}
      helpText={text('helpText', '')}
      validationMessage={text('validationMessage', '')}
    />
  ))
  .add('overview', () => (
    <>
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">
          Textarea field default with countCharacters
        </SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <TextField
          countCharacters
          labelText="Label"
          name="emailInput"
          id="emailInput"
          value="123456"
          textInputProps={{
            placeholder: 'Placeholder text',
            maxLength: 20,
            rows: 2,
            type: 'text',
          }}
        />
      </Flex>
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">
          Textarea field default with help text
        </SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <TextField
          labelText="Label"
          name="emailInput"
          id="emailInput"
          value="123456"
          textInputProps={{
            placeholder: 'Placeholder text',
            maxLength: 20,
            rows: 2,
            type: 'text',
          }}
          helpText="help text"
        />
      </Flex>
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Textarea field error</SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <TextField
          labelText="Label"
          name="emailInput"
          id="emailInput"
          value="123456"
          textInputProps={{
            placeholder: 'Placeholder text',
            maxLength: 20,
            rows: 2,
            type: 'text',
          }}
          validationMessage="validationMessage"
        />
      </Flex>
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Textarea field disabled</SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <TextField
          labelText="Label"
          name="emailInput"
          id="emailInput"
          value="123456"
          textInputProps={{
            disabled: true,
            placeholder: 'Placeholder text',
            maxLength: 20,
            rows: 2,
            type: 'text',
          }}
          helpText={text('helpText', '')}
          validationMessage={text('validationMessage', '')}
        />
      </Flex>
    </>
  ));
