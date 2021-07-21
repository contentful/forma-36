import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { SectionHeading } from '@contentful/f36-typography';
import { action } from '@storybook/addon-actions';
import { Box, Flex } from '@contentful/f36-core';
import { Preview } from '@contentful/f36-icons';

import { ToggleButton, ToggleButtonProps } from '../src/ToggleButton';

export default {
  title: 'Components/ToggleButton',
  component: ToggleButton,
  parameters: {
    propTypes: [ToggleButton['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
} as Meta;

export const basic: Story<ToggleButtonProps> = (props: ToggleButtonProps) => (
  <div>
    <ToggleButton {...props} />
  </div>
);

basic.args = {
  isDisabled: false,
  isActive: false,
  icon: undefined,
  children: 'Single',
  onToggle: action('toggled'),
};

export const Overview: Story<ToggleButtonProps> = (
  props: ToggleButtonProps,
) => (
  <>
    <Flex flexDirection="column" marginBottom="spacingL">
      <Box marginBottom="spacingS">
        <SectionHeading as="h3">Pill variants</SectionHeading>
      </Box>
      <Flex flexDirection="row" marginBottom="spacingM">
        <Box marginRight="spacingXs">
          <ToggleButton onToggle={props.onToggle}>Default</ToggleButton>
        </Box>
        <Box marginRight="spacingXs">
          <ToggleButton isActive onToggle={props.onToggle}>
            Active
          </ToggleButton>
        </Box>
        <Box marginRight="spacingXs">
          <ToggleButton isDisabled onToggle={props.onToggle}>
            Disabled
          </ToggleButton>
        </Box>
      </Flex>
    </Flex>
    <Flex flexDirection="column" marginBottom="spacingL">
      <Box marginBottom="spacingS">
        <SectionHeading as="h3">Toggle Button with icon</SectionHeading>
      </Box>
      <Flex flexDirection="row" marginBottom="spacingM">
        <Box marginRight="spacingXs">
          <ToggleButton onToggle={props.onToggle} icon={Preview}>
            Default
          </ToggleButton>
        </Box>
        <Box marginRight="spacingXs">
          <ToggleButton onToggle={props.onToggle} isActive icon={Preview}>
            Active
          </ToggleButton>
        </Box>
        <Box marginRight="spacingXs">
          <ToggleButton onToggle={props.onToggle} isDisabled icon={Preview}>
            Disabled
          </ToggleButton>
        </Box>
      </Flex>
    </Flex>
  </>
);

Overview.args = {
  onToggle: action('toggled'),
};
