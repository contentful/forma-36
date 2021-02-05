import React, { useState } from 'react';

import RadioButtonField, { RadioButtonFieldProps } from './RadioButtonField';
import FieldGroup from '../Form/FieldGroup';
import Flex from '../Flex/Flex';
import SectionHeading from '../Typography/SectionHeading';

export default {
  title: 'Forms/RadioButtonField',
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
        checked={activeOption === 'yes'}
        value="yes"
        onChange={(e) => {
          setActiveOption((e.target as HTMLInputElement).value);
        }}
        id="termsCheckbox"
      />
      <RadioButtonField
        {...args}
        name="someOption2"
        value="no"
        checked={activeOption === 'no'}
        onChange={(e) => {
          setActiveOption((e.target as HTMLInputElement).value);
        }}
        id="termsCheckboxOption2"
      />
    </FieldGroup>
  );
};

Basic.args = {
  labelText: 'some label text',
  validationMessage: 'validation message',
  helpText: 'help text',
};

export const overview = () => (
  <>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">Radio button field default</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <RadioButtonField
        labelText="Label text"
        helpText="This is a helptext"
        name="someOption"
        value="no"
        id="radioButton1"
      />
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">
        Radio button field with validation message
      </SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <RadioButtonField
        labelText="Label text"
        helpText="This is a helptext"
        validationMessage="validationMessage"
        name="someOption"
        value="no"
        id="radioButton2"
      />
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">Radio button disabled</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <RadioButtonField
        labelText="Label text"
        helpText="This is a helptext"
        disabled
        name="someOption"
        value="no"
        id="radioButton3"
      />
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">
        Radio button with light label
      </SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <RadioButtonField
        labelText="Label text"
        helpText="This is a helptext"
        name="someOption"
        value="no"
        labelIsLight
        id="radioButton4"
      />
    </Flex>
  </>
);
