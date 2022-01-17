import React from 'react';
import { Select } from '@contentful/f36-components';

export default function SelectPlaceholderExample() {
  return (
    <Select name="optionSelect" id="optionSelect" defaultValue="">
      <Select.Option value="" isDisabled>
        Please select an option...
      </Select.Option>
      <Select.Option value="optionOne">Option One</Select.Option>
      <Select.Option value="optionTwo">Option Two</Select.Option>
      <Select.Option value="optionThree" isDisabled>
        Option Three
      </Select.Option>
    </Select>
  );
}
