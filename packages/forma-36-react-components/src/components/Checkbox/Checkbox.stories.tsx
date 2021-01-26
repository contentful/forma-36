import React from 'react';

import Checkbox, { CheckboxProps } from './Checkbox';
import Flex from '../Flex/Flex';
import SectionHeading from '../Typography/SectionHeading';

export default {
  title: 'Components/Checkbox',
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
