import React from 'react';
import Paragraph, { ParagraphProps } from './Paragraph';

export default {
  title: 'Components/Typography/Paragraph',
  component: Paragraph,
  parameters: {
    propTypes: [Paragraph['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
  },
};

interface Args extends ParagraphProps {
  paragraphText: string;
}

export const Basic = ({ paragraphText, ...args }: Args) => (
  <Paragraph {...args}>{paragraphText}</Paragraph>
);

Basic.args = {
  element: 'p',
  paragraphText: 'Parahraph',
};
