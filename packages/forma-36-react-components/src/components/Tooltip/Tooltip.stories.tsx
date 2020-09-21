import React from 'react';

import Tooltip from './Tooltip';
import Paragraph from '../Typography/Paragraph';
import TextLink from '../TextLink';

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

export const basic = (args: { content: string }) => {
  return (
    <Tooltip {...args}>
      <TextLink>Hover me</TextLink>
    </Tooltip>
  );
};
basic.args = {
  content: (
    <>
      I am a<br />
      multiline <b>Tooltip</b>
      <br />
      🙌
    </>
  ),
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
      I have some
      <div style={{ color: 'red' }}>HTML</div>
      in me
    </>
  ),
};

export const autoPlacement = (args: { content: string }) => {
  return (
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
  );
};
autoPlacement.args = {
  content: 'I will reposition automatically when you scroll',
};
