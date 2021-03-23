import React from 'react';

import { Paragraph, _Paragraph, ParagraphProps } from '../src/Paragraph';

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
  parameters: {
    propTypes: [_Paragraph['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
  },
};

export const Basic = (props: ParagraphProps<'p'>) => <Paragraph {...props} />;

Basic.args = {
  children: 'Paragraph',
};
