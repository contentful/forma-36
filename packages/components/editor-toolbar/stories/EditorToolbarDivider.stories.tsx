import React from 'react';
import type { Meta } from '@storybook/react/types-6-0';

import { EditorToolbarDivider } from './EditorToolbarDivider';
import type { EditorToolbarDividerProps } from './EditorToolbarDivider';

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
