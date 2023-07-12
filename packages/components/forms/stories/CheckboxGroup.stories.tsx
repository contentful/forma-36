import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Checkbox, CheckboxGroupProps } from '../src';

export default {
  title: 'Form Elements/Checkbox/CheckboxGroup',
  component: Checkbox.Group,
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    children: { control: { disable: true } },
    onChange: { control: { disable: true } },
  },
} as Meta<typeof Checkbox.Group>;

type Story = StoryObj<typeof Checkbox.Group>;

export const Basic: Story = {
  args: {
    defaultValue: ['apples', 'kiwis'],
  },
  render: (args) => {
    const [groupState, setGroupState] = useState(
      args.value || args.defaultValue,
    );
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
      <Checkbox.Group {...args} value={groupState} onChange={handleOnChange}>
        <Checkbox value="apples">Apples</Checkbox>
        <Checkbox value="pears">Pears</Checkbox>
        <Checkbox value="peaches">Peaches</Checkbox>
        <Checkbox value="mangos">Mangos</Checkbox>
        <Checkbox value="kiwis">Kiwis</Checkbox>
        <Checkbox value="bananas">Bananas</Checkbox>
      </Checkbox.Group>
    );
  },
};

export const Uncontrolled: Story = {
  args: {
    defaultValue: ['apples', 'kiwis'],
  },
  render: (args: CheckboxGroupProps) => {
    return (
      <Checkbox.Group defaultValue={args.defaultValue}>
        <Checkbox value="apples">Apples</Checkbox>
        <Checkbox value="pears">Pears</Checkbox>
        <Checkbox value="peaches">Peaches</Checkbox>
        <Checkbox value="mangos">Mangos</Checkbox>
        <Checkbox value="kiwis">Kiwis</Checkbox>
        <Checkbox value="bananas">Bananas</Checkbox>
      </Checkbox.Group>
    );
  },
};
