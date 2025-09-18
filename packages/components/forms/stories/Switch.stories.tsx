import React from 'react';
import { SectionHeading } from '@contentful/f36-typography';
import { Switch, SwitchProps } from '../src';
import { Flex, Box } from '@contentful/f36-core';

export default {
  title: 'Form Elements/Switch',
  component: Switch,
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

export const Basic = {
  render: (args: SwitchProps) => (
    <Switch {...args} name="basic" value="yes" id="switchOption1" />
  ),

  args: {
    children: 'Some label text',
    size: 'medium',
  },
};

export const Overview = () => (
  <>
    <SectionHeading as="h3" marginBottom="spacingM">
      Switch default
    </SectionHeading>

    <Flex flexDirection="column" marginBottom="spacingS">
      <Box marginBottom="spacingS">
        <Switch size="small" name="small-switch1" value="no" id="small-switch1">
          Label text
        </Switch>
      </Box>
      <Box marginBottom="spacingS">
        <Switch name="switch1" value="no" id="switch1">
          Label text
        </Switch>
      </Box>
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingM">
      Switch disabled
    </SectionHeading>

    <Flex flexDirection="column" marginBottom="spacingS">
      <Box marginBottom="spacingS">
        <Switch
          size="small"
          isDisabled
          name="small-switch2"
          value="no"
          id="small-switch2"
        >
          Label text
        </Switch>
      </Box>
      <Box marginBottom="spacingS">
        <Switch isDisabled name="switch2" value="no" id="switch2">
          Label text
        </Switch>
      </Box>
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingM">
      Switch disabled checked
    </SectionHeading>

    <Flex flexDirection="column" marginBottom="spacingS">
      <Box marginBottom="spacingS">
        <Switch
          size="small"
          isDisabled
          isChecked
          name="small-switch3"
          value="no"
          id="small-switch3"
        >
          Label text
        </Switch>
      </Box>
      <Box marginBottom="spacingS">
        <Switch isDisabled isChecked name="switch3" value="no" id="switch3">
          Label text
        </Switch>
      </Box>
    </Flex>
  </>
);
