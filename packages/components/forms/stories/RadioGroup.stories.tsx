import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FormControl } from '@contentful/f36-forms';
import { action } from '@storybook/addon-actions';

import { Radio } from '../src';

export default {
  title: 'Form Elements/Radio/RadioGroup',
  component: Radio.Group,
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    children: { control: { disable: true } },
    onChange: { control: { disable: true } },
  },
} as Meta<typeof Radio.Group>;

type Story = StoryObj<typeof Radio.Group>;

export const Basic: Story = {
  args: {
    defaultValue: 'peaches',
    name: 'fruits',
  },
  argTypes: {
    defaultValue: { control: { disable: true } },
    value: {
      options: ['apples', 'pears', 'peaches', 'mangos', 'kiwis', 'bananas'],
      control: { type: 'select' },
    },
  },
  render: (args) => {
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
      <Radio.Group {...args} value={groupState} onChange={handleOnChange}>
        <Radio value="apples">Apples</Radio>
        <Radio value="pears">Pears</Radio>
        <Radio value="peaches">Peaches</Radio>
        <Radio value="mangos">Mangos</Radio>
        <Radio value="kiwis">Kiwis</Radio>
        <Radio value="bananas">Bananas</Radio>
      </Radio.Group>
    );
  },
};

export const Uncontrolled: Story = {
  args: {
    defaultValue: 'kiwis',
    name: 'fruits',
  },
  argTypes: {
    value: { control: { disable: true } },
  },
  render: (args) => {
    return (
      <Radio.Group {...args}>
        <Radio value="apples">Apples</Radio>
        <Radio value="pears">Pears</Radio>
        <Radio value="peaches">Peaches</Radio>
        <Radio value="mangos">Mangos</Radio>
        <Radio value="kiwis">Kiwis</Radio>
        <Radio value="bananas">Bananas</Radio>
      </Radio.Group>
    );
  },
};

export const WithFormControl: Story = {
  render: (args) => {
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
      <FormControl as="fieldset">
        <FormControl.Label as="legend">Fruits</FormControl.Label>
        <Radio.Group
          {...args}
          value={groupState}
          onChange={handleOnChange}
          name="Fruit"
        >
          <Radio value="apples">Apples</Radio>
          <Radio value="pears">Pears</Radio>
          <Radio value="peaches">Peaches</Radio>
          <Radio value="mangos">Mangos</Radio>
          <Radio value="kiwis">Kiwis</Radio>
          <Radio value="bananas">Bananas</Radio>
        </Radio.Group>
      </FormControl>
    );
  },
};
