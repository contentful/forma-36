import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';

import Form from './Form';
import FieldGroup from './FieldGroup';
import Button from '../Button';
import TextField from '../TextField';
import CheckboxField from '../CheckboxField';

function DefaultStory() {
  const [agreeTerms, setTerms] = useState('yes');
  return (
    <Form
      onSubmit={action('onSubmit')}
      spacing={select(
        'spacing',
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
      <FieldGroup row={boolean('row', false)}>
        <CheckboxField
          labelText="I agree"
          value="yes"
          helpText="Click if you agree"
          onChange={e => setTerms((e.target as HTMLInputElement).value)}
          checked={agreeTerms === 'yes'}
          id="termsCheckboxYes"
        />
        <CheckboxField
          labelText="I don't agree"
          value="no"
          onChange={e => setTerms((e.target as HTMLInputElement).value)}
          checked={agreeTerms === 'no'}
          helpText="Click if you don't agree"
          id="termsCheckboxNo"
        />
      </FieldGroup>
      <Button>Submit</Button>
    </Form>
  );
}

storiesOf('Components|Form', module)
  .addParameters({
    propTypes: Form['__docgenInfo'],
  })
  .add('default', () => <DefaultStory />);
