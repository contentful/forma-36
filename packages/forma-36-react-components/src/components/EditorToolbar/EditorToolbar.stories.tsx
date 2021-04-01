import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
} from '@contentful/f36-icons';

import { EditorToolbar } from './EditorToolbar';
import type { EditorToolbarProps } from './EditorToolbar';
import { Button } from '../Button';
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
        icon={FormatBold}
        tooltip="Bold"
        label="Bold"
        isActive={false}
      />
      <EditorToolbarButton
        icon={FormatItalic}
        tooltip="Italic"
        label="Italic"
        isActive={false}
      />
      <EditorToolbarButton
        icon={FormatUnderlined}
        tooltip="Underlined"
        label="Underlined"
        isActive={false}
      />
    </div>
    <div>
      <Button size="small" buttonType="muted">
        Example button
      </Button>
    </div>
  </EditorToolbar>
);
