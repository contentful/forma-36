import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import EditorToolbarButton from './EditorToolbarButton';
import type { EditorToolbarButtonProps } from './EditorToolbarButton';
import notes from './README.mdx';
import { iconName } from './../../Icon/constants';

export default {
  argTypes: {
    className: { control: { disable: true } },
    icon: {
      control: {
        type: 'select',
        options: Object.keys(iconName),
      },
      defaultValue: Object.keys(iconName)[0],
    },
    label: {
      control: 'text',
      defaultValue: 'H1',
      description: 'Screenreader only',
    },
    testId: { control: { disable: true } },
  },
  component: EditorToolbarButton,
  parameters: {
    propTypes: EditorToolbarButton['__docgenInfo'],
    notes,
  },
  title: 'Components/EditorToolbar/EditorToolbarButton',
} as Meta;

export const Default: Story<EditorToolbarButtonProps> = (args) => {
  return <EditorToolbarButton {...args} />;
};
