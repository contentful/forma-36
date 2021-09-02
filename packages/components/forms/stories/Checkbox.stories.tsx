import React, { useState } from 'react';
import { SectionHeading } from '@contentful/f36-typography';
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
    <>
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
        value="no"
        isChecked={optionTwo}
        onChange={(e) => setOptionTwo((e.target as HTMLInputElement).checked)}
      />
    </>
  );
};

Basic.args = {
  children: 'some label text',
  name: 'some name',
};

export const overview = () => (
  <>
    <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingM">
      Checkbox default
    </SectionHeading>

    <Checkbox name="someOption1" value="yes" id="termsCheckbox1">
      Option 1
    </Checkbox>

    <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingM">
      Checkbox checked
    </SectionHeading>

    <Checkbox name="someOption2" isChecked value="yes" id="termsCheckbox2">
      Option 1
    </Checkbox>

    <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingM">
      Checkbox indeterminate
    </SectionHeading>

    <Checkbox
      name="someOption3"
      isIndeterminate
      value="yes"
      id="termsCheckbox3"
    >
      Option 1
    </Checkbox>

    <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingM">
      Checkbox disabled
    </SectionHeading>

    <Checkbox isDisabled name="someOption4" value="no" id="termsCheckbox4">
      Option 2
    </Checkbox>

    <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingM">
      Checkbox disabled checked
    </SectionHeading>

    <Checkbox
      isDisabled
      isChecked
      name="someOption5"
      value="no"
      id="termsCheckbox5"
    >
      Option 2
    </Checkbox>

    <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingM">
      Checkbox disabled indeterminate
    </SectionHeading>

    <Checkbox
      name="someOption6"
      isIndeterminate
      isDisabled
      value="yes"
      id="termsCheckbox6"
    >
      Option 1
    </Checkbox>
  </>
);
