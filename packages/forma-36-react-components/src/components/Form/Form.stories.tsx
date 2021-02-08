import React, { useState } from 'react';

import Form, { FormProps } from './Form';
import FieldGroup from './FieldGroup';
import Button from '../Button';
import TextField from '../TextField';
import CheckboxField from '../CheckboxField';
import notes from './README.mdx';

export default {
  title: 'Form Elements/Form',
  component: Form,
  parameters: {
    propTypes: [Form['__docgenInfo']],
    notes,
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

export const Basic = (args: FormProps) => {
  const [agreeTerms, setTerms] = useState('yes');
  return (
    <Form {...args}>
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
      <FieldGroup>
        <CheckboxField
          labelText="I agree"
          value="yes"
          helpText="Click if you agree"
          onChange={(e) => setTerms((e.target as HTMLInputElement).value)}
          checked={agreeTerms === 'yes'}
          id="termsCheckboxYes"
        />
        <CheckboxField
          labelText="I don't agree"
          value="no"
          onChange={(e) => setTerms((e.target as HTMLInputElement).value)}
          checked={agreeTerms === 'no'}
          helpText="Click if you don't agree"
          id="termsCheckboxNo"
        />
      </FieldGroup>
      <Button>Submit</Button>
    </Form>
  );
};

Basic.args = {
  spacing: 'default',
};
