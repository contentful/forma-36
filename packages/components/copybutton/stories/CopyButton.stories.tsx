import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { CopyButton } from '../src/CopyButton';

export default {
  component: CopyButton,
  parameters: {
    propTypes: CopyButton['__docgenInfo'],
  },
  title: 'Components/Button components/CopyButton',
} as Meta<typeof CopyButton>;

type Story = StoryObj<typeof CopyButton>;

export const Default: Story = {
  args: {
    value: 'Lorem Ipsum',
    tooltipCopiedText: 'Copied!',
    tooltipText: 'Copy to clipboard',
    onCopy: action('onCopy'),
    tooltipProps: {
      placement: 'bottom',
      usePortal: true,
    },
  },
};
