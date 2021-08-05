import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
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

export const Default: Story<SpinnerInternalProps> = (args) => {
  return <Spinner {...args} />;
};

Default.args = {
  size: 'large',
  variant: 'primary',
};

export const WithText: Story<SpinnerInternalProps> = (args) => {
  return (
    <>
      Loading <Spinner {...args} />
    </>
  );
};

export const Overview: Story = () => {
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
        <Subheading style={{ color: tokens.colorWhite }}>Loading</Subheading>{' '}
        <Spinner variant="white" />
      </Flex>
    </>
  );
};
