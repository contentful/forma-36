import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { TextLink } from '../src/TextLink';
import type { TextLinkProps } from '../src/TextLink';

export default {
  component: TextLink,
  parameters: {
    propTypes: TextLink['__docgenInfo'],
  },
  title: 'Components/TextLink',
} as Meta;

export const Default: Story<TextLinkProps> = (args) => {
  return <TextLink {...args}>TextLink</TextLink>;
};
