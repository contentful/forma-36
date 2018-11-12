import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { boolean, selectV2 } from '@storybook/addon-knobs/react';

import Form from '.';
import FieldGroup from '../FieldGroup';
import Button from '../../Button';
import TextField from '../../TextField';
import CheckboxField from '../../CheckboxField';

storiesOf('Components|Form', module)
  .addDecorator(
    host({
      align: 'center middle',
      cropMarks: false,
      width: 400,
    }),
  )
  .add(
    'default',
    withInfo()(() => (
      <Form
        onSubmit={action('onSubmit')}
        spacing={selectV2(
          'Spacing',
          {
            Default: 'default',
            Condensed: 'condensed',
          },
          'default',
        )}
      >
        <TextField
          required
          name="nameInput"
          id="nameInput"
          labelText="Name"
          value="Johannes Bugiel"
          helpText="Please enter your name"
        />
        <TextField
          required
          name="emailInput"
          id="emailInput"
          labelText="E-Mail"
          value="johannes.bugiel@contentful.com"
          helpText="Please enter your mail"
        />
        <FieldGroup row={boolean('Field Group Row', false)}>
          <CheckboxField
            labelText="Do you agree?"
            helpText="Click if you agree"
            id="termsCheckbox"
          />
          <CheckboxField
            labelText="Do you really agree?"
            helpText="Click if you really agree"
            id="termsCheckbox"
          />
        </FieldGroup>
        <Button>Submit</Button>
      </Form>
    )),
  );
