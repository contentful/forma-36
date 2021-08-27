import React from 'react';
import { Flex } from '@contentful/f36-core';
import { SectionHeading } from '@contentful/f36-typography';
import { BaseCheckboxField } from '../src/base-checkbox-field';
import { BaseCheckboxFieldProps } from '../src/base-checkbox-field/types';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Form Elements/BaseCheckboxField',
  component: BaseCheckboxField,
  parameters: {
    propTypes: [BaseCheckboxField['__docgenInfo']],
  },
  args: {
    onBlur: undefined,
    onChange: undefined,
    onFocus: undefined,
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    style: { control: { disable: true } },
  },
};

export const Basic = (args: BaseCheckboxFieldProps) => {
  return (
    <>
      <BaseCheckboxField {...args} />
    </>
  );
};

Basic.args = {
  name: 'checkbox',
  value: 'someOtherValue',
  id: 'Checkbox',
  label: 'Some label text',
  validationMessage: 'validation message',
  helpText: 'help text',
  type: 'checkbox',
  isIndeterminate: false,
};

export const overview = (args: BaseCheckboxFieldProps) => (
  <>
    <Flex flexDirection="column" marginBottom="spacingL">
      <SectionHeading as="h3" marginBottom="spacingS">
        Checkbox
      </SectionHeading>

      <Flex flexDirection="row" marginBottom="spacingM">
        <BaseCheckboxField
          {...args}
          type="checkbox"
          name="checkbox"
          id="checkbox"
        />
      </Flex>
    </Flex>
    <Flex flexDirection="column" marginBottom="spacingL">
      <SectionHeading as="h3" marginBottom="spacingS">
        Radio
      </SectionHeading>

      <Flex flexDirection="row" marginBottom="spacingM">
        <BaseCheckboxField {...args} type="radio" name="radio" id="radio" />
      </Flex>
    </Flex>
    <Flex flexDirection="column" marginBottom="spacingL">
      <SectionHeading as="h3" marginBottom="spacingS">
        Switch
      </SectionHeading>

      <Flex flexDirection="row" marginBottom="spacingM">
        <BaseCheckboxField {...args} type="switch" name="switch" id="switch" />
      </Flex>
    </Flex>
  </>
);

overview.args = {
  label: 'Some label text',
  validationMessage: 'validation message',
  helpText: 'help text',
  onChange: action('onChange'),
  onFocus: action('onFocus'),
  onBlur: action('onBlur'),
};
