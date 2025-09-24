import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Flex } from '@contentful/f36-core';
import { Heading, SectionHeading, Text } from '@contentful/f36-typography';
import { ClockIcon } from '@contentful/f36-icons';
//import { MenuItem } from '@contentful/f36-menu';
import { Button } from '@contentful/f36-button';
import { FormControl, TextInput, Textarea, Form } from '@contentful/f36-forms';

import { Card, type CardProps } from '../src';

export default {
  argTypes: {
    as: { control: { disable: true } },
    className: { control: { disable: true } },
    rel: { control: { disable: true } },
    style: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
  component: Card,
  parameters: {
    propTypes: Card['__docgenInfo'],
  },
  title: 'Components/Card',
  decorators: [
    (Story) => (
      <Flex flexDirection="column" style={{ maxWidth: '500px' }}>
        <Story />
      </Flex>
    ),
  ],
} as Meta;

export const Default: StoryObj<CardProps> = ({ children, ...args }) => {
  return (
    <Card {...args}>
      <Text>{children}</Text>
    </Card>
  );
};

Default.args = {
  children: 'This is the Card’s content',
};

export const WithFocusableChildren = () => {
  const [submitted, setSubmit] = useState(false);
  const onSubmit = () => setSubmit(true);

  return (
    <Card>
      <Form onSubmit={() => onSubmit()}>
        <FormControl>
          <FormControl.Label>Name</FormControl.Label>
          <TextInput />
          <FormControl.HelpText>
            Please enter your first name
          </FormControl.HelpText>
        </FormControl>

        <FormControl>
          <FormControl.Label>Description</FormControl.Label>
          <Textarea />
          <FormControl.HelpText>Tell me about youself</FormControl.HelpText>
        </FormControl>
        <Button variant="primary" type="submit" isDisabled={submitted}>
          {submitted ? 'Submitted' : 'Click me to submit'}
        </Button>
      </Form>
    </Card>
  );
};

export const WithOnClick = (args: CardProps) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Card {...args} onClick={() => setShow(!show)}>
        Click on this card
        <br />
        {show && (
          <span role="img" aria-label="sparkles">
            ✨✨✨
          </span>
        )}
      </Card>
    </div>
  );
};

export const SelectableCards = () => {
  const [taco, setTaco] = useState(false);
  const [pizza, setPizza] = useState(false);
  const [broccoli, setBroccoli] = useState(false);
  return (
    <div style={{ maxWidth: '280px' }}>
      <Heading>What is your favorite food?</Heading>
      <Flex justifyContent="space-between" gap="spacingM">
        <Card as="button" onClick={() => setTaco(!taco)} isSelected={taco}>
          <span style={{ fontSize: '3rem' }} role="img" aria-label="taco">
            🌮
          </span>
        </Card>
        <Card as="button" onClick={() => setPizza(!pizza)} isSelected={pizza}>
          <span style={{ fontSize: '3rem' }} role="img" aria-label="pizza">
            🍕
          </span>
        </Card>
        <Card
          as="button"
          onClick={() => setBroccoli(!broccoli)}
          isSelected={broccoli}
        >
          <span style={{ fontSize: '3rem' }} role="img" aria-label="broccoli">
            🥦
          </span>
        </Card>
      </Flex>
    </div>
  );
};

export const WithLinkAndTarget: StoryObj<CardProps<'a'>> = (args) => {
  return (
    <Card {...args}>
      <Text>
        Forma 36 is an open-source design system by Contentful created with the
        intent to reduce the overhead of creating UI by providing tools and
        guidance for digital teams building and extending Contentful products.
      </Text>
    </Card>
  );
};

WithLinkAndTarget.args = {
  as: 'a',
  href: 'https://f36.contentful.com/',
  target: '_blank',
  title: 'Forma 36',
};

export const WithLoadingState: StoryObj<CardProps> = (args) => {
  return (
    <Card {...args}>
      <Text>
        Forma 36 is an open-source design system by Contentful created with the
        intent to reduce the overhead of creating UI by providing tools and
        guidance for digital teams building and extending Contentful products.
      </Text>
    </Card>
  );
};

WithLoadingState.args = {
  isLoading: true,
};

export const Overview = () => {
  return (
    <>
      <SectionHeading as="h3" marginBottom="spacingS">
        Default
      </SectionHeading>

      <Flex flexWrap="wrap">
        <Flex
          flexDirection="column"
          marginBottom="spacingM"
          marginRight="spacingM"
        >
          <SectionHeading as="h3" marginBottom="spacingS">
            Idle
          </SectionHeading>

          <Card icon={<ClockIcon />} title="Forma 36">
            <Text>
              Forma 36 is an open-source design system by Contentful created
              with the intent to reduce the overhead of creating UI by providing
              tools and guidance for digital teams building and extending
              Contentful products.
            </Text>
          </Card>
        </Flex>

        <Flex
          flexDirection="column"
          marginBottom="spacingM"
          marginRight="spacingM"
        >
          <SectionHeading as="h3" marginBottom="spacingS">
            Hover
          </SectionHeading>

          <Card
            actions={[
              <li key="edit">Edit</li>,
              <li key="download">Download</li>,
              <li key="remove">Remove</li>,
              // <MenuItem key="edit">Edit</MenuItem>,
              // <MenuItem key="download">Download</MenuItem>,
              // <MenuItem key="remove">Remove</MenuItem>,
            ]}
            isHovered
            title="Forma 36"
          >
            <Text>
              Forma 36 is an open-source design system by Contentful created
              with the intent to reduce the overhead of creating UI by providing
              tools and guidance for digital teams building and extending
              Contentful products.
            </Text>
          </Card>
        </Flex>

        <Flex
          flexDirection="column"
          marginBottom="spacingM"
          marginRight="spacingM"
        >
          <SectionHeading as="h3" marginBottom="spacingS">
            Selected
          </SectionHeading>

          <Card isSelected title="Forma 36">
            <Text>
              Forma 36 is an open-source design system by Contentful created
              with the intent to reduce the overhead of creating UI by providing
              tools and guidance for digital teams building and extending
              Contentful products.
            </Text>
          </Card>
        </Flex>
      </Flex>

      <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingL">
        Large padding
      </SectionHeading>

      <Flex flexWrap="wrap">
        <Flex
          flexDirection="column"
          marginBottom="spacingM"
          marginRight="spacingM"
        >
          <SectionHeading as="h3" marginBottom="spacingS">
            Idle
          </SectionHeading>

          <Card padding="large" title="Forma 36">
            <Text>
              Forma 36 is an open-source design system by Contentful created
              with the intent to reduce the overhead of creating UI by providing
              tools and guidance for digital teams building and extending
              Contentful products.
            </Text>
          </Card>
        </Flex>

        <Flex
          flexDirection="column"
          marginBottom="spacingM"
          marginRight="spacingM"
        >
          <SectionHeading as="h3" marginBottom="spacingS">
            Hover
          </SectionHeading>

          <Card
            actions={[
              <li key="edit">Edit</li>,
              <li key="download">Download</li>,
              <li key="remove">Remove</li>,
              // <MenuItem key="edit">Edit</MenuItem>,
              // <MenuItem key="download">Download</MenuItem>,
              // <MenuItem key="remove">Remove</MenuItem>,
            ]}
            isHovered
            padding="large"
            title="Forma 36"
          >
            <Text>
              Forma 36 is an open-source design system by Contentful created
              with the intent to reduce the overhead of creating UI by providing
              tools and guidance for digital teams building and extending
              Contentful products.
            </Text>
          </Card>
        </Flex>

        <Flex
          flexDirection="column"
          marginBottom="spacingM"
          marginRight="spacingM"
        >
          <SectionHeading as="h3" marginBottom="spacingS">
            Selected
          </SectionHeading>

          <Card isSelected padding="large" title="Forma 36">
            <Text>
              Forma 36 is an open-source design system by Contentful created
              with the intent to reduce the overhead of creating UI by providing
              tools and guidance for digital teams building and extending
              Contentful products.
            </Text>
          </Card>
        </Flex>
      </Flex>
      <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingL">
        None Padding
      </SectionHeading>

      <Flex flexWrap="wrap">
        <Flex
          flexDirection="column"
          marginBottom="spacingM"
          marginRight="spacingM"
        >
          <SectionHeading as="h3" marginBottom="spacingS">
            Idle
          </SectionHeading>

          <Card padding="none" title="Forma 36">
            <Text>
              Forma 36 is an open-source design system by Contentful created
              with the intent to reduce the overhead of creating UI by providing
              tools and guidance for digital teams building and extending
              Contentful products.
            </Text>
          </Card>
        </Flex>

        <Flex
          flexDirection="column"
          marginBottom="spacingM"
          marginRight="spacingM"
        >
          <SectionHeading as="h3" marginBottom="spacingS">
            Hover
          </SectionHeading>

          <Card
            actions={[
              <li key="edit">Edit</li>,
              <li key="download">Download</li>,
              <li key="remove">Remove</li>,
              // <MenuItem key="edit">Edit</MenuItem>,
              // <MenuItem key="download">Download</MenuItem>,
              // <MenuItem key="remove">Remove</MenuItem>,
            ]}
            isHovered
            padding="none"
            title="Forma 36"
          >
            <Text>
              Forma 36 is an open-source design system by Contentful created
              with the intent to reduce the overhead of creating UI by providing
              tools and guidance for digital teams building and extending
              Contentful products.
            </Text>
          </Card>
        </Flex>

        <Flex
          flexDirection="column"
          marginBottom="spacingM"
          marginRight="spacingM"
        >
          <SectionHeading as="h3" marginBottom="spacingS">
            Selected
          </SectionHeading>

          <Card isSelected padding="none" title="Forma 36">
            <Text>
              Forma 36 is an open-source design system by Contentful created
              with the intent to reduce the overhead of creating UI by providing
              tools and guidance for digital teams building and extending
              Contentful products.
            </Text>
          </Card>
        </Flex>
      </Flex>
    </>
  );
};
