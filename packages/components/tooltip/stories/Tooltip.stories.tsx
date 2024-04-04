import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Heading, Paragraph, SectionHeading } from '@contentful/f36-typography';
import { TextLink } from '@contentful/f36-text-link';
import { Flex } from '@contentful/f36-core';
import tokens from '@contentful/f36-tokens';
import { Tooltip } from '../src/Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    propTypes: Tooltip['__docgenInfo'],
  },
  argTypes: {
    content: { control: 'text' },
    children: { control: { disable: true } },
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
} as Meta<typeof Tooltip>;

type Story = StoryObj<typeof Tooltip>;

export const Basic: Story = {
  args: {
    content: 'I am a Tooltip 🙌',
  },
  render: (args) => {
    return (
      <Tooltip {...args}>
        <TextLink href="/">Hover me</TextLink>
      </Tooltip>
    );
  },
};

export const AutoPlacement: Story = {
  args: {
    placement: 'auto',
    content: `I will reposition automatically
        when you scroll`,
  },
  render: (args) => {
    return (
      <div
        style={{
          height: '300px',
          width: '100%',
          overflowY: 'scroll',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '600px',
            width: '100%',
          }}
        >
          <Tooltip {...args}>
            <TextLink href="/">Hover me</TextLink>
          </Tooltip>
        </div>
      </div>
    );
  },
};

export const Overview: Story = {
  render: () => {
    return (
      <>
        <SectionHeading as="h3" marginBottom="spacingS">
          Tooltip disabled
        </SectionHeading>
        <Flex marginBottom="spacingS">
          <Tooltip content="I am a Tooltip 🙌" maxWidth={360} placement="top">
            <TextLink href="/" isDisabled>
              Hover me
            </TextLink>
          </Tooltip>
        </Flex>

        <SectionHeading as="h3" marginBottom="spacingS">
          Tooltip left
        </SectionHeading>

        <Flex marginBottom="spacingS">
          <Tooltip
            content="I am a Tooltip 🙌"
            maxWidth={360}
            placement="left"
            isVisible
          >
            <TextLink href="/" isDisabled={false}>
              Hover me
            </TextLink>
          </Tooltip>
        </Flex>

        <SectionHeading as="h3" marginBottom="spacingS">
          Tooltip right
        </SectionHeading>

        <Flex marginBottom="spacingS">
          <Tooltip
            content="I am a Tooltip 🙌"
            maxWidth={360}
            placement="right"
            isVisible
          >
            <TextLink href="/" isDisabled={false}>
              Hover me
            </TextLink>
          </Tooltip>
        </Flex>

        <SectionHeading as="h3" marginBottom="spacingS">
          Tooltip top
        </SectionHeading>

        <Flex marginBottom="spacingS">
          <Tooltip
            content="I am a Tooltip 🙌"
            maxWidth={360}
            placement="top"
            isVisible
          >
            <TextLink href="/" isDisabled={false}>
              Hover me
            </TextLink>
          </Tooltip>
        </Flex>

        <SectionHeading as="h3" marginBottom="spacingS">
          Tooltip bottom
        </SectionHeading>

        <Flex marginBottom="spacingS">
          <Tooltip
            content="I am a Tooltip 🙌"
            maxWidth={360}
            placement="bottom"
            isVisible
          >
            <TextLink href="/" isDisabled={false}>
              Hover me
            </TextLink>
          </Tooltip>
        </Flex>
      </>
    );
  },
};

export const WithDelays: Story = {
  render: () => {
    return (
      <>
        <SectionHeading as="h3" marginBottom="spacingS">
          Show Delay
        </SectionHeading>

        <Flex marginBottom="spacingS">
          <Tooltip content="I am a Tooltip 🙌" maxWidth={360} showDelay={400}>
            <TextLink href="/">Hover me</TextLink>
          </Tooltip>
        </Flex>
        <Flex marginBottom="spacingS">
          <Tooltip content="I am a Tooltip 🙌" maxWidth={360} showDelay={400}>
            <TextLink href="/">Hover me</TextLink>
          </Tooltip>
        </Flex>

        <SectionHeading as="h3" marginBottom="spacingS">
          Hide Delay
        </SectionHeading>

        <Flex marginBottom="spacingS">
          <Tooltip content="I am a Tooltip 🙌" maxWidth={360} hideDelay={400}>
            <TextLink href="/">Hover me</TextLink>
          </Tooltip>
        </Flex>
        <Flex marginBottom="spacingS">
          <Tooltip content="I am a Tooltip 🙌" maxWidth={360} hideDelay={400}>
            <TextLink href="/">Hover me</TextLink>
          </Tooltip>
        </Flex>
      </>
    );
  },
};

export const WithReactElement: Story = {
  render: () => {
    return (
      <>
        <SectionHeading as="h3" marginBottom="spacingS">
          With React Elements as children
        </SectionHeading>

        <Flex marginBottom="spacingS">
          <Tooltip
            label="Render a paragrah with a React Element"
            content={
              <Flex flexDirection="column">
                <Heading style={{ color: tokens.colorWhite }}>
                  I am a Heading
                </Heading>
                <Paragraph style={{ color: tokens.colorWhite }}>
                  I am a paragraph
                </Paragraph>
              </Flex>
            }
          >
            <TextLink href="/">Hover me</TextLink>
          </Tooltip>
        </Flex>
      </>
    );
  },
};
