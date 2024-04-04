import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Heading, SectionHeading } from '@contentful/f36-typography';
import { Flex, Box } from '@contentful/f36-core';
import { type Density, DensityProvider } from '@contentful/f36-utils';

import { Radio } from '../src';

export default {
  title: 'Form Elements/Radio',
  component: Radio,
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
} as Meta<typeof Radio>;

type Story = StoryObj<typeof Radio>;

export const Basic: Story = {
  render: (args) => {
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
  },
};

export const Overview: Story = {
  render: () => (
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
  ),
};

export const WithDensitySupport: Story = {
  render: (args) => {
    const Densities = [
      {
        name: 'Low density',
        density: 'low',
      },
      {
        name: 'High density',
        density: 'high',
      },
    ];

    return (
      <Flex gap="spacing2Xl">
        {Densities.map((density) => {
          return (
            <Flex
              key={density.name}
              flexDirection="column"
              style={{ width: '230px' }}
            >
              <Heading>{density.name}</Heading>
              <DensityProvider value={density.density as Density}>
                <Radio {...args} name={density.name}>
                  {density.name}
                </Radio>
              </DensityProvider>
            </Flex>
          );
        })}
      </Flex>
    );
  },
};
