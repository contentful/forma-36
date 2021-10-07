import { Radio, FormControl } from "@contentful/f36-components";

<Radio id="Radio" aria-label="some label text" name="option1" />;

const isDisabled = false;
const isChecked = true;
<Radio
  isDisabled={isDisabled}
  isChecked={isChecked}
  onChange={() => {}}
  aria-label="some label"
  className="className" />;

<Radio
  id="radio-input"
  isDisabled
  value="value"
  name="selected"
  aria-disabled={true}
  role="option" />;

const selectedUnit = 'px';
<Radio
  id="unit-option-percent"
  value="percent"
  isChecked={selectedUnit === 'percent'}
  onChange={() => {}}
  className="radio-button">percent</Radio>;
<Radio
  id="unit-option-pixels"
  value="pixels"
  isChecked={selectedUnit === 'px'}
  onChange={() => {}}
  className="radio-button">pixels</Radio>;

const label = "Label";
<FormControl isInvalid>
  <Radio helpText="Some help text" value="some value" isChecked>{label}</Radio>
  <FormControl.ValidationMessage>some validation message</FormControl.ValidationMessage>
</FormControl>;
