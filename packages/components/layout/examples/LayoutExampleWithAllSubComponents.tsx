import React, { useState } from 'react';
import {
  Box,
  Button,
  Form,
  FormControl,
  TextInput,
  Textarea,
} from '@contentful/f36-components';
import { Layout } from '@contentful/f36-layout';
import { Header } from '@contentful/f36-header';
import { Paragraph } from '@contentful/f36-typography';

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
          <Header title="Your Details" />
        </Layout.Header>
      }
      leftSidebar={
        <Layout.Sidebar>
          <Box padding="none" marginBottom="spacingXl">
            <Paragraph>Sidebar Content</Paragraph>
          </Box>
        </Layout.Sidebar>
      }
      rightSidebar={
        <Layout.Sidebar>
          <Box padding="none" marginBottom="spacingXl">
            <Paragraph>Sidebar Content</Paragraph>
          </Box>
        </Layout.Sidebar>
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
