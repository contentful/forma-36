import React from 'react';
import { Flex } from '@contentful/f36-core';
import type { Meta, StoryObj } from '@storybook/react';
import { type Density, DensityProvider } from '@contentful/f36-utils';
import { Caption } from '../src/Caption';
import { Paragraph } from '../src/Paragraph';
import { Heading } from '../src/Heading';

export default {
  title: 'Typography/Caption',
  component: Caption,
  parameters: {
    propTypes: [Caption['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
  },
} as Meta<typeof Caption>;

type Story = StoryObj<typeof Caption>;

export const Basic: Story = {
  args: {
    children:
      'The quick brown fox jumps over the lazy dog like an over-motivated frog.',
  },
};

export const Overview: Story = {
  args: {
    children:
      'The quick brown fox jumps over the lazy dog like an over-motivated frog.',
  },
  render: (args) => (
    <>
      <Flex alignItems="center" gap="spacingS">
        <Paragraph marginBottom="none">fontWeightNormal</Paragraph>
        <Caption {...args} fontWeight="fontWeightNormal" />
      </Flex>

      <Flex alignItems="center" gap="spacingS">
        <Paragraph marginBottom="none">fontWeightMedium</Paragraph>
        <Caption {...args} fontWeight="fontWeightMedium" />
      </Flex>
    </>
  ),
};

export const WithDensitySupport: Story = {
  args: {
    children:
      'The quick brown fox jumps over the lazy dog like an over-motivated frog.',
  },
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
              <Heading marginBottom="spacingXs">{density.name}</Heading>
              <DensityProvider value={density.density as Density}>
                <Caption {...args} />
              </DensityProvider>
            </Flex>
          );
        })}
      </Flex>
    );
  },
};
