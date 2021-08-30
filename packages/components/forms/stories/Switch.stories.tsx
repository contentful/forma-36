import React from 'react';
import { SectionHeading } from '@contentful/f36-typography';
import { Switch, SwitchProps } from '../src';

export default {
  title: 'Form Elements/Switch',
  component: Switch,
  parameters: {
    propTypes: [Switch['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

export const basic = (args: SwitchProps) => <Switch {...args} />;

basic.args = {
  id: 'Switch',
  name: 'some name',
};

export const overview = () => (
  <>
    <SectionHeading marginTop="spacingM" marginBottom="spacingS" as="h3">
      Switch default
    </SectionHeading>
    <Switch id="Switch" label="some label text" name="some-name" />

    <SectionHeading as="h3" marginTop="spacingM" marginBottom="spacingS">
      Switch checked
    </SectionHeading>
    <Switch id="Switch" isChecked label="some label text" name="some-name" />

    <SectionHeading marginBottom="spacingS" marginTop="spacingM" as="h3">
      Switch disabled
    </SectionHeading>
    <Switch id="Switch" isDisabled label="some label text" name="some-name" />

    <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingM">
      Switch disabled checked
    </SectionHeading>
    <Switch
      id="Switch"
      isDisabled
      isChecked
      label="some label text"
      name="some-name"
    />
  </>
);
