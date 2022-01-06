import { Select, SelectField, Option } from '@contentful/forma-36-react-components';

<SelectField
  labelText="Select label"
  helpText="Some help text"
  validationMessage="Validation Message"
  onChange={() => {}}
  name="select-field"
  id="select-field"
  required
  selectProps={{ testId: 'cf-ui-select-field' }}>
  <Option value='1'>Option 1</Option>
  <Option value='2'>Option 2</Option>
  <Option value='3'>Option 3</Option>
</SelectField>;

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
