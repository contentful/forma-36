import React from 'react';

import { SectionHeading, SectionHeadingProps } from './SectionHeading';

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

interface Args extends SectionHeadingProps {
  sectionHeadingText: string;
}

export const Basic = ({ sectionHeadingText, ...args }: Args) => (
  <SectionHeading {...args}>{sectionHeadingText}</SectionHeading>
);

Basic.args = {
  sectionHeadingText: 'Section heading',
};
