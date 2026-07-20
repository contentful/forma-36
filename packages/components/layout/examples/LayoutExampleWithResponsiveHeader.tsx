import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Form,
  FormControl,
  TextInput,
  Textarea,
  Layout,
} from '@contentful/f36-components';

export default function BasicLayoutExample() {
  const [submitting, setSubmitting] = useState(false);
  const submitForm = () => {
    setSubmitting(true);
    setTimeout(() => setSubmitting(false), 1000);
  };

  return (
    <Layout
      header={
        <Layout.Header>
          <Layout.HeaderInner
            title="Your Details"
            actions={
              <Flex gap="spacingS">
                <Button variant="primary" size="small">
                  Autofill with Provider 1
                </Button>
                <Button variant="primary" size="small">
                  Autofill with Provider 2
                </Button>
              </Flex>
            }
            withBackButton
            breadcrumbs={[{ content: 'Account Settings', url: '#' }]}
          />
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
