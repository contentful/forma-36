import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Flex } from '@contentful/f36-core';
import { Checkbox, CheckboxGroup, CheckboxGroupProps } from '../src/checkbox';

export default {
  title: 'Form Elements/Checkbox/CheckboxGroup',
  component: CheckboxGroup,
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

export const Basic = (args: CheckboxGroupProps) => {
  const [groupState, setGroupState] = useState(args.defaultValue);
  const handleOnChange = (e) => {
    e.persist();
    const value = e.target.value;
    setGroupState((prevState) =>
      prevState.includes(value)
        ? prevState.filter((v) => v !== value)
        : [...prevState, value],
    );
    action('onChange')(e);
  };

  return (
    <CheckboxGroup {...args} value={groupState} onChange={handleOnChange}>
      <Flex flexDirection="column">
        <Checkbox value="apples">Apples</Checkbox>
        <Checkbox value="pears">Pears</Checkbox>
        <Checkbox value="peaches">Peaches</Checkbox>
        <Checkbox value="mangos">Mangos</Checkbox>
        <Checkbox value="kiwis">Kiwis</Checkbox>
        <Checkbox value="bananas">Bananas</Checkbox>
      </Flex>
    </CheckboxGroup>
  );
};

Basic.args = {
  defaultValue: ['apples', 'kiwis'],
};

export const Uncontrolled = (args: CheckboxGroupProps) => {
  return (
    <CheckboxGroup defaultValue={args.defaultValue}>
      <Flex flexDirection="column">
        <Checkbox value="apples">Apples</Checkbox>
        <Checkbox value="pears">Pears</Checkbox>
        <Checkbox value="peaches">Peaches</Checkbox>
        <Checkbox value="mangos">Mangos</Checkbox>
        <Checkbox value="kiwis">Kiwis</Checkbox>
        <Checkbox value="bananas">Bananas</Checkbox>
      </Flex>
    </CheckboxGroup>
  );
};

Uncontrolled.args = {
  defaultValue: ['apples', 'kiwis'],
};
