import React from 'react';
import { action } from '@storybook/addon-actions';
import { SectionHeading } from '@contentful/f36-typography';
import { Flex } from '@contentful/f36-core';

import { BaseCheckbox, BaseCheckboxProps } from '../src/base-checkbox';

export default {
  title: 'Form Elements/BaseCheckbox',
  component: BaseCheckbox,
  args: {
    type: 'checkbox',
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    style: { control: { disable: true } },
  },
};

export const basic = (args: BaseCheckboxProps) => <BaseCheckbox {...args} />;

basic.args = {
  name: 'field-name',
  label: 'Label',
  type: 'checkbox',
  onChange: action('onChange'),
  onFocus: action('onFocus'),
  onBlur: action('onBlur'),
};

export const overview = (args: BaseCheckboxProps) => (
  <>
    <Flex flexDirection="column" marginBottom="spacingL">
      <SectionHeading as="h3" marginBottom="spacingS">
        Checkbox
      </SectionHeading>

      <Flex flexDirection="row" marginBottom="spacingM">
        <BaseCheckbox {...args} type="checkbox" name="checkbox" />
      </Flex>
    </Flex>
    <Flex flexDirection="column" marginBottom="spacingL">
      <SectionHeading as="h3" marginBottom="spacingS">
        Radio
      </SectionHeading>

      <Flex flexDirection="row" marginBottom="spacingM">
        <BaseCheckbox {...args} type="radio" name="radio" />
      </Flex>
    </Flex>
    <Flex flexDirection="column" marginBottom="spacingL">
      <SectionHeading as="h3" marginBottom="spacingS">
        Switch
      </SectionHeading>

      <Flex flexDirection="row" marginBottom="spacingM">
        <BaseCheckbox {...args} type="switch" name="switch" />
      </Flex>
    </Flex>
  </>
);

overview.args = {
  label: 'Label',
  onChange: action('onChange'),
  onFocus: action('onFocus'),
  onBlur: action('onBlur'),
};
