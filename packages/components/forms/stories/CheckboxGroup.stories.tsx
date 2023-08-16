import React, { useState, useEffect } from 'react';
import { action } from '@storybook/addon-actions';
import { Checkbox, CheckboxGroupProps } from '../src';
import { FormControl } from '@contentful/f36-forms';
import { Paragraph } from '@contentful/f36-typography';

export default {
  title: 'Form Elements/Checkbox/CheckboxGroup',
  component: Checkbox.Group,
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
    <Checkbox.Group {...args} value={groupState} onChange={handleOnChange}>
      <Checkbox value="apples">Apples</Checkbox>
      <Checkbox value="pears">Pears</Checkbox>
      <Checkbox value="peaches">Peaches</Checkbox>
      <Checkbox value="mangos">Mangos</Checkbox>
      <Checkbox value="kiwis">Kiwis</Checkbox>
      <Checkbox value="bananas">Bananas</Checkbox>
    </Checkbox.Group>
  );
};

Basic.args = {
  defaultValue: ['apples', 'kiwis'],
};

export const Uncontrolled = (args: CheckboxGroupProps) => {
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
};

Uncontrolled.args = {
  defaultValue: ['apples', 'kiwis'],
};

export const WithFormControl = (args: CheckboxGroupProps) => {
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
    <FormControl>
      <FormControl.Label as="legend" marginBottom="spacing2Xs">
        Fruits
      </FormControl.Label>
      <Paragraph>Choose your favorit fruit</Paragraph>
      <Checkbox.Group
        {...args}
        value={groupState}
        name="Fruit"
        onChange={handleOnChange}
      >
        <Checkbox value="apples">Apples</Checkbox>
        <Checkbox value="pears">Pears</Checkbox>
        <Checkbox value="peaches">Peaches</Checkbox>
        <Checkbox value="mangos">Mangos</Checkbox>
        <Checkbox value="kiwis">Kiwis</Checkbox>
        <Checkbox value="bananas">Bananas</Checkbox>
      </Checkbox.Group>
    </FormControl>
  );
};

WithFormControl.args = {
  defaultValue: ['apples', 'kiwis'],
};
