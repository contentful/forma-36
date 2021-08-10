import React from 'react';

import { Text, TextProps } from '../src/Text';

export default {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    propTypes: [Text['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
  },
};

export const Basic = (props: TextProps<'span'>) => <Text {...props} />;

Basic.args = {
  children: 'Text',
};
