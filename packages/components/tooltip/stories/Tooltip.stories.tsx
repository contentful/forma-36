import React from 'react';
import { SectionHeading } from '@contentful/f36-typography';
import { Tooltip } from '../src/Tooltip';
import { TextLink } from '@contentful/f36-text-link';
import { Flex } from '@contentful/f36-core';

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
      <TextLink>Hover me</TextLink>
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
          <TextLink>Hover me</TextLink>
        </Tooltip>
      </div>
    </div>
  );
};

AutoPlacement.args = {
  place: 'auto',
  content: (
    <>
      I will reposition automatically
      <br />
      when you scroll
    </>
  ),
};

const AutoPlacementSourceCode = `<Tooltip place="auto" content={<>I will reposition automatically<br/>when you scroll</>}>
  <TextLink>Hover me</TextLink>
</Tooltip>`;

AutoPlacement.parameters = {
  docs: {
    source: {
      code: AutoPlacementSourceCode,
    },
  },
};

export const Overview = () => {
  return (
    <>
      <Flex marginBottom="spacingS">
        <SectionHeading as="h3">Tooltip disabled</SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <Tooltip content="I am a Tooltip 🙌" maxWidth={360} placement="top">
          <TextLink isDisabled>Hover me</TextLink>
        </Tooltip>
      </Flex>

      <Flex marginBottom="spacingS">
        <SectionHeading as="h3">Tooltip left</SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <Tooltip
          content="I am a Tooltip 🙌"
          maxWidth={360}
          placement="left"
          isVisible
        >
          <TextLink isDisabled={false}>Hover me</TextLink>
        </Tooltip>
      </Flex>

      <Flex marginBottom="spacingS">
        <SectionHeading as="h3">Tooltip right</SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <Tooltip
          content="I am a Tooltip 🙌"
          maxWidth={360}
          placement="right"
          isVisible
        >
          <TextLink isDisabled={false}>Hover me</TextLink>
        </Tooltip>
      </Flex>
      <Flex marginBottom="spacingS">
        <SectionHeading as="h3">Tooltip top</SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <Tooltip
          content="I am a Tooltip 🙌"
          maxWidth={360}
          placement="top"
          isVisible
        >
          <TextLink isDisabled={false}>Hover me</TextLink>
        </Tooltip>
      </Flex>
      <Flex marginBottom="spacingS">
        <SectionHeading as="h3">Tooltip bottom</SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <Tooltip
          content="I am a Tooltip 🙌"
          maxWidth={360}
          placement="bottom"
          isVisible
        >
          <TextLink isDisabled={false}>Hover me</TextLink>
        </Tooltip>
      </Flex>
    </>
  );
};
