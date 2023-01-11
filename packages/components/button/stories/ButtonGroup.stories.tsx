import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { SectionHeading } from '@contentful/f36-typography';
import { Flex, Stack } from '@contentful/f36-core';
import { ButtonGroup, Button, type ButtonGroupProps } from '../src';
import tokens from '@contentful/f36-tokens';

export default {
  component: ButtonGroup,
  parameters: {
    propTypes: ButtonGroup['__docgenInfo'],
  },
  title: 'Buttons/ButtonGroup',
  argTypes: {
    variant: {
      control: {
        options: ['collapsed', 'spaced'],
        type: 'select',
      },
    },
    spacing: {
      control: {
        options: Object.keys(tokens).filter((key) => key.startsWith('spacing')),
        type: 'select',
      },
    },
  },
} as Meta;

const ButtonGroupOverview = (args: ButtonGroupProps) => (
  <Flex flexDirection="column" marginBottom="spacingL">
    <SectionHeading as="h3" marginBottom="spacingS">
      Primary
    </SectionHeading>
    <Stack flexDirection="row" marginBottom="spacingM" spacing="spacingXl">
      <ButtonGroup {...args}>
        <Button size="small" variant="primary">
          Small
        </Button>
        <Button size="small" variant="primary">
          Small
        </Button>
        <Button size="small" variant="primary">
          Small
        </Button>
      </ButtonGroup>

      <ButtonGroup {...args}>
        <Button size="medium" variant="primary">
          Medium
        </Button>
        <Button size="medium" variant="primary">
          Medium
        </Button>
        <Button size="medium" variant="primary">
          Medium
        </Button>
      </ButtonGroup>

      <ButtonGroup {...args}>
        <Button size="large" variant="primary">
          Large
        </Button>
        <Button size="large" variant="primary">
          Large
        </Button>
        <Button size="large" variant="primary">
          Large
        </Button>
      </ButtonGroup>
    </Stack>

    <SectionHeading as="h3" marginBottom="spacingS">
      Secondary
    </SectionHeading>
    <Stack flexDirection="row" marginBottom="spacingM" spacing="spacingXl">
      <ButtonGroup {...args}>
        <Button size="small" variant="secondary">
          Small
        </Button>
        <Button size="small" variant="secondary">
          Small
        </Button>
        <Button size="small" variant="secondary">
          Small
        </Button>
      </ButtonGroup>

      <ButtonGroup {...args}>
        <Button size="medium" variant="secondary">
          Medium
        </Button>
        <Button size="medium" variant="secondary">
          Medium
        </Button>
        <Button size="medium" variant="secondary">
          Medium
        </Button>
      </ButtonGroup>

      <ButtonGroup {...args}>
        <Button size="large" variant="secondary">
          Large
        </Button>
        <Button size="large" variant="secondary">
          Large
        </Button>
        <Button size="large" variant="secondary">
          Large
        </Button>
      </ButtonGroup>
    </Stack>

    <SectionHeading as="h3" marginBottom="spacingS">
      Positive
    </SectionHeading>
    <Stack flexDirection="row" marginBottom="spacingM" spacing="spacingXl">
      <ButtonGroup {...args}>
        <Button size="small" variant="positive">
          Small
        </Button>
        <Button size="small" variant="positive">
          Small
        </Button>
        <Button size="small" variant="positive">
          Small
        </Button>
      </ButtonGroup>

      <ButtonGroup {...args}>
        <Button size="medium" variant="positive">
          Medium
        </Button>
        <Button size="medium" variant="positive">
          Medium
        </Button>
        <Button size="medium" variant="positive">
          Medium
        </Button>
      </ButtonGroup>

      <ButtonGroup {...args}>
        <Button size="large" variant="positive">
          Large
        </Button>
        <Button size="large" variant="positive">
          Large
        </Button>
        <Button size="large" variant="positive">
          Large
        </Button>
      </ButtonGroup>
    </Stack>

    <SectionHeading as="h3" marginBottom="spacingS">
      Negative
    </SectionHeading>
    <Stack flexDirection="row" marginBottom="spacingM" spacing="spacingXl">
      <ButtonGroup {...args}>
        <Button size="small" variant="negative">
          Small
        </Button>
        <Button size="small" variant="negative">
          Small
        </Button>
        <Button size="small" variant="negative">
          Small
        </Button>
      </ButtonGroup>

      <ButtonGroup {...args}>
        <Button size="medium" variant="negative">
          Medium
        </Button>
        <Button size="medium" variant="negative">
          Medium
        </Button>
        <Button size="medium" variant="negative">
          Medium
        </Button>
      </ButtonGroup>

      <ButtonGroup {...args}>
        <Button size="large" variant="negative">
          Large
        </Button>
        <Button size="large" variant="negative">
          Large
        </Button>
        <Button size="large" variant="negative">
          Large
        </Button>
      </ButtonGroup>
    </Stack>

    <SectionHeading as="h3" marginBottom="spacingS">
      Transparent
    </SectionHeading>
    <Stack flexDirection="row" marginBottom="spacingM" spacing="spacingXl">
      <ButtonGroup {...args}>
        <Button size="small" variant="transparent">
          Small
        </Button>
        <Button size="small" variant="transparent">
          Small
        </Button>
        <Button size="small" variant="transparent">
          Small
        </Button>
      </ButtonGroup>

      <ButtonGroup {...args}>
        <Button size="medium" variant="transparent">
          Medium
        </Button>
        <Button size="medium" variant="transparent">
          Medium
        </Button>
        <Button size="medium" variant="transparent">
          Medium
        </Button>
      </ButtonGroup>

      <ButtonGroup {...args}>
        <Button size="large" variant="transparent">
          Large
        </Button>
        <Button size="large" variant="transparent">
          Large
        </Button>
        <Button size="large" variant="transparent">
          Large
        </Button>
      </ButtonGroup>
    </Stack>
  </Flex>
);

export const basic: Story<ButtonGroupProps> = (args) => {
  return <ButtonGroupOverview {...args} />;
};

export const spaced: Story<ButtonGroupProps> = (args) => {
  return <ButtonGroupOverview {...args} />;
};

spaced.args = {
  variant: 'spaced',
};
