import React, { useState } from 'react';
import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import {
  Box,
  Button,
  Form,
  FormControl,
  TextInput,
  Textarea,
} from '@contentful/f36-components';
import { Heading } from '@contentful/f36-typography';
import { Layout } from '@contentful/f36-layout';

export default function BasicLayoutExample() {
  const [submitting, setSubmitting] = useState(false);
  const submitForm = () => {
    setSubmitting(true);
    setTimeout(() => setSubmitting(false), 1000);
  };

  return (
    <Layout
      className={css({
        backgroundColor: tokens.gray100,
      })}
      header={
        <Layout.Header>
          <Heading marginTop="spacingM" marginBottom="spacingM">
            Your Details
          </Heading>
        </Layout.Header>
      }
    >
      <Layout.Body>
        <Box padding="none" marginBottom="spacingXl">
          <Form onSubmit={submitForm}>
            <FormControl>
              <FormControl.Label isRequired>Name</FormControl.Label>
              <TextInput />
              <FormControl.HelpText>
                Please enter your first name
              </FormControl.HelpText>
            </FormControl>

            <FormControl>
              <FormControl.Label>Description</FormControl.Label>
              <Textarea />
              <FormControl.HelpText>
                Tell me about yourself
              </FormControl.HelpText>
            </FormControl>

            <Button variant="primary" type="submit" isDisabled={submitting}>
              {submitting ? 'Submitted' : 'Click me to submit'}
            </Button>
          </Form>
        </Box>
      </Layout.Body>
    </Layout>
  );
}