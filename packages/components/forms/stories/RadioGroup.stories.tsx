import React, { useState, useEffect } from 'react';
import { action } from '@storybook/addon-actions';
import { Radio, RadioGroup, RadioGroupProps } from '../src/radio';

export default {
  title: 'Form Elements/Radio/RadioGroup',
  component: RadioGroup,
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    children: { control: { disable: true } },
    onChange: { control: { disable: true } },
  },
};

export const Basic = (args: RadioGroupProps) => {
  const [groupState, setGroupState] = useState(args.defaultValue);
  const handleOnChange = (e) => {
    e.persist();
    setGroupState(e.target.value);
    action('onChange')(e);
  };

  const { value } = args;
  useEffect(() => {
    setGroupState(value);
  }, [value]);

  return (
    <RadioGroup {...args} value={groupState} onChange={handleOnChange}>
      <Radio value="apples">Apples</Radio>
      <Radio value="pears">Pears</Radio>
      <Radio value="peaches">Peaches</Radio>
      <Radio value="mangos">Mangos</Radio>
      <Radio value="kiwis">Kiwis</Radio>
      <Radio value="bananas">Bananas</Radio>
    </RadioGroup>
  );
};

Basic.argTypes = {
  defaultValue: { control: { disable: true } },
  value: {
    options: ['apples', 'pears', 'peaches', 'mangos', 'kiwis', 'bananas'],
    control: { type: 'select' },
  },
};

Basic.args = {
  defaultValue: 'peaches',
  name: 'fruits',
};

export const Uncontrolled = (args: RadioGroupProps) => {
  return (
    <RadioGroup {...args}>
      <Radio value="apples">Apples</Radio>
      <Radio value="pears">Pears</Radio>
      <Radio value="peaches">Peaches</Radio>
      <Radio value="mangos">Mangos</Radio>
      <Radio value="kiwis">Kiwis</Radio>
      <Radio value="bananas">Bananas</Radio>
    </RadioGroup>
  );
};

Uncontrolled.argTypes = {
  value: { control: { disable: true } },
};

Uncontrolled.args = {
  defaultValue: 'kiwis',
  name: 'fruits',
};
