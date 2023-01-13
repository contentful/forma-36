import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import { CopyButton, type CopyButtonProps } from '../src/CopyButton';
import { Flex } from '@contentful/f36-core';

export default {
  component: CopyButton,
  parameters: {
    propTypes: CopyButton['__docgenInfo'],
  },
  title: 'Components/CopyButton',
} as Meta;

export const Default: Story<CopyButtonProps> = (args) => {
  const asyncValue = async (): Promise<string> =>
    new Promise((resolve) =>
      setTimeout(resolve, 3000, 'A value that you will have to wait for'),
    );

  return (
    <Flex flexDirection="column">
      <CopyButton value="Lorem Ipsum" {...args} />

      <CopyButton value={asyncValue} {...args} />
    </Flex>
  );
};

Default.args = {
  tooltipCopiedText: 'Copied!',
  tooltipText: 'Copy to clipboard',
  onCopy: action('onCopy'),
  tooltipProps: {
    placement: 'bottom',
    usePortal: true,
  },
};
