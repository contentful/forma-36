import { FormControl, TextInput } from "@contentful/f36-components";
const prefix = 'prefix';
<FormControl id={`${prefix}-name-input`}>
  <FormControl.Label>Prefix id</FormControl.Label>
  <TextInput name={`${prefix}-name-input`} onChange={() => {}} />
</FormControl>;

const showValidationMessage = true;
<FormControl id="conditional-validation" isInvalid={showValidationMessage}>
  <FormControl.Label>Conditional validation</FormControl.Label>
  <TextInput name="conditional-validation" onChange={() => {}} />
  {showValidationMessage && <FormControl.ValidationMessage>Some validation message</FormControl.ValidationMessage>}
</FormControl>;

const hideValidationMessage = true;
<FormControl id="conditional-validation" isInvalid={!hideValidationMessage}>
  <FormControl.Label>Conditional validation</FormControl.Label>
  <TextInput name="conditional-validation" onChange={() => {}} />
  {!hideValidationMessage && <FormControl.ValidationMessage>Some validation message</FormControl.ValidationMessage>}
</FormControl>;

const value = 'input controlled value';
<FormControl id="input">
  <FormControl.Label>Controlled input</FormControl.Label>
  <TextInput name="input" value={value} onChange={() => {}} />
</FormControl>;

const isDisabled = true;
const ref = {};
<FormControl
  className="text-field-class-name"
  testId="text-field-test-id"
  id="inputId"
  isRequired
  isDisabled={isDisabled ? true : false}>
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
