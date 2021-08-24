import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { EditorToolbar } from '../src/EditorToolbar';
import type { EditorToolbarProps } from '../src/EditorToolbar';

export default {
  component: EditorToolbar,
  title: 'Components/EditorToolbar',
} as Meta;

export const Default: Story<EditorToolbarProps> = (args) => {
  return <EditorToolbar {...args}>EditorToolbar</EditorToolbar>;
};
