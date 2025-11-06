import React from 'react';
import type { StoryFn, StoryObj, Meta } from '@storybook/react-vite';
import { SectionHeading, Subheading } from '@contentful/f36-typography';
import { Flex } from '@contentful/f36-core';
import tokens from '@contentful/f36-tokens';

import { Spinner } from '../src/';
import type { SpinnerInternalProps } from '../src/Spinner';

export default {
  argTypes: {
    className: { control: { disable: true } },
  },
  component: Spinner,
  parameters: {
    propTypes: Spinner['__docgenInfo'],
  },
  title: 'Components/Spinner',
} as Meta;

export const Default: StoryObj<SpinnerInternalProps> = {
  render: (args) => {
    return <Spinner {...args} />;
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['large', 'medium', 'small'],
    },
    variant: {
      control: {
        type: 'select',
      },
      options: ['primary', 'default', 'white'],
    },
  },
  args: {
    size: 'large',
    variant: 'primary',
  },
};

export const WithText: StoryObj<SpinnerInternalProps> = {
  render: () => {
    return (
      <Flex marginBottom="spacingM">
        Loading <Spinner />
      </Flex>
    );
  },
};

export const Overview: StoryFn = () => {
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
};
