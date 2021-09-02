import React from 'react';
import { SectionHeading } from '@contentful/f36-typography';
import { Switch, SwitchProps } from '../src';
import { Flex } from '@contentful/f36-core';

export default {
  title: 'Form Elements/Switch',
  component: Switch,
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

export const Basic = (args: SwitchProps) => (
  <Switch {...args} name="basic" value="yes" id="switchOption1" />
);

Basic.args = {
  children: 'Some label text',
};

export const overview = () => (
  <>
    <SectionHeading as="h3" marginBottom="spacingS">
      Switch default
    </SectionHeading>

    <Flex marginBottom="spacingS">
      <Switch name="switch1" value="no" id="switch1">
        Label text
      </Switch>
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Switch disabled
    </SectionHeading>

    <Flex marginBottom="spacingS">
      <Switch isDisabled name="switch2" value="no" id="switch2">
        Label text
      </Switch>
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Switch disabled checked
    </SectionHeading>

    <Flex marginBottom="spacingS">
      <Switch isDisabled isChecked name="switch3" value="no" id="switch3">
        Label text
      </Switch>
    </Flex>
  </>
);
