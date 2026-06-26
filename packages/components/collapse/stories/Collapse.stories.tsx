import React, { useEffect, useState } from 'react';
import type { StoryObj } from '@storybook/react-vite';
import { Stack } from '@contentful/f36-core';
import { SectionHeading, Text } from '@contentful/f36-typography';
import { Button } from '@contentful/f36-button';
import tokens, { type TransitionDurationTokens } from '@contentful/f36-tokens';

import { Collapse, CollapseProps } from '../src';

const transitionDurationOptions = Object.keys(tokens).filter((key) =>
  key.startsWith('transitionDuration'),
) as TransitionDurationTokens[];

export default {
  title: 'Animation/Collapse',
  component: Collapse,
  parameters: {
    propTypes: [Collapse['__docgenInfo']],
  },
  argTypes: {
    children: { control: { disable: true } },
    className: { control: { disable: true } },
    isExpanded: { control: 'boolean' },
    transitionDuration: {
      control: 'select',
      options: transitionDurationOptions,
    },
  },
};

const defaultText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat.`;

export const Basic: StoryObj<CollapseProps> = (args) => {
  const [isExpanded, setIsExpanded] = useState(args.isExpanded);
  useEffect(() => {
    setIsExpanded(args.isExpanded);
  }, [args.isExpanded]);

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
      <Collapse
        id="collapsible-foo"
        isExpanded={isExpanded}
        transitionDuration={args.transitionDuration}
      >
        <SectionHeading>Collapsable Element</SectionHeading>
        <Text>{defaultText}</Text>
      </Collapse>
    </Stack>
  );
};

Basic.args = {
  isExpanded: false,
  transitionDuration: 'transitionDurationDefault',
};

export const Expanded: StoryObj<CollapseProps> = (args) => {
  const [isExpanded, setIsExpanded] = useState(args.isExpanded);
  useEffect(() => {
    setIsExpanded(args.isExpanded);
  }, [args.isExpanded]);

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
};

Expanded.args = {
  isExpanded: true,
};

export const Nested: StoryObj<CollapseProps> = (args) => {
  const [isExpanded, setIsExpanded] = useState(args.isExpanded);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsExpanded(args.isExpanded);
  }, [args.isExpanded]);

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
      <Collapse id="collapsible-outer" isExpanded={isExpanded}>
        <Button onClick={() => setIsOpen(!isOpen)}>Toggle inner</Button>

        <Collapse isExpanded={isOpen} id="collapsible-inner">
          <Text>{defaultText}</Text>
        </Collapse>
      </Collapse>
    </Stack>
  );
};
Nested.args = {
  isExpanded: false,
};

export const TransitionDuration: StoryObj<CollapseProps> = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const durations = transitionDurationOptions.map((value) => ({
    label: value.replace('transitionDuration', ''),
    value,
  }));

  return (
    <Stack flexDirection="column" spacing="spacingL">
      <Button onClick={() => setIsExpanded(!isExpanded)}>Toggle all</Button>
      {durations.map(({ label, value }) => (
        <Stack key={label} flexDirection="column" spacing="spacingXs">
          <Text fontWeight="fontWeightMedium">
            {label} ({tokens[value]})
          </Text>
          <Collapse isExpanded={isExpanded} transitionDuration={value}>
            <Text>{defaultText}</Text>
          </Collapse>
        </Stack>
      ))}
    </Stack>
  );
};

TransitionDuration.args = {
  isExpanded: false,
  transitionDuration: 'transitionDurationDefault',
};
