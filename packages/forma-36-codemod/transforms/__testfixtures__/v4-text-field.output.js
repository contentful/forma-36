import { FormControl, TextInput } from "@contentful/f36-components";

<FormControl id="inputId" isRequired isDisabled>
  <FormControl.Label>Label text</FormControl.Label>
  <TextInput
    className="text-field-class-name"
    testId="test-id"
    name="email"
    value="some value"
    placeholder="placeholder"
    maxLength={10}
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
    placeholder="placeholder"
    maxLength={10}
    onChange={() => {}}
    onBlur={() => {}} />
  <FormControl.HelpText>some help text</FormControl.HelpText>
  <FormControl.ValidationMessage>Some validation message</FormControl.ValidationMessage>
</FormControl>;
