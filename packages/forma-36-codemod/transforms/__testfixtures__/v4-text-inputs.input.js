import React from 'react';
import { TextInput, Textarea } from '@contentful/forma-36-react-components';

<TextInput
  id="someInput"
  name="userEmail"
  labelText="userEmail"
  className="my-extra-class"
  value="some value"
/>;

<TextInput
  id="someInput"
  name="userEmail"
  labelText="userEmail"
  disabled
  required
  value="some value"
  onChange={() => {}}
/>;

<TextInput
  id="someInput"
  name="userEmail"
  labelText="userEmail"
  error
  readOnly
  width="large"
  onChange={() => {}}
/>;

<TextInput
  id="someInput"
  name="userEmail"
  labelText="userEmail"
  withCopyButton
  width="small"
/>;

<Textarea
  id="someInput"
  name="userEmail"
  className="my-extra-class"
  disabled
  value="some value"
/>;

<Textarea
  id="someInput"
  name="userEmail"
  className="my-extra-class"
  error
  width="large"
  value="some value"
  onChange={() => {}}
/>;
