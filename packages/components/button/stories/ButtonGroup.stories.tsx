import React from 'react';
import type { StoryFn, StoryObj, Meta } from '@storybook/react-vite';
import {
  ArrowClockwiseIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CaretDownIcon,
} from '@contentful/f36-icons';
import { SectionHeading } from '@contentful/f36-typography';
import { action } from 'storybook/actions';
import { Box, Flex } from '@contentful/f36-core';
import { ButtonGroup, Button, IconButton, type ButtonGroupProps } from '../src';
import tokens from '@contentful/f36-tokens';
import { ButtonVariant } from '../src/types';
import { ButtonGroupVariants } from '../src/ButtonGroup/types';

export default {
  component: ButtonGroup,
  parameters: {
    propTypes: ButtonGroup['__docgenInfo'],
  },
  title: 'Components/Button components/ButtonGroup',
  argTypes: {
    variant: {
      control: 'select',
      options: ['merged', 'spaced'],
    },
    spacing: {
      control: 'select',
      options: Object.keys(tokens).filter((key) => key.startsWith('spacing')),
    },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
} as Meta;

export const Basic: StoryObj<ButtonGroupProps> = {
  render: (args) => {
    return (
      <ButtonGroup {...args}>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <IconButton
          variant="secondary"
          icon={<CaretDownIcon />}
          aria-label="Open dropdown"
        />
      </ButtonGroup>
    );
  },
};

export const Spaced: StoryObj<ButtonGroupProps> = {
  render: (args) => {
    return (
      <ButtonGroup {...args}>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <IconButton
          variant="secondary"
          icon={<CaretDownIcon />}
          aria-label="Open dropdown"
        />
      </ButtonGroup>
    );
  },

  args: {
    variant: 'spaced',
  },
};

export const Toolbar: StoryObj<ButtonGroupProps> = {
  render: (args) => {
    return (
      <ButtonGroup {...args}>
        <IconButton
          variant="secondary"
          icon={<ArrowLeftIcon />}
          aria-label="Navigate back"
        />
        <IconButton
          variant="secondary"
          icon={<ArrowClockwiseIcon />}
          aria-label="Refresh"
        />
        <IconButton
          variant="secondary"
          icon={<ArrowRightIcon />}
          aria-label="Navigate forward"
        />
      </ButtonGroup>
    );
  },
};

export const ToolbarWithTooltip: StoryObj<ButtonGroupProps> = {
  render: (args) => {
    return (
      <ButtonGroup {...args}>
        <IconButton
          variant="secondary"
          icon={<ArrowLeftIcon />}
          aria-label="Navigate back"
          withTooltip
          tooltipProps={{ content: 'Left tooltip content' }}
        />
        <IconButton
          variant="secondary"
          icon={<ArrowClockwiseIcon />}
          aria-label="Refresh"
          withTooltip
          tooltipProps={{ content: 'Middle tooltip content' }}
        />
        <IconButton
          variant="secondary"
          icon={<ArrowRightIcon />}
          aria-label="Navigate forward"
          withTooltip
          tooltipProps={{ content: 'Right tooltip content' }}
        />
      </ButtonGroup>
    );
  },
};

export const Overview: StoryFn<ButtonGroupProps> = () => {
  const onClick = action('click');

  const buttonVariants: Record<ButtonVariant, true> = {
    primary: true,
    secondary: true,
    positive: true,
    negative: true,
    transparent: true,
  };

  const buttonGroupVariants: Record<ButtonGroupVariants, boolean> = {
    merged: true,
    spaced: true,
  };

  return (
    <Flex flexDirection="column" marginBottom="spacingL">
      {Object.keys(buttonGroupVariants).map((key) => {
        const groupVariant = key as ButtonGroupVariants;

        return (
          <Flex key={key} flexDirection="column">
            {Object.keys(buttonVariants).map((key) => {
              const buttonVariant = key as ButtonVariant;

              return (
                <Flex key={key} flexDirection="column">
                  <SectionHeading as="h3" marginBottom="spacingS">
                    Button Group {groupVariant} {buttonVariant}
                  </SectionHeading>

                  <Flex flexDirection="column" marginBottom="spacingM">
                    <Box marginBottom="spacingS">
                      <ButtonGroup
                        {...(groupVariant === 'spaced'
                          ? { variant: groupVariant }
                          : {
                              variant: groupVariant,
                              withDivider:
                                buttonVariant === 'positive' ||
                                buttonVariant === 'primary',
                            })}
                      >
                        <Button onClick={onClick} variant={buttonVariant}>
                          Button
                        </Button>
                        <Button onClick={onClick} variant={buttonVariant}>
                          Button
                        </Button>
                        <Button onClick={onClick} variant={buttonVariant}>
                          Button
                        </Button>
                        <IconButton
                          onClick={onClick}
                          variant={buttonVariant}
                          icon={<CaretDownIcon />}
                          aria-label="Open dropdown"
                        />
                      </ButtonGroup>
                    </Box>
                  </Flex>
                </Flex>
              );
            })}
          </Flex>
        );
      })}
    </Flex>
  );
};
