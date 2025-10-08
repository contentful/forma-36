import React from 'react';
import { IconButton, Button } from '@contentful/f36-button';
import { LockSimpleIcon } from '@contentful/f36-icons';
import { SectionHeading } from '@contentful/f36-typography';
import { Tooltip } from '@contentful/f36-tooltip';
import { Flex } from '@contentful/f36-core';
import { TextInput, InputGroupProps } from '../src';
import { CopyButton } from '@contentful/f36-copybutton';
import { DensityProvider } from '@contentful/f36-utils';

export default {
  title: 'Form Elements/InputGroup',
  component: TextInput.Group,
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

export const Basic = {
  render: (args: InputGroupProps) => {
    return (
      <TextInput.Group {...args}>
        <TextInput
          aria-label="Text Input"
          id="TextInput1"
          defaultValue="Some value"
        />
        <IconButton
          variant="secondary"
          icon={<LockSimpleIcon />}
          aria-label="Lock"
        />
      </TextInput.Group>
    );
  },

  args: {
    spacing: 'none',
  },
};

export const Overview = () => {
  return (
    <Flex flexDirection="column" fullWidth>
      <SectionHeading as="h3" marginBottom="spacingS">
        Input group spaced
      </SectionHeading>
      <Flex marginBottom="spacingM" fullWidth>
        <TextInput.Group spacing="spacingS">
          <Button variant="primary">Button</Button>
          <TextInput
            aria-label="Text Input"
            id="TextInput1"
            defaultValue="Some value"
          />
          <IconButton
            variant="secondary"
            icon={<LockSimpleIcon />}
            aria-label="Lock"
          />
        </TextInput.Group>
      </Flex>
      <Flex marginBottom="spacingM" fullWidth>
        <TextInput.Group spacing="spacingS">
          <Button variant="primary">Button</Button>
          <TextInput
            aria-label="Text Input"
            id="TextInput2"
            defaultValue="Some value"
          />
        </TextInput.Group>
      </Flex>
      <Flex marginBottom="spacingL" fullWidth>
        <TextInput.Group spacing="spacingS">
          <TextInput
            aria-label="Text Input"
            id="TextInput3"
            defaultValue="Some value"
          />
          <IconButton
            variant="secondary"
            icon={<LockSimpleIcon />}
            aria-label="Lock"
          />
        </TextInput.Group>
      </Flex>
      <SectionHeading as="h3" marginBottom="spacingS">
        Input group collapsed
      </SectionHeading>
      <Flex marginBottom="spacingM" fullWidth>
        <TextInput.Group>
          <Button variant="primary">Button</Button>
          <TextInput
            aria-label="Text Input"
            id="TextInput4"
            defaultValue="Some value"
          />
          <IconButton
            variant="secondary"
            icon={<LockSimpleIcon />}
            aria-label="Lock"
          />
        </TextInput.Group>
      </Flex>
      <Flex marginBottom="spacingM" fullWidth>
        <TextInput.Group>
          <Button variant="primary">Button</Button>
          <TextInput
            aria-label="Text Input"
            id="TextInput5"
            defaultValue="Some value"
          />
        </TextInput.Group>
      </Flex>
      <Flex marginBottom="spacingL" fullWidth>
        <TextInput.Group>
          <TextInput
            aria-label="Text Input"
            id="TextInput6"
            defaultValue="Some value"
          />
          <IconButton
            variant="secondary"
            icon={<LockSimpleIcon />}
            aria-label="Lock"
          />
        </TextInput.Group>
      </Flex>
      <SectionHeading as="h3" marginBottom="spacingS">
        Input group disabled
      </SectionHeading>
      <Flex marginBottom="spacingM" fullWidth>
        <TextInput.Group>
          <Button isDisabled variant="primary">
            Button
          </Button>
          <TextInput
            isDisabled
            aria-label="Text Input"
            id="TextInput4"
            defaultValue="Some value"
          />
          <IconButton
            isDisabled
            variant="secondary"
            icon={<LockSimpleIcon />}
            aria-label="Lock"
          />
        </TextInput.Group>
      </Flex>
      <SectionHeading as="h3" marginBottom="spacingS">
        Input group invalid
      </SectionHeading>
      <Flex marginBottom="spacingM" fullWidth>
        <TextInput.Group>
          <Button variant="primary">Button</Button>
          <TextInput
            isInvalid
            aria-label="Text Input"
            id="TextInput4"
            defaultValue="Some value"
          />
          <IconButton
            variant="secondary"
            icon={<LockSimpleIcon />}
            aria-label="Lock"
          />
        </TextInput.Group>
      </Flex>
      <SectionHeading as="h3" marginBottom="spacingS">
        With button wrapped in tooltip
      </SectionHeading>
      <Flex marginBottom="spacingL" fullWidth>
        <TextInput.Group>
          <TextInput
            aria-label="Text Input"
            id="TextInput4"
            defaultValue="Some value"
          />
          <Tooltip content="Tooltip text">
            <IconButton
              variant="secondary"
              icon={<LockSimpleIcon />}
              aria-label="Lock"
            />
          </Tooltip>
        </TextInput.Group>
      </Flex>
      <SectionHeading as="h3" marginBottom="spacingS">
        With copy button
      </SectionHeading>
      <Flex marginBottom="spacingM" fullWidth>
        <TextInput.Group>
          <TextInput value="Some value" />
          <CopyButton value="Some value" />
        </TextInput.Group>
      </Flex>
      <Flex marginBottom="spacingM" fullWidth>
        <TextInput.Group>
          <TextInput isInvalid value="Some value" />
          <CopyButton value="Some value" />
        </TextInput.Group>
      </Flex>
      <Flex marginBottom="spacingM" fullWidth>
        <TextInput.Group>
          <TextInput isDisabled value="Some value" />
          <CopyButton value="Some value" />
        </TextInput.Group>
      </Flex>
      <Flex marginBottom="spacingM" fullWidth>
        <TextInput.Group>
          <TextInput isDisabled isInvalid value="Some value" />
          <CopyButton value="Some value" />
        </TextInput.Group>
      </Flex>
    </Flex>
  );
};

export const WithHighDensity = () => {
  return (
    <DensityProvider value="high">
      <Flex flexDirection="column" fullWidth>
        <SectionHeading as="h3" marginBottom="spacingS">
          Input group spaced
        </SectionHeading>
        <Flex marginBottom="spacingM" fullWidth>
          <TextInput.Group spacing="spacingS">
            <Button variant="primary">Button</Button>
            <TextInput
              aria-label="Text Input"
              id="TextInput1"
              defaultValue="Some value"
            />
            <IconButton
              variant="secondary"
              icon={<LockSimpleIcon />}
              aria-label="Lock"
            />
          </TextInput.Group>
        </Flex>
        <Flex marginBottom="spacingM" fullWidth>
          <TextInput.Group spacing="spacingS">
            <Button variant="primary">Button</Button>
            <TextInput
              aria-label="Text Input"
              id="TextInput2"
              defaultValue="Some value"
            />
          </TextInput.Group>
        </Flex>
        <Flex marginBottom="spacingL" fullWidth>
          <TextInput.Group spacing="spacingS">
            <TextInput
              aria-label="Text Input"
              id="TextInput3"
              defaultValue="Some value"
            />
            <IconButton
              variant="secondary"
              icon={<LockSimpleIcon />}
              aria-label="Lock"
            />
          </TextInput.Group>
        </Flex>
        <SectionHeading as="h3" marginBottom="spacingS">
          Input group collapsed
        </SectionHeading>
        <Flex marginBottom="spacingM" fullWidth>
          <TextInput.Group>
            <Button variant="primary">Button</Button>
            <TextInput
              aria-label="Text Input"
              id="TextInput4"
              defaultValue="Some value"
            />
            <IconButton
              variant="secondary"
              icon={<LockSimpleIcon />}
              aria-label="Lock"
            />
          </TextInput.Group>
        </Flex>
        <Flex marginBottom="spacingM" fullWidth>
          <TextInput.Group>
            <Button variant="primary">Button</Button>
            <TextInput
              aria-label="Text Input"
              id="TextInput5"
              defaultValue="Some value"
            />
          </TextInput.Group>
        </Flex>
        <Flex marginBottom="spacingL" fullWidth>
          <TextInput.Group>
            <TextInput
              aria-label="Text Input"
              id="TextInput6"
              defaultValue="Some value"
            />
            <IconButton
              variant="secondary"
              icon={<LockSimpleIcon />}
              aria-label="Lock"
            />
          </TextInput.Group>
        </Flex>
        <SectionHeading as="h3" marginBottom="spacingS">
          Input group disabled
        </SectionHeading>
        <Flex marginBottom="spacingM" fullWidth>
          <TextInput.Group>
            <Button isDisabled variant="primary">
              Button
            </Button>
            <TextInput
              isDisabled
              aria-label="Text Input"
              id="TextInput4"
              defaultValue="Some value"
            />
            <IconButton
              isDisabled
              variant="secondary"
              icon={<LockSimpleIcon />}
              aria-label="Lock"
            />
          </TextInput.Group>
        </Flex>
        <SectionHeading as="h3" marginBottom="spacingS">
          Input group invalid
        </SectionHeading>
        <Flex marginBottom="spacingM" fullWidth>
          <TextInput.Group>
            <Button variant="primary">Button</Button>
            <TextInput
              isInvalid
              aria-label="Text Input"
              id="TextInput4"
              defaultValue="Some value"
            />
            <IconButton
              variant="secondary"
              icon={<LockSimpleIcon />}
              aria-label="Lock"
            />
          </TextInput.Group>
        </Flex>
        <SectionHeading as="h3" marginBottom="spacingS">
          With button wrapped in tooltip
        </SectionHeading>
        <Flex marginBottom="spacingL" fullWidth>
          <TextInput.Group>
            <TextInput
              aria-label="Text Input"
              id="TextInput4"
              defaultValue="Some value"
            />

            <IconButton
              variant="secondary"
              icon={<LockSimpleIcon />}
              aria-label="Lock"
            />
          </TextInput.Group>
        </Flex>
        <SectionHeading as="h3" marginBottom="spacingS">
          With copy button
        </SectionHeading>
        <Flex marginBottom="spacingM" fullWidth>
          <TextInput.Group>
            <TextInput value="Some value" />
            <CopyButton value="Some value" />
          </TextInput.Group>
        </Flex>
        <Flex marginBottom="spacingM" fullWidth>
          <TextInput.Group>
            <TextInput isInvalid value="Some value" />
            <CopyButton value="Some value" />
          </TextInput.Group>
        </Flex>
        <Flex marginBottom="spacingM" fullWidth>
          <TextInput.Group>
            <TextInput isDisabled value="Some value" />
            <CopyButton value="Some value" />
          </TextInput.Group>
        </Flex>
        <Flex marginBottom="spacingM" fullWidth>
          <TextInput.Group>
            <TextInput isDisabled isInvalid value="Some value" />
            <CopyButton value="Some value" />
          </TextInput.Group>
        </Flex>
      </Flex>
    </DensityProvider>
  );
};
