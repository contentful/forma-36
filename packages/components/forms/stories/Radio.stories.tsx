import React, { useState } from 'react';
import { SectionHeading } from '@contentful/f36-typography';
import { Radio, RadioProps } from '../src';
import { FieldGroup } from '@contentful/f36-components';
import { Flex } from '@contentful/f36-core';

export default {
  title: 'Form Elements/Radio',
  component: Radio,
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

export const Basic = (args: RadioProps) => {
  const [activeOption, setActiveOption] = useState('yes');
  return (
    <FieldGroup>
      <Radio
        {...args}
        name="someOption1"
        value="yes"
        isChecked={activeOption === 'yes'}
        onChange={(e) => {
          setActiveOption((e.target as HTMLInputElement).value);
        }}
        id="termsCheckbox"
      />
      <Radio
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
};

export const overview = () => (
  <>
    <SectionHeading as="h3" marginBottom="spacingS">
      Radio default
    </SectionHeading>

    <Flex marginBottom="spacingS">
      <Radio
        label="Label text"
        name="someOption"
        value="no"
        id="radioButton1"
      />
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Radio disabled
    </SectionHeading>

    <Flex marginBottom="spacingS">
      <Radio
        label="Label text"
        isDisabled
        name="someOption"
        value="no"
        id="radioButton3"
      />
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Radio disabled checked
    </SectionHeading>

    <Flex marginBottom="spacingS">
      <Radio
        label="Label text"
        isDisabled
        isChecked
        name="someOption"
        value="no"
        id="radioButton3"
      />
    </Flex>
  </>
);
