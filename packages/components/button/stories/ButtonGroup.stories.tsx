import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { ChevronDown, Plus } from '@contentful/f36-icons';
import { SectionHeading } from '@contentful/f36-typography';
import { action } from '@storybook/addon-actions';
import { Box, Flex } from '@contentful/f36-core';
import { ButtonGroup, Button } from '../src';
import type { ButtonGroupProps } from '../src';
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
      <Button variant="secondary">Button</Button>
      <Button variant="secondary">Button</Button>
      <Button variant="secondary">Button</Button>
      <Button variant="secondary" icon={<ChevronDown />} />
    </ButtonGroup>
  );
};

export const spaced: Story<ButtonGroupProps> = (args) => {
  return (
    <ButtonGroup {...args}>
      <Button variant="secondary">Button</Button>
      <Button variant="secondary">Button</Button>
      <Button variant="secondary">Button</Button>
      <Button variant="secondary" icon={<ChevronDown />} />
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
        <Box marginBottom="spacingS">
          <SectionHeading as="h3">Button Group Collapse</SectionHeading>
        </Box>
        <Flex flexDirection="column" marginBottom="spacingM">
          <Box marginBottom="spacingS">
            <ButtonGroup variant="collapsed">
              <Button onClick={onClick} variant="secondary">
                Button
              </Button>
              <Button onClick={onClick} variant="secondary">
                Button
              </Button>
              <Button onClick={onClick} variant="secondary">
                Button
              </Button>
              <Button
                onClick={onClick}
                variant="secondary"
                icon={<ChevronDown />}
              />
            </ButtonGroup>
          </Box>
          <Box marginBottom="spacingS">
            <ButtonGroup variant="collapsed" withDivider>
              <Button onClick={onClick} variant="positive">
                Button
              </Button>
              <Button
                onClick={onClick}
                variant="positive"
                icon={<ChevronDown />}
              />
            </ButtonGroup>
          </Box>
          <Box marginBottom="spacingS">
            <ButtonGroup variant="collapsed" withDivider>
              <Button onClick={onClick} variant="primary" icon={<Plus />}>
                Button
              </Button>
              <Button
                onClick={onClick}
                variant="primary"
                icon={<ChevronDown />}
              />
            </ButtonGroup>
          </Box>
        </Flex>
        <Box marginBottom="spacingS">
          <SectionHeading as="h3">Button Group Spaced</SectionHeading>
        </Box>
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
