import { Select, FormControl } from "@contentful/f36-components";

<FormControl id="select-field" isRequired>
  <FormControl.Label>Select label</FormControl.Label>
  <Select name="select-field" onChange={() => {}} testId="cf-ui-select-field">
    <Select.Option value='1'>Option 1</Select.Option>
    <Select.Option value='2'>Option 2</Select.Option>
    <Select.Option value='3'>Option 3</Select.Option>
  </Select>
  <FormControl.HelpText>Some help text</FormControl.HelpText>
  <FormControl.ValidationMessage>Validation Message</FormControl.ValidationMessage>
</FormControl>;

<Select
  aria-label="Select"
  testId="timezone-input"
  value="value"
  isDisabled={true}
  onChange={() => {}}>
  <Select.Option value='1'>Option 1</Select.Option>
  <Select.Option value='2'>Option 2</Select.Option>
  <Select.Option value='3'>Option 3</Select.Option>
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
  isDisabled={true}
  onChange={() => {}}>
    {options.map(({value, label}) => {
      <Select.Option key={value} value={value}>{label}</Select.Option>
    })}
</Select>;
