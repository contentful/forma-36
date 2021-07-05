import React from 'react';

import { SectionHeading, SectionHeadingProps } from '../src/SectionHeading';

export default {
  title: 'Typography/SectionHeading',
  component: SectionHeading,
  parameters: {
    propTypes: [SectionHeading['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
  },
};

export const Basic = (props: SectionHeadingProps<'h3'>) => (
  <SectionHeading {...props} />
);

Basic.args = {
  children: 'Section heading',
};
