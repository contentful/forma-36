import { FormControl, TextInput } from "@contentful/f36-components";

const showValidationMessage = true;
<FormControl id="conditional-validation" isInvalid={showValidationMessage}>
  <FormControl.Label>Conditional validation</FormControl.Label>
  <TextInput
    name="conditional-validation"
    onChange={() => {}} />
  {showValidationMessage && <FormControl.ValidationMessage>Some validation message</FormControl.ValidationMessage>}
</FormControl>;

<FormControl id="inputId" isRequired isDisabled>
  <FormControl.Label>Label text</FormControl.Label>
  <TextInput
    className="text-field-class-name"
    testId="test-id"
    name="email"
    value="some value"
    maxLength={10}
    placeholder="placeholder"
    onChange={() => {}}
    onBlur={() => {}} />
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
    maxLength={10}
    placeholder="placeholder"
    onChange={() => {}}
    onBlur={() => {}} />
  <FormControl.HelpText>some help text</FormControl.HelpText>
  <FormControl.ValidationMessage>Some validation message</FormControl.ValidationMessage>
</FormControl>;
