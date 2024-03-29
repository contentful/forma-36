import React, { useState } from 'react';
import {
  Box,
  Button,
  Form,
  FormControl,
  TextInput,
  Textarea,
} from '@contentful/f36-components';
import { Header } from '@contentful/f36-header';
import { Layout } from '@contentful/f36-layout';
import { NavList } from '@contentful/f36-navlist';

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
          <Header title="Content Types" />
        </Layout.Header>
      }
      leftSidebar={
        <Box padding="spacingS">
          <NavList>
            <NavList.Item>Your Details</NavList.Item>
          </NavList>
        </Box>
      }
    >
      <Layout.Body>
        <Box padding="spacingS">
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
