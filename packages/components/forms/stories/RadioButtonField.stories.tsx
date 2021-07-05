import React, { useState } from 'react';
import { SectionHeading } from '@contentful/f36-typography';
import {
  RadioButtonField,
  RadioButtonFieldProps,
} from '../src/radio-button-field';
import { FieldGroup } from '@contentful/f36-components';
import { Flex } from '@contentful/f36-core';

export default {
  title: 'Form Elements/RadioButtonField',
  component: RadioButtonField,
  parameters: {
    propTypes: [RadioButtonField['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

export const Basic = (args: RadioButtonFieldProps) => {
  const [activeOption, setActiveOption] = useState('yes');
  return (
    <FieldGroup>
      <RadioButtonField
        {...args}
        name="someOption1"
        value="yes"
        isChecked={activeOption === 'yes'}
        onChange={(e) => {
          setActiveOption((e.target as HTMLInputElement).value);
        }}
        id="termsCheckbox"
      />
      <RadioButtonField
        {...args}
        name="someOption2"
        value="no"
        isChecked={activeOption === 'no'}
        onChange={(e) => {
          setActiveOption((e.target as HTMLInputElement).value);
        }}
        id="termsCheckboxOption2"
      />
    </FieldGroup>
  );
};

Basic.args = {
  label: 'some label text',
  validationMessage: 'validation message',
  helpText: 'help text',
};

export const overview = () => (
  <>
    <Flex marginBottom="spacingS">
      <SectionHeading as="h3">Radio button field default</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <RadioButtonField
        label="Label text"
        helpText="This is a helptext"
        name="someOption"
        value="no"
        id="radioButton1"
      />
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading as="h3">
        Radio button field with validation message
      </SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <RadioButtonField
        label="Label text"
        helpText="This is a helptext"
        validationMessage="validationMessage"
        name="someOption"
        value="no"
        id="radioButton2"
      />
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading as="h3">Radio button disabled</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <RadioButtonField
        label="Label text"
        helpText="This is a helptext"
        isDisabled
        name="someOption"
        value="no"
        id="radioButton3"
      />
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading as="h3">Radio button disabled checked</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <RadioButtonField
        label="Label text"
        helpText="This is a helptext"
        isDisabled
        isChecked
        name="someOption"
        value="no"
        id="radioButton3"
      />
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading as="h3">Radio button with light label</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <RadioButtonField
        label="Label text"
        helpText="This is a helptext"
        name="someOption"
        value="no"
        isLabelLight
        id="radioButton4"
      />
    </Flex>
  </>
);
