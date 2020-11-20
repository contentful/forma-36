import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import CopyButton from './CopyButton';
import type { CopyButtonProps } from './CopyButton';
import notes from './README.mdx';

export default {
  argTypes: {
    children: { control: { disable: true } },
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    tooltipText: { control: 'text' },
    tooltipCopiedText: { control: 'text' },
  },
  component: CopyButton,
  parameters: {
    propTypes: CopyButton['__docgenInfo'],
    notes,
  },
  title: 'Components/CopyButton',
} as Meta;

export const Default: Story<CopyButtonProps> = (args) => {
  return <CopyButton {...args} />;
};

Default.args = {
  copyValue: 'Lorem Ipsum',
  tooltipCopiedText: 'Copied!',
  tooltipPlace: 'bottom',
  tooltipText: 'Copy to clipboard',
};
