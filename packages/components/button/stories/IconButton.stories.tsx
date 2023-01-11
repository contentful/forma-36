import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { SectionHeading } from '@contentful/f36-typography';
import { Flex, Stack } from '@contentful/f36-core';
import * as icons from '@contentful/f36-icons';

import { IconButton, type IconButtonProps } from '../src/IconButton';

export default {
  title: 'Components/Button/IconButton',
  component: IconButton,
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    icon: {
      control: {
        options: ['', ...Object.keys(icons)],
        type: 'select',
      },
    },
  },
} as Meta;

export const basic: Story<IconButtonProps> = (args) => (
  <Flex flexDirection="column" marginBottom="spacingL">
    <SectionHeading as="h3" marginBottom="spacingS">
      Primary
    </SectionHeading>
    <Stack flexDirection="row" marginBottom="spacingM" spacing="spacingXs">
      <IconButton size="small" variant="primary" {...args} />

      <IconButton size="medium" variant="primary" {...args} />

      <IconButton size="large" variant="primary" {...args} />
    </Stack>

    <SectionHeading as="h3" marginBottom="spacingS">
      Secondary
    </SectionHeading>
    <Stack flexDirection="row" marginBottom="spacingM" spacing="spacingXs">
      <IconButton size="small" variant="secondary" {...args} />

      <IconButton size="medium" variant="secondary" {...args} />

      <IconButton size="large" variant="secondary" {...args} />
    </Stack>

    <SectionHeading as="h3" marginBottom="spacingS">
      Positive
    </SectionHeading>
    <Stack flexDirection="row" marginBottom="spacingM" spacing="spacingXs">
      <IconButton size="small" variant="positive" {...args} />

      <IconButton size="medium" variant="positive" {...args} />

      <IconButton size="large" variant="positive" {...args} />
    </Stack>

    <SectionHeading as="h3" marginBottom="spacingS">
      Negative
    </SectionHeading>
    <Stack flexDirection="row" marginBottom="spacingM" spacing="spacingXs">
      <IconButton size="small" variant="negative" {...args} />

      <IconButton size="medium" variant="negative" {...args} />

      <IconButton size="large" variant="negative" {...args} />
    </Stack>

    <SectionHeading as="h3" marginBottom="spacingS">
      Transparent
    </SectionHeading>
    <Stack flexDirection="row" marginBottom="spacingM" spacing="spacingXs">
      <IconButton size="small" variant="transparent" {...args} />

      <IconButton size="medium" variant="transparent" {...args} />

      <IconButton size="large" variant="transparent" {...args} />
    </Stack>
  </Flex>
);

basic.args = {
  icon: <icons.ClockIcon />,
};
