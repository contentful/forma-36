import React, { useState, useEffect } from 'react';
import { action } from '@storybook/addon-actions';
import { Checkbox, CheckboxGroup, CheckboxGroupProps } from '../src/checkbox';

export default {
  title: 'Form Elements/Checkbox/CheckboxGroup',
  component: CheckboxGroup,
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    children: { control: { disable: true } },
    onChange: { control: { disable: true } },
  },
};

export const Basic = (args: CheckboxGroupProps) => {
  const [groupState, setGroupState] = useState(args.value || args.defaultValue);
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

  const { value } = args;
  useEffect(() => {
    Array.isArray(value) && setGroupState(value);
  }, [value]);

  return (
    <CheckboxGroup {...args} value={groupState} onChange={handleOnChange}>
      <Checkbox value="apples">Apples</Checkbox>
      <Checkbox value="pears">Pears</Checkbox>
      <Checkbox value="peaches">Peaches</Checkbox>
      <Checkbox value="mangos">Mangos</Checkbox>
      <Checkbox value="kiwis">Kiwis</Checkbox>
      <Checkbox value="bananas">Bananas</Checkbox>
    </CheckboxGroup>
  );
};

Basic.args = {
  defaultValue: ['apples', 'kiwis'],
};

export const Uncontrolled = (args: CheckboxGroupProps) => {
  return (
    <CheckboxGroup defaultValue={args.defaultValue}>
      <Checkbox value="apples">Apples</Checkbox>
      <Checkbox value="pears">Pears</Checkbox>
      <Checkbox value="peaches">Peaches</Checkbox>
      <Checkbox value="mangos">Mangos</Checkbox>
      <Checkbox value="kiwis">Kiwis</Checkbox>
      <Checkbox value="bananas">Bananas</Checkbox>
    </CheckboxGroup>
  );
};

Uncontrolled.args = {
  defaultValue: ['apples', 'kiwis'],
};
