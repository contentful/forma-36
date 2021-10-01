import { RadioButton, RadioButtonField } from '@contentful/forma-36-react-components';

<RadioButton id="Radio" labelText="some label text" name="option1" />;

const isDisabled = false;
const isChecked = true;
<RadioButton
  disabled={isDisabled}
  checked={isChecked}
  onChange={() => {}}
  labelText="some label"
  className="className" />;

<RadioButton
  type="radio"
  id="radio-input"
  disabled
  value="value"
  name="selected"
  aria-disabled={true}
  role="option" />;

const selectedUnit = 'px';
<RadioButtonField
  className="radio-button"
  id="unit-option-percent"
  checked={selectedUnit === 'percent'}
  labelText="percent"
  value="percent"
  onChange={() => {}}
  labelIsLight
/>;
<RadioButtonField
  className="radio-button"
  id="unit-option-pixels"
  checked={selectedUnit === 'px'}
  labelText="pixels"
  value="pixels"
  onChange={() => {}}
  labelIsLight
/>;

const label = "Label";
<RadioButtonField
  helpText="Some help text"
  value="some value"
  validationMessage="some validation message"
  invalid
  checked
  labelText={label}
  />;
