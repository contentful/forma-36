import React from 'react';
import { Heading, Paragraph, SectionHeading } from '@contentful/f36-typography';
import { Tooltip } from '../src/Tooltip';
import { TextLink } from '@contentful/f36-text-link';
import { Flex } from '@contentful/f36-core';
import { StarIcon } from '@contentful/f36-icons';
import { Icon } from '@contentful/f36-icon';
import tokens from '@contentful/f36-tokens';

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
};

export const Basic = (args: { content: string }) => {
  return (
    <Tooltip {...args}>
      <TextLink href="/">Hover me</TextLink>
    </Tooltip>
  );
};

Basic.args = {
  content: 'I am a Tooltip 🙌',
};

const BasicSourceCode = `<Tooltip content="I am a Tooltip 🙌">
  <TextLink>Hover me</TextLink>
</Tooltip>`;

Basic.parameters = {
  docs: {
    source: {
      code: BasicSourceCode,
    },
  },
};

export const AutoPlacement = (args: { content: string }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '300px',
        display: 'flex',
        alignItems: 'center',
        overflowY: 'scroll',
        border: '1px dashed gray',
        borderRadius: '3px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '600px',
          width: '300px',
        }}
      >
        <Tooltip {...args}>
          <TextLink href="/">Hover me</TextLink>
        </Tooltip>
      </div>
    </div>
  );
};

AutoPlacement.args = {
  placement: 'auto',
  isVisible: true,
  content: (
    <>
      I will reposition automatically
      <br />
      when you scroll
    </>
  ),
};

const AutoPlacementSourceCode = `<Tooltip placement="auto" content={<>I will reposition automatically<br/>when you scroll</>}>
  <TextLink>Hover me</TextLink>
</Tooltip>`;

AutoPlacement.parameters = {
  docs: {
    source: {
      code: AutoPlacementSourceCode,
    },
  },
};

export const TooltipTriggerElements = () => {
  return (
    <div>
      <Tooltip content="Tooltip content">
        <Icon as={StarIcon} />
      </Tooltip>
    </div>
  );
};

export const Overview = () => {
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
};

export const WithDelays = () => {
  return (
    <>
      <SectionHeading as="h3" marginBottom="spacingS">
        Show Delay (1s)
      </SectionHeading>

      <Flex marginBottom="spacingS">
        <Tooltip content="I am a Tooltip 🙌" maxWidth={360} showDelay={1000}>
          <TextLink href="/">Hover me</TextLink>
        </Tooltip>
      </Flex>

      <SectionHeading as="h3" marginBottom="spacingS">
        Hide Delay (1s)
      </SectionHeading>

      <Flex marginBottom="spacingS">
        <Tooltip content="I am a Tooltip 🙌" maxWidth={360} hideDelay={1000}>
          <TextLink href="/">Hover me</TextLink>
        </Tooltip>
      </Flex>
    </>
  );
};

export const WithReactElement = () => {
  return (
    <>
      <SectionHeading as="h3" marginBottom="spacingS">
        With React Elements as children
      </SectionHeading>

      <Flex marginBottom="spacingS">
        <Tooltip
          label="Render a paragraph with a React Element"
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
};
