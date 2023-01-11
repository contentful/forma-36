import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { Flex, Stack } from '@contentful/f36-core';

import { CopyButton, type CopyButtonProps } from '../src/CopyButton';

export default {
  component: CopyButton,
  parameters: {
    propTypes: CopyButton['__docgenInfo'],
  },
  title: 'Buttons/CopyButton',
} as Meta;

export const basic: Story<CopyButtonProps> = (args) => {
  return (
    <Flex flexDirection="column" marginBottom="spacingL">
      <Stack flexDirection="row" marginBottom="spacingM" spacing="spacingXs">
        <CopyButton size="small" {...args} />
        <CopyButton size="medium" {...args} />
      </Stack>
    </Flex>
  );
};

basic.args = {
  value: 'Lorem Ipsum',
  tooltipCopiedText: 'Copied!',
  tooltipText: 'Copy to clipboard',
  onCopy: action('onCopy'),
  tooltipProps: {
    placement: 'bottom',
    usePortal: true,
  },
};
