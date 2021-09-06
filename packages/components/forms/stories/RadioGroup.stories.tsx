import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Flex } from '@contentful/f36-core';
import { Radio, RadioGroup, RadioGroupProps } from '../src/radio';

export default {
  title: 'Form Elements/Radio/RadioGroup',
  component: RadioGroup,
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

export const Basic = (args: RadioGroupProps) => {
  const [groupState, setGroupState] = useState(args.defaultValue);
  const handleOnChange = (e) => {
    e.persist();
    setGroupState(e.target.value);
    action('onChange')(e);
  };

  return (
    <RadioGroup {...args} value={groupState} onChange={handleOnChange}>
      <Flex flexDirection="column">
        <Radio value="apples">Apples</Radio>
        <Radio value="pears">Pears</Radio>
        <Radio value="peaches">Peaches</Radio>
        <Radio value="mangos">Mangos</Radio>
        <Radio value="kiwis">Kiwis</Radio>
        <Radio value="bananas">Bananas</Radio>
      </Flex>
    </RadioGroup>
  );
};

Basic.args = {
  defaultValue: 'apples',
  name: 'fruits',
};

export const Uncontrolled = () => {
  return (
    <RadioGroup name="fruits" defaultValue={'kiwis'}>
      <Flex flexDirection="column">
        <Radio value="apples">Apples</Radio>
        <Radio value="pears">Pears</Radio>
        <Radio value="peaches">Peaches</Radio>
        <Radio value="mangos">Mangos</Radio>
        <Radio value="kiwis">Kiwis</Radio>
        <Radio value="bananas">Bananas</Radio>
      </Flex>
    </RadioGroup>
  );
};
