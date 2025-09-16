import React from 'react';
import type { StoryObj, Meta, StoryFn } from '@storybook/react-vite';
import { action } from '@storybook/addon-actions';

import { CopyButton, type CopyButtonProps } from '../src/CopyButton';

export default {
  component: CopyButton,
  parameters: {
    propTypes: CopyButton['__docgenInfo'],
  },
  title: 'Components/Button components/CopyButton',
} as Meta;

export const Default: StoryObj<CopyButtonProps> = {
  render: (args) => {
    return <CopyButton {...args}>CopyButton</CopyButton>;
  },

  args: {
    value: 'Lorem Ipsum',
    tooltipCopiedText: 'Value copied to clipboard',
    tooltipText: 'Copy to clipboard',
    onCopy: action('onCopy'),
    tooltipProps: {
      placement: 'bottom',
      usePortal: true,
    },
  },
};
