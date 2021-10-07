import { FormControl, TextInput } from "@contentful/f36-components";
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
  textInputProps,
};
const otherProps = {};
<FormControl
  id={id}
  isRequired={required}
  isDisabled={isDisabled}
  isInvalid={validationMessage}>
  <FormControl.Label>{labelText}</FormControl.Label>
  <TextInput
    name={name}
    value={value}
    onChange={(e) => onChange(e)}
    onBlur={onBlur}
    type="text"
    {...textInputProps}
    {...otherProps} />
  <FormControl.HelpText>{helpText}</FormControl.HelpText>
  {validationMessage && <FormControl.ValidationMessage>{validationMessage}</FormControl.ValidationMessage>}
</FormControl>;

const prefix = 'prefix';
<FormControl id={`${prefix}-name-input`}>
  <FormControl.Label>Prefix id</FormControl.Label>
  <TextInput name={`${prefix}-name-input`} onChange={() => {}} />
</FormControl>;

const showValidationMessage = true;
const message = 'Some validation message';
<FormControl id="conditional-validation" isInvalid={showValidationMessage}>
  <FormControl.Label>Conditional validation</FormControl.Label>
  <TextInput name="conditional-validation" onChange={() => {}} />
  {showValidationMessage && <FormControl.ValidationMessage>{message}</FormControl.ValidationMessage>}
</FormControl>;

const hideValidationMessage = true;
<FormControl id="conditional-validation" isInvalid={!hideValidationMessage}>
  <FormControl.Label>Conditional validation</FormControl.Label>
  <TextInput name="conditional-validation" onChange={() => {}} />
  {!hideValidationMessage && <FormControl.ValidationMessage>Some validation message</FormControl.ValidationMessage>}
</FormControl>;

const controlledInputValue = 'input controlled value';
<FormControl id="input">
  <FormControl.Label>Controlled input</FormControl.Label>
  <TextInput name="input" value={controlledInputValue} onChange={() => {}} />
</FormControl>;

const conditionalIsDisabled = true;
const ref = {};
<FormControl
  className="text-field-class-name"
  testId="text-field-test-id"
  id="inputId"
  isRequired
  isDisabled={conditionalIsDisabled ? true : false}>
  <FormControl.Label>Label text</FormControl.Label>
  <TextInput
    name="email"
    value="some value"
    onChange={() => {}}
    onBlur={() => {}}
    type="text"
    placeholder="placeholder"
    maxLength={10}
    testId="text-input-test-id"
    ref={ref} />
  <FormControl.HelpText>some help text</FormControl.HelpText>
  <FormControl.ValidationMessage>Some validation message</FormControl.ValidationMessage>
</FormControl>;
