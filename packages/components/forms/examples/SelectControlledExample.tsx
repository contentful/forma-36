import React, { useState } from 'react';
import { Select } from '@contentful/f36-components';

export default function SelectControlledExample() {
  const [selectValue, setSelectValue] = useState('optionOne');
  const handleOnChange = (event) => setSelectValue(event.target.value);

  return (
    <Select
      id="optionSelect-controlled"
      name="optionSelect-controlled"
      value={selectValue}
      onChange={handleOnChange}
    >
      <Select.Option value="optionOne">Option 1</Select.Option>
      <Select.Option value="optionTwo">Long Option 2</Select.Option>
    </Select>
  );
}
