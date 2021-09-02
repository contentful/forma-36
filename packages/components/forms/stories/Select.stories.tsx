import React from 'react';
import { SectionHeading } from '@contentful/f36-typography';
import { Select, SelectProps } from '../src';
import { Flex } from '@contentful/f36-core';

export default {
  title: 'Form Elements/Select',
  component: Select,
};

export const basic = (args: SelectProps) => (
  <Select id="optionSelect" name="optionSelect" {...args}>
    <Select.Option value="optionOne">Option 1</Select.Option>
    <Select.Option value="optionTwo">Long Option 2</Select.Option>
  </Select>
);

export const overview = () => (
  <>
    <SectionHeading marginBottom="spacingS" as="h3">
      Select default
    </SectionHeading>

    <Flex marginBottom="spacingS">
      <Select id="optionSelect" name="optionSelect">
        <Select.Option value="optionOne">Option 1</Select.Option>
        <Select.Option value="optionTwo">Long Option 2</Select.Option>
      </Select>
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Select full width
    </SectionHeading>

    <Flex marginBottom="spacingS">
      <Select id="optionSelect" name="optionSelect" width="full">
        <Select.Option value="optionOne">Option 1</Select.Option>
        <Select.Option value="optionTwo">Long Option 2</Select.Option>
      </Select>
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Select large width
    </SectionHeading>

    <Flex marginBottom="spacingS">
      <Select id="optionSelect" name="optionSelect" width="large">
        <Select.Option value="optionOne">Option 1</Select.Option>
        <Select.Option value="optionTwo">Long Option 2</Select.Option>
      </Select>
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Select small width
    </SectionHeading>
    <Flex marginBottom="spacingS">
      <Select id="optionSelect" name="optionSelect" width="small">
        <Select.Option value="optionOne">Option 1</Select.Option>
        <Select.Option value="optionTwo">Long Option 2</Select.Option>
      </Select>
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Select auto width
    </SectionHeading>

    <Flex marginBottom="spacingS">
      <Select id="optionSelect" name="optionSelect" width="auto">
        <Select.Option value="optionOne">Option 1</Select.Option>
        <Select.Option value="optionTwo">Long Option 2</Select.Option>
      </Select>
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Select disabled
    </SectionHeading>

    <Flex marginBottom="spacingS">
      <Select id="optionSelect" name="optionSelect" isDisabled>
        <Select.Option value="optionOne">Option 1</Select.Option>
        <Select.Option value="optionTwo">Long Option 2</Select.Option>
      </Select>
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Select with error
    </SectionHeading>

    <Flex marginBottom="spacingS">
      <Select id="optionSelect" name="optionSelect" isInvalid>
        <Select.Option value="optionOne">Option 1</Select.Option>
        <Select.Option value="optionTwo">Long Option 2</Select.Option>
      </Select>
    </Flex>
  </>
);

basic.args = {
  width: 'full',
};
