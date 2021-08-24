import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import {
  FormatBoldIcon,
  FormatItalicIcon,
  FormatUnderlinedIcon,
} from '@contentful/f36-icons';

import { EditorToolbar } from './EditorToolbar';
import type { EditorToolbarProps } from './EditorToolbar';
import { Button } from '@contentful/f36-button';
import { EditorToolbarButton } from './EditorToolbarButton/EditorToolbarButton';

export default {
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
  component: EditorToolbar,
  parameters: {
    propTypes: [
      EditorToolbar['__docgenInfo'],
      EditorToolbarButton['__docgenInfo'],
    ],
  },
  subcomponents: { EditorToolbarButton },
  title: 'Components/EditorToolbar',
} as Meta;

export const Default: Story<EditorToolbarProps> = (args) => (
  <EditorToolbar style={{ justifyContent: 'space-between' }} {...args}>
    <div>
      <EditorToolbarButton
        icon={FormatBoldIcon}
        tooltip="Bold"
        label="Bold"
        isActive={false}
      />
      <EditorToolbarButton
        icon={FormatItalicIcon}
        tooltip="Italic"
        label="Italic"
        isActive={false}
      />
      <EditorToolbarButton
        icon={FormatUnderlinedIcon}
        tooltip="Underlined"
        label="Underlined"
        isActive={false}
      />
    </div>
    <div>
      <Button size="small" variant="transparent">
        Example button
      </Button>
    </div>
  </EditorToolbar>
);
