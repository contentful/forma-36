import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Flex } from '@contentful/f36-core';
import { SectionHeading, Text } from '@contentful/f36-typography';

import { Card, type CardProps } from '../src';

export default {
  argTypes: {
    as: { control: { disable: true } },
    className: { control: { disable: true } },
    rel: { control: { disable: true } },
    style: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
  component: Card,
  parameters: {
    propTypes: Card['__docgenInfo'],
  },
  title: 'Containers/Card',
} as Meta;

export const basic: Story<CardProps> = (args) => {
  return (
    <Flex flexDirection="column" marginBottom="spacingL">
      <SectionHeading as="h3" marginBottom="spacingS">
        Default padding
      </SectionHeading>

      <Card {...args} padding="default">
        <Text>This is the Card’s content</Text>
      </Card>

      <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingM">
        Large padding
      </SectionHeading>

      <Card {...args} padding="large">
        <Text>This is the Card’s content</Text>
      </Card>

      <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingM">
        No padding
      </SectionHeading>

      <Card {...args} padding="none">
        <Text>This is the Card’s content</Text>
      </Card>
    </Flex>
  );
};

basic.args = {};
