import React, { useState } from 'react';
import { Flex } from '@contentful/f36-core';
import { SectionHeading } from '@contentful/f36-typography';
import { FieldGroup } from '@contentful/f36-components/src/components/Form';
import { CheckboxField, CheckboxFieldProps } from '../src';

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
        isChecked={optionOne}
        value="yes"
        onChange={(e) => setOptionOne((e.target as HTMLInputElement).checked)}
      />
      <CheckboxField
        {...args}
        id="Checkbox2"
        value="yes"
        isChecked={optionTwo}
        onChange={(e) => setOptionTwo((e.target as HTMLInputElement).checked)}
      />
    </FieldGroup>
  );
};

Basic.args = {
  label: 'some label text',
  name: 'some name',
  validationMessage: 'validation message',
  helpText: 'help text',
};

export const overview = () => (
  <>
    <Flex marginBottom="spacingS" marginTop="spacingM">
      <SectionHeading as="h3">Checkbox Field default</SectionHeading>
    </Flex>
    <CheckboxField
      label="Option 1"
      helpText="This is a helptext"
      name="someOption"
      isChecked
      value="yes"
      id="termsCheckbox"
    />
    <Flex marginBottom="spacingS" marginTop="spacingM">
      <SectionHeading as="h3">
        Checkbox Field with validation message
      </SectionHeading>
    </Flex>
    <CheckboxField
      label="Option 2"
      helpText="This is a helptext"
      validationMessage="validationMessage"
      name="someOption"
      value="no"
      id="termsCheckboxOption2"
    />
    <Flex marginBottom="spacingS" marginTop="spacingM">
      <SectionHeading as="h3">Checkbox Field diabled</SectionHeading>
    </Flex>
    <CheckboxField
      label="Option 2"
      helpText="This is a helptext"
      isDisabled
      name="someOption"
      value="no"
      id="termsCheckboxOption3"
    />
    <Flex marginBottom="spacingS" marginTop="spacingM">
      <SectionHeading as="h3">Checkbox Field diabled checked</SectionHeading>
    </Flex>
    <CheckboxField
      label="Option 2"
      helpText="This is a helptext"
      isDisabled
      isChecked
      name="someOption"
      value="no"
      id="termsCheckboxOption4"
    />
  </>
);
