import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Button } from '@contentful/f36-button';
import { ChevronDown, Plus } from '@contentful/f36-icons';
import { SectionHeading } from '@contentful/f36-typography';
import { action } from '@storybook/addon-actions';
import { Box, Flex } from '@contentful/f36-core';
import { ButtonGroup } from '../src/ButtonGroup';
import type { ButtonGroupProps } from '../src/ButtonGroup';

export default {
  component: ButtonGroup,
  parameters: {
    propTypes: ButtonGroup['__docgenInfo'],
  },
  title: 'Components/ButtonGroup',
} as Meta;

export const basic: Story<ButtonGroupProps> = (args) => {
  return (
    <ButtonGroup {...args}>
      <Button variant="secondary">Button</Button>
      <Button variant="secondary">Button</Button>
      <Button variant="secondary">Button</Button>
      <Button variant="secondary" icon={ChevronDown} />
    </ButtonGroup>
  );
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
            <ButtonGroup variant="collapse">
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
                icon={ChevronDown}
              />
            </ButtonGroup>
          </Box>
          <Box marginBottom="spacingS">
            <ButtonGroup variant="collapse">
              <Button onClick={onClick} variant="positive">
                Button
              </Button>
              <Button onClick={onClick} variant="positive" icon={ChevronDown} />
            </ButtonGroup>
          </Box>
          <Box marginBottom="spacingS">
            <ButtonGroup variant="collapse">
              <Button onClick={onClick} variant="primary" icon={Plus}>
                Button
              </Button>
              <Button onClick={onClick} variant="primary" icon={ChevronDown} />
            </ButtonGroup>
          </Box>
        </Flex>
        <Box marginBottom="spacingS">
          <SectionHeading as="h3">Button Group Separate</SectionHeading>
        </Box>
        <Flex flexDirection="column" marginBottom="spacingM">
          <Box marginBottom="spacingS">
            <ButtonGroup variant="separate">
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
