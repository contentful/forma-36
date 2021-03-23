import React from 'react';

import { Subheading, SubheadingProps } from '../src/Subheading';

export default {
  title: 'Typography/Subheading',
  component: Subheading,
  parameters: {
    propTypes: [Subheading['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
  },
};

export const Basic = (props: SubheadingProps<'h2'>) => (
  <Subheading {...props} />
);

Basic.args = {
  as: 'h2',
  children: 'Subheading',
};
