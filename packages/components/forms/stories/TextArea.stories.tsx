import React from 'react';
// import { SectionHeading } from '@contentful/f36-typography';
import { TextArea, TextAreaProps } from '../src/textarea';

// import { Flex } from '@contentful/f36-core';

export default {
  title: 'Form Elements/TextArea',
  component: TextArea,
};

export const Basic = (args: TextAreaProps) => <TextArea {...args} />;
Basic.args = {
  label: 'My textarea field',
};
