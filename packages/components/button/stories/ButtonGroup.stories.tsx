import React from 'react';
import type { StoryFn, StoryObj, Meta } from '@storybook/react-vite';
import { CaretDownIcon } from '@contentful/f36-icons';
import { SectionHeading } from '@contentful/f36-typography';
import { action } from '@storybook/addon-actions';
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
      control: {
        options: ['merged', 'spaced'],
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

export const basic: StoryObj<ButtonGroupProps> = {
  render: (args) => {
    return (
      <ButtonGroup {...args}>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <IconButton
          variant="secondary"
          icon={<CaretDownIcon color={tokens.gray900} />}
          aria-label="Open dropdown"
        />
      </ButtonGroup>
    );
  },
};

export const spaced: StoryObj<ButtonGroupProps> = {
  render: (args) => {
    return (
      <ButtonGroup {...args}>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <IconButton
          variant="secondary"
          icon={<CaretDownIcon color={tokens.gray900} />}
          aria-label="Open dropdown"
        />
      </ButtonGroup>
    );
  },

  args: {
    variant: 'spaced',
  },
};

export const overview: StoryFn<ButtonGroupProps> = () => {
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
          <>
            {Object.keys(buttonVariants).map((key) => {
              const buttonVariant = key as ButtonVariant;

              return (
                <>
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
                          icon={<CaretDownIcon color={tokens.gray900} />}
                          aria-label="Open dropdown"
                        />
                      </ButtonGroup>
                    </Box>
                  </Flex>
                </>
              );
            })}
          </>
        );
      })}
    </Flex>
  );
};
