import { TextField } from '@contentful/forma-36-react-components';

const prefix = 'prefix';
<TextField
  id={`${prefix}-name-input`}
  name={`${prefix}-name-input`}
  labelText="Prefix id"
  onChange={() => {}}
/>;

const showValidationMessage = true;
<TextField
  id="conditional-validation"
  name="conditional-validation"
  labelText="Conditional validation"
  onChange={() => {}}
  validationMessage={showValidationMessage ? 'Some validation message' : ''}
/>;

const isDisabled = true;
<TextField
  id="inputId"
  name="email"
  labelText="Label text"
  value="some value"
  helpText="some help text"
  className="text-field-class-name"
  testId="text-field-test-id"
  onChange={() => {}}
  onBlur={() => {}}
  textInputProps={{
    type: 'text',
    placeholder: 'placeholder',
    disabled: isDisabled ? true : false,
    maxLength: 10,
    testId: 'text-input-test-id'
  }}
  validationMessage="Some validation message"
  required
/>;
