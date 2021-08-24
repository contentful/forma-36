import React from 'react';
import type { Meta } from '@storybook/react/types-6-0';

import { EditorToolbarDivider } from '../src/EditorToolbarDivider/EditorToolbarDivider';
import type { EditorToolbarDividerProps } from '../src/EditorToolbarDivider/EditorToolbarDivider';

export default {
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
  component: EditorToolbarDivider,
  parameters: {
    propTypes: EditorToolbarDivider['__docgenInfo'],
  },
  title: 'Components/EditorToolbar/EditorToolbarDivider',
} as Meta;

export const Default = ({ ...args }: EditorToolbarDividerProps) => {
  return <EditorToolbarDivider {...args} />;
};
