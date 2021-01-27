import React from 'react';

import Tooltip from './Tooltip';
import Paragraph from '../Typography/Paragraph';
import TextLink from '../TextLink';
import SectionHeading from '../Typography/SectionHeading';
import Flex from '../Flex/Flex';
import notes from './README.mdx';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    propTypes: Tooltip['__docgenInfo'],
    notes,
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

export const WithHtml = (args: { content: string }) => {
  return (
    <Paragraph>
      Lorem Ipsum dolor sit amet&nbsp;
      <Tooltip {...args}>
        <TextLink>Hover me</TextLink>.
      </Tooltip>
      &nbsp; Lorem Ipsum dolor sit amet.
    </Paragraph>
  );
};

WithHtml.args = {
  content: (
    <>
      I have some <b style={{ color: 'red' }}>HTML</b> in me
    </>
  ),
};

const WithHtmlSourceCode = `<Tooltip content={(
  <>
    I have some <b style={{ color: 'red' }}>HTML</b> in me
  </>
)}>
  <TextLink>Hover me</TextLink>
</Tooltip>`;

WithHtml.parameters = {
  docs: {
    source: {
      code: WithHtmlSourceCode,
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

export const ContentHover = (args: { content: string }) => {
  return (
    <Paragraph>
      Lorem Ipsum dolor sit amet&nbsp;
      <Tooltip {...args}>
        <TextLink>Hover me</TextLink>.
      </Tooltip>
      &nbsp; Lorem Ipsum dolor sit amet.
    </Paragraph>
  );
};

ContentHover.args = {
  hideDelay: 300,
  content: (
    <>
      You can interact with the content in me
      <br />
      <button type="button">Button</button>
      <br />
      <a
        style={{ color: 'white' }}
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Click me!
      </a>
    </>
  ),
};

const ContentHoverSourceCode = `<Tooltip hideDelay={300} content={(
  <>
    You can interact with the content in me
    <br />
    <button type="button">Button</button>
    <br />
    <a style={{ color: 'white' }} href="/" target="_blank" rel="noopener noreferrer">Click me!</a>
  </>
)}>
  <TextLink>Hover me</TextLink>
</Tooltip>`;

ContentHover.parameters = {
  docs: {
    source: {
      code: ContentHoverSourceCode,
    },
  },
};

export const Overview = () => {
  return (
    <>
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Tooltip disabled</SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <Tooltip content="I am a Tooltip 🙌" maxWidth={360} place="top">
          <TextLink disabled iconPosition="left" linkType="primary">
            Hover me
          </TextLink>
        </Tooltip>
      </Flex>

      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Tooltip left</SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <Tooltip
          content="I am a Tooltip 🙌"
          maxWidth={360}
          place="left"
          isVisible
        >
          <TextLink disabled={false} iconPosition="left" linkType="primary">
            Hover me
          </TextLink>
        </Tooltip>
      </Flex>

      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Tooltip right</SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <Tooltip
          content="I am a Tooltip 🙌"
          maxWidth={360}
          place="right"
          isVisible
        >
          <TextLink disabled={false} iconPosition="left" linkType="primary">
            Hover me
          </TextLink>
        </Tooltip>
      </Flex>
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Tooltip top</SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <Tooltip
          content="I am a Tooltip 🙌"
          maxWidth={360}
          place="top"
          isVisible
        >
          <TextLink disabled={false} iconPosition="left" linkType="primary">
            Hover me
          </TextLink>
        </Tooltip>
      </Flex>
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Tooltip bottom</SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <Tooltip
          content="I am a Tooltip 🙌"
          maxWidth={360}
          place="bottom"
          isVisible
        >
          <TextLink disabled={false} iconPosition="left" linkType="primary">
            Hover me
          </TextLink>
        </Tooltip>
      </Flex>
    </>
  );
};
