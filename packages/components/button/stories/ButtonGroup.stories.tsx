import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { ChevronDownIcon, PlusIcon } from '@contentful/f36-icons';
import { SectionHeading } from '@contentful/f36-typography';
import { action } from '@storybook/addon-actions';
import { Box, Flex } from '@contentful/f36-core';
import { ButtonGroup, Button, IconButton, type ButtonGroupProps } from '../src';
import tokens from '@contentful/f36-tokens';

export default {
  component: ButtonGroup,
  parameters: {
    propTypes: ButtonGroup['__docgenInfo'],
  },
  title: 'Components/Button/ButtonGroup',
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

  return (
    <>
      <Flex flexDirection="column" marginBottom="spacingL">
        <SectionHeading as="h3" marginBottom="spacingS">
          Button Group Collapse
        </SectionHeading>

        <Flex flexDirection="column" marginBottom="spacingM">
          <Box marginBottom="spacingS">
            <ButtonGroup>
              <Button onClick={onClick} variant="secondary">
                Button
              </Button>
              <Button onClick={onClick} variant="secondary">
                Button
              </Button>
              <Button onClick={onClick} variant="secondary">
                Button
              </Button>
              <IconButton
                onClick={onClick}
                variant="secondary"
                icon={<ChevronDownIcon variant="secondary" />}
                aria-label="Open dropdown"
              />
            </ButtonGroup>
          </Box>
          <Box marginBottom="spacingS">
            <ButtonGroup withDivider>
              <Button onClick={onClick} variant="positive">
                Button
              </Button>
              <IconButton
                onClick={onClick}
                variant="positive"
                icon={<ChevronDownIcon variant="white" />}
                aria-label="Open dropdown"
              />
            </ButtonGroup>
          </Box>
          <Box marginBottom="spacingS">
            <ButtonGroup withDivider>
              <Button
                onClick={onClick}
                variant="primary"
                startIcon={<PlusIcon />}
              >
                Button
              </Button>
              <IconButton
                onClick={onClick}
                variant="primary"
                icon={<ChevronDownIcon variant="white" />}
                aria-label="Open dropdown"
              />
            </ButtonGroup>
          </Box>
        </Flex>

        <SectionHeading as="h3" marginBottom="spacingS">
          Button Group Spaced
        </SectionHeading>

        <Flex flexDirection="column" marginBottom="spacingM">
          <Box marginBottom="spacingS">
            <ButtonGroup variant="spaced">
              <Button onClick={onClick} variant="primary">
                Button
              </Button>
              <Button onClick={onClick} variant="secondary">
                Button
              </Button>
            </ButtonGroup>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
