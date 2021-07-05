import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import * as icons from '@contentful/f36-icons';

import { EditorToolbarButton } from './EditorToolbarButton';
import type { EditorToolbarButtonProps } from './EditorToolbarButton';

export default {
  argTypes: {
    className: { control: { disable: true } },
    icon: {
      control: {
        options: Object.keys(icons),
        type: 'select',
      },
      defaultValue: 'HeadingOne',
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
  },
  title: 'Components/EditorToolbar/EditorToolbarButton',
} as Meta;

export const Default: Story<EditorToolbarButtonProps & { icon?: string }> = (
  args,
) => {
  return <EditorToolbarButton {...args} icon={icons[args.icon]} />;
};
