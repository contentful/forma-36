import React, { useState } from 'react';

import { Switch, SwitchProps } from './Switch';
import { SectionHeading } from '../Typography';
import { Flex } from '@contentful/f36-layout';

export default {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    propTypes: [Switch['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

export const Basic = (args: SwitchProps) => {
  const [isActive, setActive] = useState(false);

  return (
    <Switch
      {...args}
      id="testSwitch"
      isChecked={isActive}
      onToggle={setActive}
    />
  );
};

Basic.args = {
  labelText: 'My label text',
  size: 'default',
  isDisabled: false,
};

export const Overview = () => (
  <>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">Switch default</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <Switch id="testSwitch" labelText="My label text" />
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">Switch checked</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <Switch id="testSwitch" isChecked labelText="My label text" />
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">Switch disabled</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <Switch id="testSwitch" isDisabled labelText="My label text" />
    </Flex>

    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">Switch small</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <Switch size="small" id="testSwitch" labelText="My label text" />
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">Switch small checked</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <Switch
        size="small"
        id="testSwitch"
        isChecked
        labelText="My label text"
      />
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">
        Switch small checked disabled
      </SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <Switch
        size="small"
        id="testSwitch"
        isDisabled
        isChecked
        labelText="My label text"
      />
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">Switch small disabled</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <Switch
        size="small"
        id="testSwitch"
        isDisabled
        labelText="My label text"
      />
    </Flex>
  </>
);
