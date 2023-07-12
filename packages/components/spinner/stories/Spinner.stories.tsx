import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SectionHeading, Subheading } from '@contentful/f36-typography';
import { Flex } from '@contentful/f36-core';
import tokens from '@contentful/f36-tokens';

import { Spinner } from '../src/';

export default {
  argTypes: {
    className: { control: { disable: true } },
  },
  component: Spinner,
  parameters: {
    propTypes: Spinner['__docgenInfo'],
  },
  title: 'Components/Spinner',
} as Meta<typeof Spinner>;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    size: 'large',
    variant: 'primary',
  },
};

export const WithText: Story = {
  render: (args) => {
    return (
      <>
        Loading <Spinner {...args} />
      </>
    );
  },
};

export const Overview: Story = {
  render: () => {
    return (
      <>
        <SectionHeading as="h3" marginBottom="spacingS">
          Spinner colors
        </SectionHeading>

        <Flex marginBottom="spacingM">
          Loading <Spinner variant="default" />
        </Flex>

        <Flex marginBottom="spacingM">
          Loading <Spinner variant="primary" />
        </Flex>

        <Flex
          marginBottom="spacingM"
          padding="spacingL"
          style={{ backgroundColor: tokens.colorContrastDark }}
        >
          <Subheading style={{ color: tokens.colorWhite }} marginBottom="none">
            Loading
          </Subheading>{' '}
          <Spinner variant="white" />
        </Flex>
      </>
    );
  },
};
