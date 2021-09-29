import { Select, Option } from '@contentful/forma-36-react-components';
import { FormControl, Option, Select } from "@contentful/f36-components";

<FormControl id="select-field" name="select-field">
  <FormControl.Label>Select label</FormControl.Label>
  <Select>
    <Option value='1'>Option 1</Option>
    <Option value='2'>Option 2</Option>
    <Option value='3'>Option 3</Option>
  </Select>
  <FormControl.HelpText>Some help text</FormControl.HelpText>
  <FormControl.ValidationMessage>Validation Message</FormControl.ValidationMessage>
</FormControl>;

<Select
  aria-label="Select"
  testId="timezone-input"
  value="value"
  width="medium"
  isDisabled={true}
  onChange={() => {}}>
  <Option value='1'>Option 1</Option>
  <Option value='2'>Option 2</Option>
  <Option value='3'>Option 3</Option>
</Select>;

const options = [{
  value: 1,
  label: 'Option 1',
}, {
  value: 2,
  label: 'Option 2',
}, {
  value: 3,
  label: 'Option 3',
}];
<Select
  aria-label="Select"
  testId="timezone-input"
  value="value"
  width="medium"
  isDisabled={true}
  onChange={() => {}}>
    {options.map(({value, label}) => {
      <Option key={value} value={value}>{label}</Option>
    })}
</Select>;
