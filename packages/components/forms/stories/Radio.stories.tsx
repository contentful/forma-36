import React, { useState } from 'react';
import { SectionHeading } from '@contentful/f36-typography';
import { Radio, RadioProps } from '../src';
import { Flex, Box } from '@contentful/f36-core';

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
    <Flex>
      <Box marginRight="spacingS">
        <Radio
          {...args}
          name="basic"
          value="yes"
          isChecked={activeOption === 'yes'}
          onChange={(e) => {
            setActiveOption((e.target as HTMLInputElement).value);
          }}
          id="termsCheckboxOption1"
        >
          Yes
        </Radio>
      </Box>
      <Box marginRight="spacingS">
        <Radio
          {...args}
          name="basic"
          value="no"
          isChecked={activeOption === 'no'}
          onChange={(e) => {
            setActiveOption((e.target as HTMLInputElement).value);
          }}
          id="termsCheckboxOption2"
        >
          No
        </Radio>
      </Box>
    </Flex>
  );
};

export const overview = () => (
  <>
    <SectionHeading as="h3" marginBottom="spacingS">
      Radio default
    </SectionHeading>

    <Flex marginBottom="spacingS">
      <Radio name="radioButton1" value="no" id="radioButton1">
        Label text
      </Radio>
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Radio disabled
    </SectionHeading>

    <Flex marginBottom="spacingS">
      <Radio isDisabled name="radioButton2" value="no" id="radioButton2">
        Label text
      </Radio>
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Radio disabled checked
    </SectionHeading>

    <Flex marginBottom="spacingS">
      <Radio
        isDisabled
        isChecked
        name="radioButton3"
        value="no"
        id="radioButton3"
      >
        Label text
      </Radio>
    </Flex>
  </>
);
