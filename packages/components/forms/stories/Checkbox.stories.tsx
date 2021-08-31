import React, { useState } from 'react';
import { SectionHeading } from '@contentful/f36-typography';
import { FieldGroup } from '@contentful/f36-components';
import { Checkbox, CheckboxProps } from '../src';

export default {
  title: 'Form Elements/Checkbox',
  component: Checkbox,
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

export const Basic = (args: CheckboxProps) => {
  const [optionOne, setOptionOne] = useState(false);
  const [optionTwo, setOptionTwo] = useState(false);

  return (
    <FieldGroup>
      <Checkbox
        {...args}
        id="Checkbox1"
        isChecked={optionOne}
        value="yes"
        onChange={(e) => setOptionOne((e.target as HTMLInputElement).checked)}
      />
      <Checkbox
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
};

export const overview = () => (
  <>
    <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingM">
      Checkbox default
    </SectionHeading>

    <Checkbox
      label="Option 1"
      name="someOption"
      value="yes"
      id="termsCheckbox"
    />

    <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingM">
      Checkbox checked
    </SectionHeading>

    <Checkbox
      label="Option 1"
      name="someOption"
      isChecked
      value="yes"
      id="termsCheckbox"
    />

    <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingM">
      Checkbox indeterminate
    </SectionHeading>

    <Checkbox
      label="Option 1"
      name="someOption"
      isIndeterminate
      value="yes"
      id="termsCheckbox"
    />

    <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingM">
      Checkbox disabled
    </SectionHeading>

    <Checkbox
      label="Option 2"
      isDisabled
      name="someOption"
      value="no"
      id="termsCheckboxOption3"
    />

    <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingM">
      Checkbox disabled checked
    </SectionHeading>

    <Checkbox
      label="Option 2"
      isDisabled
      isChecked
      name="someOption"
      value="no"
      id="termsCheckboxOption4"
    />

    <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingM">
      Checkbox disabled indeterminate
    </SectionHeading>

    <Checkbox
      label="Option 1"
      name="someOption"
      isIndeterminate
      isDisabled
      value="yes"
      id="termsCheckbox"
    />
  </>
);
