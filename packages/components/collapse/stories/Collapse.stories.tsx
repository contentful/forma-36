import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@contentful/f36-core';
import { SectionHeading, Text } from '@contentful/f36-typography';
import { Button } from '@contentful/f36-button';
import { Collapse } from '../src';

export default {
  title: 'Animation/Collapse',
  component: Collapse,
  parameters: {
    propTypes: [Collapse['__docgenInfo']],
  },
  argTypes: {
    children: { control: { disable: true } },
    className: { control: { disable: true } },
    isExpanded: { control: { type: 'checkbox' } },
  },
} as Meta<typeof Collapse>;

type Story = StoryObj<typeof Collapse>;

const defaultText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat.`;

export const Basic: Story = {
  render: () => {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
      <Stack flexDirection="column">
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label={`${isExpanded ? 'Collapse' : 'Expand'} foo content`}
          aria-controls="collapsible-foo"
          aria-expanded={isExpanded}
        >
          Toggle content
        </Button>
        <Collapse id="collapsible-foo" isExpanded={isExpanded}>
          <SectionHeading>Collapsable Element</SectionHeading>
          <Text>{defaultText}</Text>
        </Collapse>
      </Stack>
    );
  },
};
