import React from 'react';
import { Select, SectionHeading, Stack } from '@contentful/f36-components';

export default function SelectSizes() {
  return (
    <Stack>
      <SectionHeading>Size Medium</SectionHeading>
      <Select
        id="optionSelect-medium"
        name="optionSelect-medium"
        defaultValue="optionTwo"
      >
        <Select.Option value="optionOne">Option 1</Select.Option>
        <Select.Option value="optionTwo">Option 2</Select.Option>
        <Select.Option value="optionThree" isDisabled>
          Disabled option
        </Select.Option>
      </Select>
      <SectionHeading>Size Small</SectionHeading>
      <Select
        id="optionSelect-small"
        name="optionSelect-small"
        size="small"
        defaultValue="optionTwo"
      >
        <Select.Option value="optionOne">Option 1</Select.Option>
        <Select.Option value="optionTwo">Option 2</Select.Option>
        <Select.Option value="optionThree" isDisabled>
          Disabled option
        </Select.Option>
      </Select>
    </Stack>
  );
}
