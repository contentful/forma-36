import React, { useState } from 'react';
import { SectionHeading } from '@contentful/f36-typography';
import { FieldGroup } from '@contentful/f36-components';
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
    <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingM">
      Checkbox Field default
    </SectionHeading>

    <CheckboxField
      label="Option 1"
      helpText="This is a helptext"
      name="someOption"
      isChecked
      value="yes"
      id="termsCheckbox"
    />

    <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingM">
      Checkbox Field with validation message
    </SectionHeading>

    <CheckboxField
      label="Option 2"
      helpText="This is a helptext"
      validationMessage="validationMessage"
      name="someOption"
      value="no"
      id="termsCheckboxOption2"
    />

    <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingM">
      Checkbox Field diabled
    </SectionHeading>

    <CheckboxField
      label="Option 2"
      helpText="This is a helptext"
      isDisabled
      name="someOption"
      value="no"
      id="termsCheckboxOption3"
    />

    <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingM">
      Checkbox Field diabled checked
    </SectionHeading>

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
