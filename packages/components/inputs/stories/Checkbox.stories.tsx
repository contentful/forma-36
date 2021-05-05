import React from 'react';
import { Flex } from '@contentful/f36-core';
import { SectionHeading } from '@contentful/f36-typography';
import { Checkbox, CheckboxProps } from '../src';

export default {
  title: 'Form Elements/Checkbox',
  component: Checkbox,
  parameters: {
    propTypes: [Checkbox['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

export const basic = (args: CheckboxProps) => <Checkbox {...args} />;

basic.args = {
  id: 'Checkbox',
  name: 'some name',
};

export const overview = () => (
  <>
    <Flex marginBottom="spacingS" marginTop="spacingM">
      <SectionHeading as="h3">Checkbox default</SectionHeading>
    </Flex>
    <Checkbox id="Checkbox" label="some label text" name="some-name" />
    <Flex marginBottom="spacingS" marginTop="spacingM">
      <SectionHeading as="h3">Checkbox checked</SectionHeading>
    </Flex>
    <Checkbox
      id="Checkbox"
      isChecked
      label="some label text"
      name="some-name"
    />
    <Flex marginBottom="spacingS" marginTop="spacingM">
      <SectionHeading as="h3">Checkbox indeterminate</SectionHeading>
    </Flex>
    <Checkbox
      id="Checkbox"
      isIndeterminate
      label="multiple selection"
      name="some-name"
    />
    <Flex marginBottom="spacingS" marginTop="spacingM">
      <SectionHeading as="h3">Checkbox disabled</SectionHeading>
    </Flex>
    <Checkbox
      id="Checkbox"
      isDisabled
      label="some label text"
      name="some-name"
    />
    <Flex marginBottom="spacingS" marginTop="spacingM">
      <SectionHeading as="h3">Checkbox disabled indeterminate</SectionHeading>
    </Flex>
    <Checkbox
      id="Checkbox"
      isDisabled
      isIndeterminate
      label="multiple selection"
      name="some-name"
    />
    <Flex marginBottom="spacingS" marginTop="spacingM">
      <SectionHeading as="h3">Checkbox disabled checked</SectionHeading>
    </Flex>
    <Checkbox
      id="Checkbox"
      isDisabled
      isChecked
      label="some label text"
      name="some-name"
    />
  </>
);
