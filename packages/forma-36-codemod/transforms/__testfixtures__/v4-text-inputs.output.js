import React from 'react';

import { TextInput, Textarea } from "@contentful/f36-components";

<TextInput
  id="someInput"
  name="userEmail"
  aria-label="userEmail"
  className="my-extra-class" />;

<TextInput
  id="someInput"
  name="userEmail"
  aria-label="userEmail"
  isDisabled
  isRequired />;

<TextInput
  id="someInput"
  name="userEmail"
  aria-label="userEmail"
  isInvalid
  isReadOnly />;

<TextInput id="someInput" name="userEmail" aria-label="userEmail" withCopyButton />;

<Textarea id="someInput" name="userEmail" className="my-extra-class" isDisabled />;

<Textarea id="someInput" name="userEmail" className="my-extra-class" isInvalid />;
