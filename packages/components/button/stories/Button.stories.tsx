import React from 'react';

import { Button, type ButtonProps } from '../src/Button';
import { Flex, Stack } from '@contentful/f36-core';
import { SectionHeading } from '@contentful/f36-typography';
import * as icons from '@contentful/f36-icons';
import type { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'Buttons',
  component: Button,
  parameters: {
    propTypes: Button['__docgenInfo'],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    startIcon: {
      control: {
        options: ['', ...Object.keys(icons)],
        type: 'select',
      },
    },
    endIcon: {
      control: {
        options: ['', ...Object.keys(icons)],
        type: 'select',
      },
    },
  },
} as Meta;

const ButtonOverview = (args: ButtonProps) => (
  <Flex flexDirection="column" marginBottom="spacingL">
    <SectionHeading as="h3" marginBottom="spacingS">
      Primary
    </SectionHeading>
    <Stack flexDirection="row" marginBottom="spacingM" spacing="spacingXs">
      <Button size="small" variant="primary" {...args}>
        Small
      </Button>

      <Button size="medium" variant="primary" {...args}>
        Medium
      </Button>

      <Button size="large" variant="primary" {...args}>
        Large
      </Button>
    </Stack>

    <SectionHeading as="h3" marginBottom="spacingS">
      Secondary
    </SectionHeading>
    <Stack flexDirection="row" marginBottom="spacingM" spacing="spacingXs">
      <Button size="small" variant="secondary" {...args}>
        Small
      </Button>

      <Button size="medium" variant="secondary" {...args}>
        Medium
      </Button>

      <Button size="large" variant="secondary" {...args}>
        Large
      </Button>
    </Stack>

    <SectionHeading as="h3" marginBottom="spacingS">
      Positive
    </SectionHeading>
    <Stack flexDirection="row" marginBottom="spacingM" spacing="spacingXs">
      <Button size="small" variant="positive" {...args}>
        Small
      </Button>

      <Button size="medium" variant="positive" {...args}>
        Medium
      </Button>

      <Button size="large" variant="positive" {...args}>
        Large
      </Button>
    </Stack>

    <SectionHeading as="h3" marginBottom="spacingS">
      Negative
    </SectionHeading>
    <Stack flexDirection="row" marginBottom="spacingM" spacing="spacingXs">
      <Button size="small" variant="negative" {...args}>
        Small
      </Button>

      <Button size="medium" variant="negative" {...args}>
        Medium
      </Button>

      <Button size="large" variant="negative" {...args}>
        Large
      </Button>
    </Stack>

    <SectionHeading as="h3" marginBottom="spacingS">
      Transparent
    </SectionHeading>
    <Stack flexDirection="row" marginBottom="spacingM" spacing="spacingXs">
      <Button size="small" variant="transparent" {...args}>
        Small
      </Button>

      <Button size="medium" variant="transparent" {...args}>
        Medium
      </Button>

      <Button size="large" variant="transparent" {...args}>
        Large
      </Button>
    </Stack>
  </Flex>
);

export const basic: Story<ButtonProps> = () => <ButtonOverview />;

export const startIcon: Story<ButtonProps> = (args) => (
  <ButtonOverview {...args} />
);

startIcon.args = {
  startIcon: <icons.ClockIcon />,
};

export const endIcon: Story<ButtonProps> = (args) => (
  <ButtonOverview {...args} />
);

endIcon.args = {
  endIcon: <icons.ClockIcon />,
};

export const startIconPlusEndIcon: Story<ButtonProps> = (args) => (
  <ButtonOverview {...args} />
);

startIconPlusEndIcon.args = {
  endIcon: <icons.ChevronDownIcon />,
  startIcon: <icons.ClockIcon />,
};

export const loading: Story<ButtonProps> = (args) => (
  <ButtonOverview {...args} />
);

loading.args = {
  isLoading: true,
};
