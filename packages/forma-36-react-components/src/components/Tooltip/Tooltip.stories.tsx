import React from 'react';

import Tooltip from './Tooltip';
import Paragraph from '../Typography/Paragraph';
import TextLink from '../TextLink';
import notes from './README.md';

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

export const basic = (args: { content: string }) => {
  return (
    <Tooltip {...args}>
      <TextLink>Hover me</TextLink>
    </Tooltip>
  );
};
basic.args = {
  content: 'I am a Tooltip 🙌',
};
const basicSourceCode = `<Tooltip content="I am a Tooltip 🙌">
  <TextLink>Hover me</TextLink>
</Tooltip>`;
basic.parameters = {
  docs: {
    source: {
      code: basicSourceCode,
    },
  },
};

export const withHtml = (args: { content: string }) => {
  return (
    <Paragraph>
      Lorem Ipsum dolor sit amet &nbsp;
      <Tooltip {...args}>
        <TextLink>Hover me</TextLink>.
      </Tooltip>
      &nbsp; Lorem Ipsum dolor sit amet.
    </Paragraph>
  );
};
withHtml.args = {
  content: (
    <>
      I have some <b style={{ color: 'red' }}>HTML</b> in me
    </>
  ),
};
const withHtmlSourceCode = `<Tooltip content={(
  <>
    I have some <b style={{ color: 'red' }}>HTML</b> in me
  </>
)}>
  <TextLink>Hover me</TextLink>
</Tooltip>`;
withHtml.parameters = {
  docs: {
    source: {
      code: withHtmlSourceCode,
    },
  },
};

export const autoPlacement = (args: { content: string }) => {
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
autoPlacement.args = {
  place: 'auto',
  content: (
    <>
      I will reposition automatically
      <br />
      when you scroll
    </>
  ),
};
const autoPlacementSourceCode = `<Tooltip place="auto" content={<>I will reposition automatically<br/>when you scroll</>}>
  <TextLink>Hover me</TextLink>
</Tooltip>`;
autoPlacement.parameters = {
  docs: {
    source: {
      code: autoPlacementSourceCode,
    },
  },
};
