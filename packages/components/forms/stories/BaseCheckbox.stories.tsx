import React, { useState } from 'react';
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
};

export const Controlled = (args: BaseCheckboxProps) => {
  const [radioState, setRadioState] = useState('');
  const [checkboxState, setCheckboxState] = useState(false);
  const [switchState, setSwitchState] = useState(false);

  return (
    <>
      <Flex flexDirection="column" marginBottom="spacingL">
        <SectionHeading as="h3" marginBottom="spacingS">
          Checkbox
        </SectionHeading>

        <Flex flexDirection="row" marginBottom="spacingM">
          <BaseCheckbox
            {...args}
            type="checkbox"
            name="checkbox"
            isChecked={checkboxState}
            onChange={(e) => {
              e.persist();
              setCheckboxState(!checkboxState);
              action('onChange')(e);
            }}
          />
        </Flex>
      </Flex>
      <Flex flexDirection="column" marginBottom="spacingL">
        <SectionHeading as="h3" marginBottom="spacingS">
          Radio
        </SectionHeading>

        <Flex flexDirection="row" marginBottom="spacingM">
          <BaseCheckbox
            {...args}
            type="radio"
            name="radio"
            value="yes"
            isChecked={radioState === 'yes'}
            onChange={(e) => {
              e.persist();
              setRadioState(e.target.value);
              action('onChange')(e);
            }}
          />
          <BaseCheckbox
            {...args}
            type="radio"
            name="radio"
            value="no"
            isChecked={radioState === 'no'}
            onChange={(e) => {
              e.persist();
              setRadioState(e.target.value);
              action('onChange')(e);
            }}
          />
        </Flex>
      </Flex>
      <Flex flexDirection="column" marginBottom="spacingL">
        <SectionHeading as="h3" marginBottom="spacingS">
          Switch
        </SectionHeading>

        <Flex flexDirection="row" marginBottom="spacingM">
          <BaseCheckbox
            {...args}
            type="switch"
            name="switch"
            isChecked={switchState}
            onChange={(e) => {
              e.persist();
              setSwitchState(!switchState);
              action('onChange')(e);
            }}
          />
        </Flex>
      </Flex>
    </>
  );
};

Controlled.args = {
  label: 'Some label',
  onBlur: action('onBlur'),
  onFocus: action('onFocus'),
  onKeyDown: action('onKeyDown'),
};

export const overview = () => (
  <>
    <Flex flexDirection="column" marginBottom="spacingL">
      <SectionHeading as="h1" marginBottom="spacingM">
        Uncontrolled components
      </SectionHeading>
      <SectionHeading as="h3" marginBottom="spacingS">
        Checkbox
      </SectionHeading>

      <Flex flexDirection="row" marginBottom="spacingM">
        <BaseCheckbox
          label="Label"
          defaultChecked={false}
          type="checkbox"
          name="checkbox"
        />
      </Flex>
    </Flex>
    <Flex flexDirection="column" marginBottom="spacingL">
      <SectionHeading as="h3" marginBottom="spacingS">
        Radio
      </SectionHeading>

      <Flex flexDirection="row" marginBottom="spacingM">
        <BaseCheckbox
          label="Label"
          defaultChecked={false}
          type="radio"
          name="radio"
        />
      </Flex>
    </Flex>
    <Flex flexDirection="column" marginBottom="spacingL">
      <SectionHeading as="h3" marginBottom="spacingS">
        Switch
      </SectionHeading>

      <Flex flexDirection="row" marginBottom="spacingM">
        <BaseCheckbox
          label="Label"
          defaultChecked={false}
          type="switch"
          name="switch"
        />
      </Flex>
    </Flex>
  </>
);
