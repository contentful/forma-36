import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import { CopyButton, type CopyButtonProps } from '../src/CopyButton';

export default {
  component: CopyButton,
  parameters: {
    propTypes: CopyButton['__docgenInfo'],
  },
  title: 'Components/Button components/CopyButton',
} as Meta;

export const Default: Story<CopyButtonProps> = (args) => {
  return <CopyButton {...args}>CopyButton</CopyButton>;
};

Default.args = {
  value: 'Lorem Ipsum',
  tooltipCopiedText: 'Copied!',
  tooltipText: 'Copy to clipboard',
  onCopy: action('onCopy'),
  tooltipProps: {
    placement: 'bottom',
    usePortal: true,
  },
};
