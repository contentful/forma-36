import React from 'react';

import { CopyButton, TextInput, Textarea } from "@contentful/f36-components";

<TextInput
  id="someInput"
  name="userEmail"
  aria-label="userEmail"
  className="my-extra-class"
  defaultValue="some value" />;

<TextInput
  id="someInput"
  name="userEmail"
  aria-label="userEmail"
  isDisabled
  isRequired
  value="some value"
  onChange={() => {}} />;

<TextInput
  id="someInput"
  name="userEmail"
  aria-label="userEmail"
  isInvalid
  isReadOnly
  onChange={() => {}} />;

<TextInput.Group>
  <TextInput id="someInput" name="userEmail" aria-label="userEmail" />
  <CopyButton />
</TextInput.Group>;

<Textarea
  id="someInput"
  name="userEmail"
  className="my-extra-class"
  isDisabled
  defaultValue="some value" />;

<Textarea
  id="someInput"
  name="userEmail"
  className="my-extra-class"
  isInvalid
  value="some value"
  onChange={() => {}} />;
