import React, { useState } from 'react';
import {
  TextInput,
  Form,
  FormControl,
  Button,
  Flex,
} from '@contentful/f36-components';

export default function FormCharacterCountExample() {
  const [submitted, setSubmitted] = useState(false);
  const submitForm = () => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 1000);
  };

  return (
    <Form onSubmit={submitForm}>
      <FormControl>
        <FormControl.Label isRequired>user name</FormControl.Label>
        <TextInput />
        <FormControl.HelpText>Please enter your username</FormControl.HelpText>
      </FormControl>
      <FormControl>
        <FormControl.Label isRequired>password</FormControl.Label>
        <TextInput maxLength={10} type="password" />
        <Flex justifyContent="space-between">
          <FormControl.HelpText>
            Password can only have 10 characters
          </FormControl.HelpText>
          <FormControl.Counter />
        </Flex>
      </FormControl>
      <Button variant="primary" type="submit" isDisabled={submitted}>
        {submitted ? 'Submitted' : 'Click me to submit'}
      </Button>
    </Form>
  );
}
