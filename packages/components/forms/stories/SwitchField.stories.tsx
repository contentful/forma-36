import React, { useState } from 'react';
import { SectionHeading } from '@contentful/f36-typography';
import { FieldGroup } from '@contentful/f36-components';
import { SwitchField, SwitchFieldProps } from '../src';

export default {
  title: 'Form Elements/SwitchField',
  component: SwitchField,
  parameters: {
    propTypes: [SwitchField['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

export const Basic = (args: SwitchFieldProps) => {
  const [optionOne, setOptionOne] = useState(false);
  const [optionTwo, setOptionTwo] = useState(false);

  return (
    <FieldGroup>
      <SwitchField
        {...args}
        id="switch1"
        isChecked={optionOne}
        value="yes"
        onChange={(e) => setOptionOne((e.target as HTMLInputElement).checked)}
      />
      <SwitchField
        {...args}
        id="switch2"
        value="yes"
        isChecked={optionTwo}
        onChange={(e) => setOptionTwo((e.target as HTMLInputElement).checked)}
      />
    </FieldGroup>
  );
};

Basic.args = {
  label: 'Some label text',
  name: 'some name',
  validationMessage: 'validation message',
  helpText: 'help text',
};

export const overview = () => (
  <>
    <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingM">
      Switch Field default
    </SectionHeading>

    <SwitchField
      label="Option 1"
      helpText="This is a helptext"
      name="someOption"
      isChecked
      value="yes"
      id="termsSwitch"
    />

    <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingM">
      Switch Field with validation message
    </SectionHeading>

    <SwitchField
      label="Option 2"
      helpText="This is a helptext"
      validationMessage="validationMessage"
      name="someOption"
      value="no"
      id="termsSwitch2"
    />

    <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingM">
      Switch Field disabled
    </SectionHeading>

    <SwitchField
      label="Option 3"
      helpText="This is a helptext"
      isDisabled
      name="someOption"
      value="no"
      id="termsSwitch3"
    />

    <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingM">
      Switch Field disabled checked
    </SectionHeading>

    <SwitchField
      label="Option 4"
      helpText="This is a helptext"
      isDisabled
      isChecked
      name="someOption"
      value="no"
      id="termsSwitch4"
    />
  </>
);
