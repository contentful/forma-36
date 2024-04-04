import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from '@contentful/f36-core';
import { type Density, DensityProvider } from '@contentful/f36-utils';
import { Heading } from '../src/Heading';
import { Subheading } from '../src/Subheading';

export default {
  title: 'Typography/Subheading',
  component: Subheading,
  parameters: {
    propTypes: [Subheading['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
  },
} as Meta<typeof Subheading>;

type Story = StoryObj<typeof Subheading>;

export const Basic: Story = {
  args: {
    as: 'h2',
    children:
      'The quick brown fox jumps over the lazy dog like an over-motivated frog.',
  },
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
              <Heading>{density.name}</Heading>
              <DensityProvider value={density.density as Density}>
                <Subheading {...args} />
              </DensityProvider>
            </Flex>
          );
        })}
      </Flex>
    );
  },
};
