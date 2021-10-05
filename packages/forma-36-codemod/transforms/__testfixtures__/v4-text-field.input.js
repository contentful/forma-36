import { TextField } from '@contentful/forma-36-react-components';

<TextField
  id="inputId"
  name="email"
  labelText="Label text"
  value="some value"
  helpText="some help text"
  className="text-field-class-name"
  testId="test-id"
  onChange={() => {}}
  onBlur={() => {}}
  textInputProps={{
    type: 'text',
    placeholder: 'placeholder',
    disabled: true,
    maxLength: 10
  }}
  validationMessage="Some validation message"
  required
/>;

const isDisabled = true;
<TextField
  id="inputId"
  name="email"
  labelText="Label text"
  value="some value"
  helpText="some help text"
  className="text-field-class-name"
  testId="test-id"
  onChange={() => {}}
  onBlur={() => {}}
  textInputProps={{
    type: 'text',
    placeholder: 'placeholder',
    disabled: isDisabled ? true : false,
    maxLength: 10
  }}
  validationMessage="Some validation message"
  required
/>;
