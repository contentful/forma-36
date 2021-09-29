import React from 'react';

import { FormControl, Checkbox } from "@contentful/f36-components";

<Checkbox id="some id" helpText="helpText">test</Checkbox>;

<Checkbox id="some id" name="some name">test</Checkbox>;

<Checkbox id="some id" helpText="helpText">test</Checkbox>;

<FormControl id="some id">
  <Checkbox helpText="helpText">test</Checkbox>
  <FormControl.ValidationMessage>validation message</FormControl.ValidationMessage>
</FormControl>;

<FormControl id="some id">
  <Checkbox helpText="helpText" isDisabled>test</Checkbox>
  <FormControl.ValidationMessage>validation message</FormControl.ValidationMessage>
</FormControl>;

<FormControl id="some id" isRequired>
  <Checkbox helpText="helpText">test</Checkbox>
  <FormControl.ValidationMessage>validation message</FormControl.ValidationMessage>
</FormControl>;

<FormControl id="some id" isInvalid>
  <Checkbox helpText="helpText">test</Checkbox>
  <FormControl.ValidationMessage>validation message</FormControl.ValidationMessage>
</FormControl>;