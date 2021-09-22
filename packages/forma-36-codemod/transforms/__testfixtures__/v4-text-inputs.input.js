import React from 'react';
import { TextInput, Textarea } from '@contentful/forma-36-react-components';

<TextInput
  id="someInput"
  name="userEmail"
  labelText="userEmail"
  className="my-extra-class"
/>;

<TextInput
  id="someInput"
  name="userEmail"
  labelText="userEmail"
  disabled
  required
/>;

<TextInput
  id="someInput"
  name="userEmail"
  labelText="userEmail"
  error
  readOnly
  width="large"
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
/>;

<Textarea
  id="someInput"
  name="userEmail"
  className="my-extra-class"
  error
  width="large"
/>;
