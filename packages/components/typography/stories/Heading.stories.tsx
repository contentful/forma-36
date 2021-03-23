import React from 'react';
import { Heading, _Heading, HeadingProps } from '../src/Heading';

export default {
  title: 'Typography/Heading',
  component: Heading,
  parameters: {
    propTypes: [_Heading['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
  },
};

export const Basic = (props: HeadingProps<'h1'>) => <Heading {...props} />;

Basic.args = {
  children: 'Heading',
  as: 'h1',
};
