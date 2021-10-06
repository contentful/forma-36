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

<FormControl id="inputId" isRequired isDisabled>
  <FormControl.Label>Label text</FormControl.Label>
  <TextInput
    className="text-field-class-name"
    testId="test-id"
    name="email"
    value="some value"
    onChange={() => {}}
    onBlur={() => {}}
    maxLength={10}
    placeholder="placeholder" />
  <FormControl.HelpText>some help text</FormControl.HelpText>
  <FormControl.ValidationMessage>Some validation message</FormControl.ValidationMessage>
</FormControl>;

const isDisabled = true;
<FormControl id="inputId" isRequired isDisabled={isDisabled ? true : false}>
  <FormControl.Label>Label text</FormControl.Label>
  <TextInput
    className="text-field-class-name"
    testId="test-id"
    name="email"
    value="some value"
    onChange={() => {}}
    onBlur={() => {}}
    maxLength={10}
    placeholder="placeholder" />
  <FormControl.HelpText>some help text</FormControl.HelpText>
  <FormControl.ValidationMessage>Some validation message</FormControl.ValidationMessage>
</FormControl>;
