import React from 'react';
import { SectionHeading } from '@contentful/f36-typography';
import { Select, SelectProps } from './Select';
import { Option } from './Option';
import { Flex } from '@contentful/f36-core';

export default {
  title: 'Form Elements/Select',
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
    <SectionHeading marginBottom="spacingS" as="h3">
      Select default
    </SectionHeading>

    <Flex marginBottom="spacingS">
      <Select id="optionSelect" name="optionSelect">
        <Option value="optionOne">Option 1</Option>
        <Option value="optionTwo">Long Option 2</Option>
      </Select>
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Select full width
    </SectionHeading>

    <Flex marginBottom="spacingS">
      <Select id="optionSelect" name="optionSelect" width="full">
        <Option value="optionOne">Option 1</Option>
        <Option value="optionTwo">Long Option 2</Option>
      </Select>
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Select large width
    </SectionHeading>

    <Flex marginBottom="spacingS">
      <Select id="optionSelect" name="optionSelect" width="large">
        <Option value="optionOne">Option 1</Option>
        <Option value="optionTwo">Long Option 2</Option>
      </Select>
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Select small width
    </SectionHeading>
    <Flex marginBottom="spacingS">
      <Select id="optionSelect" name="optionSelect" width="small">
        <Option value="optionOne">Option 1</Option>
        <Option value="optionTwo">Long Option 2</Option>
      </Select>
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Select auto width
    </SectionHeading>

    <Flex marginBottom="spacingS">
      <Select id="optionSelect" name="optionSelect" width="auto">
        <Option value="optionOne">Option 1</Option>
        <Option value="optionTwo">Long Option 2</Option>
      </Select>
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Select disabled
    </SectionHeading>

    <Flex marginBottom="spacingS">
      <Select id="optionSelect" name="optionSelect" isDisabled>
        <Option value="optionOne">Option 1</Option>
        <Option value="optionTwo">Long Option 2</Option>
      </Select>
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Select with error
    </SectionHeading>

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
