import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { CopyButton } from '../src/CopyButton';
import type { CopyButtonProps } from '../src/CopyButton';
import { action } from '@storybook/addon-actions';

export default {
  component: CopyButton,
  parameters: {
    propTypes: CopyButton['__docgenInfo'],
  },
  title: 'Components/CopyButton',
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
