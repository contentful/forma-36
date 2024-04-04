import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from '@contentful/f36-core';
import { type Density, DensityProvider } from '@contentful/f36-utils';
import { Heading } from '../src/Heading';
import { Paragraph } from '../src/Paragraph';

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
  parameters: {
    propTypes: [Paragraph['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
  },
} as Meta<typeof Paragraph>;

type Story = StoryObj<typeof Paragraph>;

export const Basic: Story = {
  args: {
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
                <Paragraph {...args} />
              </DensityProvider>
            </Flex>
          );
        })}
      </Flex>
    );
  },
};
