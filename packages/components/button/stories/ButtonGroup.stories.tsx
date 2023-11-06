import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { ChevronDownIcon } from '@contentful/f36-icons';
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

export const basic: Story<ButtonGroupProps> = (args) => {
  return (
    <ButtonGroup {...args}>
      {false && <Button variant="secondary">Button</Button>}
      <Button variant="secondary">Button</Button>
      <Button variant="secondary">Button</Button>
      <Button variant="secondary">Button</Button>
      <IconButton
        variant="secondary"
        icon={<ChevronDownIcon variant="secondary" />}
        aria-label="Open dropdown"
      />
    </ButtonGroup>
  );
};

export const spaced: Story<ButtonGroupProps> = (args) => {
  return (
    <ButtonGroup {...args}>
      <Button variant="secondary">Button</Button>
      <Button variant="secondary">Button</Button>
      <Button variant="secondary">Button</Button>
      <IconButton
        variant="secondary"
        icon={<ChevronDownIcon variant="secondary" />}
        aria-label="Open dropdown"
      />
    </ButtonGroup>
  );
};

spaced.args = {
  variant: 'spaced',
};

export const overview: Story<ButtonGroupProps> = () => {
  const onClick = action('click');

  const buttonVariants: Record<ButtonVariant, true> = {
    primary: true,
    secondary: true,
    positive: true,
    negative: true,
    transparent: true,
  };

  const buttonGroupVariants: Record<
    Exclude<ButtonGroupVariants, 'collapsed'>,
    true
  > = {
    merged: true,
    spaced: true,
  };

  return (
    <Flex flexDirection="column" marginBottom="spacingL">
      {Object.keys(buttonGroupVariants).map((key) => {
        const groupVariant = key as Exclude<ButtonGroupVariants, 'collapsed'>;

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
                          icon={<ChevronDownIcon variant="secondary" />}
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
