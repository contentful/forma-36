import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from '@contentful/f36-core';
import { type Density, DensityProvider } from '@contentful/f36-utils';
import { Heading } from '@contentful/f36-typography';
import { ValidationMessage } from '../src';

export default {
  title: 'Form Elements/ValidationMessage',
  component: ValidationMessage,
  parameters: {
    propTypes: [ValidationMessage['__docgenInfo']],
  },
  argTypes: {
    as: { control: { disable: true } },
    className: { control: { disable: true } },
    display: { control: { disable: true } },
    style: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
} as Meta<typeof ValidationMessage>;

type Story = StoryObj<typeof ValidationMessage>;

export const Default: Story = {
  args: {
    children: 'Validation message',
  },
  render: (args) => <ValidationMessage {...args} />,
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
                <ValidationMessage {...args} />
              </DensityProvider>
            </Flex>
          );
        })}
      </Flex>
    );
  },
};
