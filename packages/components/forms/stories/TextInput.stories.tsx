import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from '../src';
import { SectionHeading } from '@contentful/f36-typography';
import { Flex } from '@contentful/f36-core';
import { LockIcon, SearchIcon } from '@contentful/f36-icons';
import { IconButton } from '@contentful/f36-button';
import { DensityProvider } from '@contentful/f36-utils';

export default {
  title: 'Form Elements/TextInput',
  component: TextInput,
  args: {
    onBlur: undefined,
    onChange: undefined,
    onFocus: undefined,
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    style: { control: { disable: true } },
  },
} as Meta<typeof TextInput>;

type Story = StoryObj<typeof TextInput>;

export const Basic: Story = {
  args: {
    placeholder: 'this is my placeholder',
    name: 'Example name',
    id: 'input-1',
    size: 'medium',
  },
};

export const Overview: Story = {
  render: () => {
    const [isFirstLocked, setFirstLocked] = useState(true);
    const [isSecondLocked, setSecondLocked] = useState(true);

    return (
      <Flex flexDirection="column">
        <SectionHeading as="h3" marginBottom="spacingS">
          Text Input default
        </SectionHeading>

        <Flex marginBottom="spacingL">
          <TextInput
            aria-label="Example label for input"
            name="Input name 1"
            id="input-1"
            placeholder="My great input"
            defaultValue="defaultValue"
          />
        </Flex>

        <SectionHeading as="h3" marginBottom="spacingS">
          Text Input default small
        </SectionHeading>

        <Flex marginBottom="spacingL">
          <TextInput
            aria-label="Example label for input"
            name="Input name 2"
            id="input-2"
            placeholder="My great input"
            defaultValue="defaultValue"
            size="small"
          />
        </Flex>

        <SectionHeading as="h3" marginBottom="spacingS">
          Text Input disabled
        </SectionHeading>

        <Flex marginBottom="spacingL">
          <TextInput
            aria-label="Example label for input"
            name="Example name 3"
            id="input-3"
            placeholder="My great input"
            isDisabled
          />
        </Flex>

        <SectionHeading as="h3" marginBottom="spacingS">
          Text Input disabled small
        </SectionHeading>

        <Flex marginBottom="spacingL">
          <TextInput
            aria-label="Example label for input"
            name="Example name 4"
            id="input-4"
            placeholder="My great input"
            isDisabled
            size="small"
          />
        </Flex>

        <SectionHeading as="h3" marginBottom="spacingS">
          Text Input invalid
        </SectionHeading>

        <Flex marginBottom="spacingL">
          <TextInput
            aria-label="Example label for input"
            name="Example name 5"
            id="input-5"
            placeholder="My great input"
            isInvalid
          />
        </Flex>

        <SectionHeading as="h3" marginBottom="spacingS">
          Text Input invalid small
        </SectionHeading>

        <Flex marginBottom="spacingL">
          <TextInput
            aria-label="Example label for input"
            name="Example name 6"
            id="input-6"
            placeholder="My great input"
            isInvalid
            size="small"
          />
        </Flex>

        <SectionHeading as="h3" marginBottom="spacingS">
          Text Input with icon as a placeholder
        </SectionHeading>

        <Flex marginBottom="spacingL">
          <TextInput
            aria-label="Example label for input"
            name="Example name 7"
            value="Example value"
            id="input-7"
            placeholder="My great input"
            icon={<SearchIcon />}
          />
        </Flex>

        <SectionHeading as="h3" marginBottom="spacingS">
          Text Input with icon as a placeholder small
        </SectionHeading>

        <Flex marginBottom="spacingL">
          <TextInput
            aria-label="Example label for input"
            name="Example name 8"
            value="Example value"
            id="input-8"
            placeholder="My great input"
            icon={<SearchIcon />}
            size="small"
          />
        </Flex>

        <SectionHeading as="h3" marginBottom="spacingS">
          Text Input Group with action button
        </SectionHeading>

        <Flex marginBottom="spacingL">
          <TextInput.Group>
            <TextInput
              aria-label="Content type name"
              id="content-type-name"
              value="Example value"
              isDisabled={isFirstLocked}
            />
            <IconButton
              aria-label="Unlock"
              variant="secondary"
              icon={<LockIcon />}
              onClick={() => {
                setFirstLocked((value) => !value);
              }}
            />
          </TextInput.Group>
        </Flex>

        <SectionHeading as="h3" marginBottom="spacingS">
          Text Input Group with action button small
        </SectionHeading>

        <Flex marginBottom="spacingL">
          <TextInput.Group>
            <TextInput
              size="small"
              aria-label="Content type name"
              id="content-type-name"
              value="Example value"
              isDisabled={isSecondLocked}
            />
            <IconButton
              size="small"
              aria-label="Unlock"
              variant="secondary"
              icon={<LockIcon />}
              onClick={() => {
                setSecondLocked((value) => !value);
              }}
            />
          </TextInput.Group>
        </Flex>

        <SectionHeading as="h3" marginBottom="spacingS">
          Number input
        </SectionHeading>

        <Flex marginBottom="spacingL">
          <TextInput
            name="Example name 12"
            id="input-12"
            type="number"
            placeholder="Number input"
            size="small"
          />
        </Flex>
      </Flex>
    );
  },
};

export const WithHighDensity: Story = {
  render: () => {
    const [isFirstLocked, setFirstLocked] = useState(true);
    const [isSecondLocked, setSecondLocked] = useState(true);

    return (
      <DensityProvider value="high">
        <Flex flexDirection="column">
          <SectionHeading as="h3" marginBottom="spacingS">
            Text Input default
          </SectionHeading>

          <Flex marginBottom="spacingL">
            <TextInput
              aria-label="Example label for input"
              name="Input name 1"
              id="input-1"
              placeholder="My great input"
              defaultValue="defaultValue"
            />
          </Flex>

          <SectionHeading as="h3" marginBottom="spacingS">
            Text Input default small
          </SectionHeading>

          <Flex marginBottom="spacingL">
            <TextInput
              aria-label="Example label for input"
              name="Input name 2"
              id="input-2"
              placeholder="My great input"
              defaultValue="defaultValue"
              size="small"
            />
          </Flex>

          <SectionHeading as="h3" marginBottom="spacingS">
            Text Input disabled
          </SectionHeading>

          <Flex marginBottom="spacingL">
            <TextInput
              aria-label="Example label for input"
              name="Example name 3"
              id="input-3"
              placeholder="My great input"
              isDisabled
            />
          </Flex>

          <SectionHeading as="h3" marginBottom="spacingS">
            Text Input disabled small
          </SectionHeading>

          <Flex marginBottom="spacingL">
            <TextInput
              aria-label="Example label for input"
              name="Example name 4"
              id="input-4"
              placeholder="My great input"
              isDisabled
              size="small"
            />
          </Flex>

          <SectionHeading as="h3" marginBottom="spacingS">
            Text Input invalid
          </SectionHeading>

          <Flex marginBottom="spacingL">
            <TextInput
              aria-label="Example label for input"
              name="Example name 5"
              id="input-5"
              placeholder="My great input"
              isInvalid
            />
          </Flex>

          <SectionHeading as="h3" marginBottom="spacingS">
            Text Input invalid small
          </SectionHeading>

          <Flex marginBottom="spacingL">
            <TextInput
              aria-label="Example label for input"
              name="Example name 6"
              id="input-6"
              placeholder="My great input"
              isInvalid
              size="small"
            />
          </Flex>

          <SectionHeading as="h3" marginBottom="spacingS">
            Text Input with icon as a placeholder
          </SectionHeading>

          <Flex marginBottom="spacingL">
            <TextInput
              aria-label="Example label for input"
              name="Example name 7"
              value="Example value"
              id="input-7"
              placeholder="My great input"
              icon={<SearchIcon />}
            />
          </Flex>

          <SectionHeading as="h3" marginBottom="spacingS">
            Text Input with icon as a placeholder small
          </SectionHeading>

          <Flex marginBottom="spacingL">
            <TextInput
              aria-label="Example label for input"
              name="Example name 8"
              value="Example value"
              id="input-8"
              placeholder="My great input"
              icon={<SearchIcon />}
              size="small"
            />
          </Flex>

          <SectionHeading as="h3" marginBottom="spacingS">
            Text Input Group with action button
          </SectionHeading>

          <Flex marginBottom="spacingL">
            <TextInput.Group>
              <TextInput
                aria-label="Content type name"
                id="content-type-name"
                value="Example value"
                isDisabled={isFirstLocked}
              />
              <IconButton
                aria-label="Unlock"
                variant="secondary"
                icon={<LockIcon size="tiny" />}
                onClick={() => {
                  setFirstLocked((value) => !value);
                }}
              />
            </TextInput.Group>
          </Flex>

          <SectionHeading as="h3" marginBottom="spacingS">
            Text Input Group with action button small
          </SectionHeading>

          <Flex marginBottom="spacingL">
            <TextInput.Group>
              <TextInput
                size="small"
                aria-label="Content type name"
                id="content-type-name"
                value="Example value"
                isDisabled={isSecondLocked}
              />
              <IconButton
                size="small"
                aria-label="Unlock"
                variant="secondary"
                icon={<LockIcon size="tiny" />}
                onClick={() => {
                  setSecondLocked((value) => !value);
                }}
              />
            </TextInput.Group>
          </Flex>

          <SectionHeading as="h3" marginBottom="spacingS">
            Number input
          </SectionHeading>

          <Flex marginBottom="spacingL">
            <TextInput
              name="Example name 12"
              id="input-12"
              type="number"
              placeholder="Number input"
              size="small"
            />
          </Flex>
        </Flex>
      </DensityProvider>
    );
  },
};
