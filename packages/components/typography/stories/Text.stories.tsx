import React from 'react';

import { Text, TextProps } from '../src/Text/Text';

export default {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    propTypes: [Text['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '100px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Basic = (props: TextProps<'span'>) => <Text {...props} />;

Basic.args = {
  children: 'Text',
};

export const Truncated = (props: TextProps<'span'>) => <Text {...props} />;

Truncated.args = {
  children:
    'This is an example of a truncated text with a fallback title to support screen readers.',
  isTruncated: true,
  as: 'p',
};
