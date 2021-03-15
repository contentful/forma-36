import React, { useState } from 'react';
import { Flex } from '@contentful/f36-core';

import { FieldGroup } from '../Form';
import { CheckboxField, CheckboxFieldProps } from './CheckboxField';
import { SectionHeading } from '../Typography';

export default {
  title: 'Form Elements/CheckboxField',
  component: CheckboxField,
  parameters: {
    propTypes: [CheckboxField['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

export const Basic = (args: CheckboxFieldProps) => {
  const [optionOne, setOptionOne] = useState(false);
  const [optionTwo, setOptionTwo] = useState(false);

  return (
    <FieldGroup>
      <CheckboxField
        {...args}
        id="Checkbox1"
        checked={optionOne}
        value="yes"
        onChange={(e) => setOptionOne((e.target as HTMLInputElement).checked)}
      />
      <CheckboxField
        {...args}
        id="Checkbox2"
        value="yes"
        checked={optionTwo}
        onChange={(e) => setOptionTwo((e.target as HTMLInputElement).checked)}
      />
    </FieldGroup>
  );
};

Basic.args = {
  labelText: 'some label text',
  name: 'some name',
  validationMessage: 'validation message',
  helpText: 'help text',
};

export const overview = () => (
  <>
    <Flex marginBottom="spacingS" marginTop="spacingM">
      <SectionHeading element="h3">Checkbox Field default</SectionHeading>
    </Flex>
    <CheckboxField
      labelText="Option 1"
      helpText="This is a helptext"
      name="someOption"
      checked
      value="yes"
      id="termsCheckbox"
    />
    <Flex marginBottom="spacingS" marginTop="spacingM">
      <SectionHeading element="h3">
        Checkbox Field with validation message
      </SectionHeading>
    </Flex>
    <CheckboxField
      labelText="Option 2"
      helpText="This is a helptext"
      validationMessage="validationMessage"
      name="someOption"
      value="no"
      id="termsCheckboxOption2"
    />
    <Flex marginBottom="spacingS" marginTop="spacingM">
      <SectionHeading element="h3">Checkbox Field diabled</SectionHeading>
    </Flex>
    <CheckboxField
      labelText="Option 2"
      helpText="This is a helptext"
      disabled
      name="someOption"
      value="no"
      id="termsCheckboxOption3"
    />
    <Flex marginBottom="spacingS" marginTop="spacingM">
      <SectionHeading element="h3">
        Checkbox Field diabled checked
      </SectionHeading>
    </Flex>
    <CheckboxField
      labelText="Option 2"
      helpText="This is a helptext"
      disabled
      checked
      name="someOption"
      value="no"
      id="termsCheckboxOption4"
    />
  </>
);
