import { TextField } from '@contentful/forma-36-react-components';

const {
  id,
  name,
  labelText,
  helpText,
  value,
  onChange,
  onBlur,
  isDisabled,
  validationMessage,
  required,
  textInputProps,
} = {
  id: 'inputId',
  name: 'inputName',
  labelText: 'Input label',
  helpText: 'Input help',
  value: 'Value',
  onChange: () => {},
  onBlur: () => {},
  isDisabled: false,
  validationMessage: 'Validation message',
  required,
  textInputProps: {},
};
const otherProps = {};
<TextField
  id={id}
  name={name}
  labelText={labelText}
  helpText={helpText}
  value={value}
  onChange={(e) => onChange(e)}
  onBlur={onBlur}
  textInputProps={{
    disabled: isDisabled,
    type: 'text',
    ...textInputProps,
    ...otherProps,
  }}
  validationMessage={validationMessage}
  required={required}
/>;

const prefix = 'prefix';
<TextField
  id={`${prefix}-name-input`}
  name={`${prefix}-name-input`}
  labelText="Prefix id"
  onChange={() => {}}
/>;

const showValidationMessage = true;
const message = 'Some validation message';
<TextField
  id="conditional-validation"
  name="conditional-validation"
  labelText="Conditional validation"
  onChange={() => {}}
  validationMessage={showValidationMessage ? message : ''}
/>;

const hideValidationMessage = true;
<TextField
  id="conditional-validation"
  name="conditional-validation"
  labelText="Conditional validation"
  onChange={() => {}}
  validationMessage={hideValidationMessage ? '' : 'Some validation message'}
/>;

const controlledInputValue = 'input controlled value';
<TextField
  id="input"
  name="input"
  labelText="Controlled input"
  value={controlledInputValue}
  onChange={() => {}}
/>;

<TextField
  id="inputId"
  name="email"
  labelText="Counting characters and HelpText"
  textInputProps={{
    maxLength: 10,
  }}
  helpText="Some help text"
/>;

<TextField
  id="inputId"
  name="email"
  labelText="Counting characters"
  textInputProps={{
    maxLength: 10,
  }}
/>;

const conditionalIsDisabled = true;
const ref = {};
<TextField
  id="inputId"
  name="email"
  labelText="Label text"
  value="some value"
  helpText="Some help text"
  className="text-field-class-name"
  testId="text-field-test-id"
  onChange={() => {}}
  onBlur={() => {}}
  textInputProps={{
    type: 'text',
    placeholder: 'placeholder',
    disabled: conditionalIsDisabled ? true : false,
    maxLength: 10,
    testId: 'text-input-test-id',
    inputRef: ref
  }}
  validationMessage="Some validation message"
  required
/>;

const validationMessageCondition = 0;
<TextField
  id="conditional-validation"
  name="conditional-validation"
  labelText="Conditional validation"
  onChange={() => {}}
  validationMessage={validationMessageCondition > 0 ? 'Some validation message' : ''}
/>;
<TextField
  id="conditional-validation"
  name="conditional-validation"
  labelText="Conditional validation"
  onChange={() => {}}
  validationMessage={validationMessageCondition > 0 ? '' : 'Some validation message'}
/>;

<TextField
  textarea
  id="textarea"
  name="textarea"
  labelText="Text area"
  textInputProps={{
    rows: 5,
  }}
  value="some value"
/>;

const textLinkProps = {
  text: 'TextLink',
  icon: 'Preview',
  href: '#'
};
<TextField
  id="with-text-link"
  name="with-text-link"
  labelText="With text link"
  textLinkProps={textLinkProps}
  value="some value"
/>;

<TextField
  id="with-text-link"
  name="with-text-link"
  labelText="With text link"
  textLinkProps={{
    text: 'TextLink',
    icon: 'Preview',
    href: '#'
  }}
  value="some value"
/>;
