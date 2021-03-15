import React from 'react';
import { Flex } from '@contentful/f36-layout';

import { Checkbox, CheckboxProps } from './Checkbox';
import { SectionHeading } from '../Typography';

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
      <SectionHeading element="h3">Checkbox default</SectionHeading>
    </Flex>
    <Checkbox id="Checkbox" labelText="some label text" name="some-name" />
    <Flex marginBottom="spacingS" marginTop="spacingM">
      <SectionHeading element="h3">Checkbox checked</SectionHeading>
    </Flex>
    <Checkbox
      id="Checkbox"
      checked
      labelText="some label text"
      name="some-name"
    />
    <Flex marginBottom="spacingS" marginTop="spacingM">
      <SectionHeading element="h3">Checkbox indeterminate</SectionHeading>
    </Flex>
    <Checkbox
      id="Checkbox"
      indeterminate
      labelText="multiple selection"
      name="some-name"
    />
    <Flex marginBottom="spacingS" marginTop="spacingM">
      <SectionHeading element="h3">Checkbox disabled</SectionHeading>
    </Flex>
    <Checkbox
      id="Checkbox"
      disabled
      labelText="some label text"
      name="some-name"
    />
    <Flex marginBottom="spacingS" marginTop="spacingM">
      <SectionHeading element="h3">
        Checkbox disabled indeterminate
      </SectionHeading>
    </Flex>
    <Checkbox
      id="Checkbox"
      disabled
      indeterminate
      labelText="multiple selection"
      name="some-name"
    />
    <Flex marginBottom="spacingS" marginTop="spacingM">
      <SectionHeading element="h3">Checkbox disabled checked</SectionHeading>
    </Flex>
    <Checkbox
      id="Checkbox"
      disabled
      checked
      labelText="some label text"
      name="some-name"
    />
  </>
);
