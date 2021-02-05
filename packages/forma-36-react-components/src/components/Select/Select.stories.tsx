import React from 'react';

import Select, { SelectProps } from './Select';
import Option from './Option';
import Flex from '../Flex/Flex';
import SectionHeading from '../Typography/SectionHeading';

export default {
  title: 'Forms/Select',
  component: Select,
  parameters: {
    propTypes: [Select['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    onFocus: { control: { disable: true } },
    onBlur: { control: { disable: true } },
    isDisabled: { control: { disable: true } },
    hasError: { control: { disable: true } },
  },
};

export const basic = (args: SelectProps) => (
  <Select id="optionSelect" name="optionSelect" width={args.width}>
    <Option value="optionOne">Option 1</Option>
    <Option value="optionTwo">Long Option 2</Option>
  </Select>
);

export const overview = () => (
  <>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">Select default</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <Select id="optionSelect" name="optionSelect">
        <Option value="optionOne">Option 1</Option>
        <Option value="optionTwo">Long Option 2</Option>
      </Select>
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">Select full width</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <Select id="optionSelect" name="optionSelect" width="full">
        <Option value="optionOne">Option 1</Option>
        <Option value="optionTwo">Long Option 2</Option>
      </Select>
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">Select large width</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <Select id="optionSelect" name="optionSelect" width="large">
        <Option value="optionOne">Option 1</Option>
        <Option value="optionTwo">Long Option 2</Option>
      </Select>
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">Select small width</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <Select id="optionSelect" name="optionSelect" width="small">
        <Option value="optionOne">Option 1</Option>
        <Option value="optionTwo">Long Option 2</Option>
      </Select>
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">Select auto width</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <Select id="optionSelect" name="optionSelect" width="auto">
        <Option value="optionOne">Option 1</Option>
        <Option value="optionTwo">Long Option 2</Option>
      </Select>
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">Select disabled</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <Select id="optionSelect" name="optionSelect" isDisabled>
        <Option value="optionOne">Option 1</Option>
        <Option value="optionTwo">Long Option 2</Option>
      </Select>
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">Select with error</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <Select id="optionSelect" name="optionSelect" hasError>
        <Option value="optionOne">Option 1</Option>
        <Option value="optionTwo">Long Option 2</Option>
      </Select>
    </Flex>
  </>
);

basic.args = {
  width: 'full',
};
