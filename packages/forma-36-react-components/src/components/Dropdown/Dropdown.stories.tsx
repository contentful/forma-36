import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { Flex } from '@contentful/f36-core';
import { SectionHeading } from '@contentful/f36-typography';
import { Dropdown } from './Dropdown';
import { DropdownListItem } from './DropdownListItem/DropdownListItem';
import { Button } from '../Button';
import { TextLink } from '@contentful/f36-text-link';
import { DropdownList } from './DropdownList/DropdownList';

export default {
  argTypes: {
    className: { control: { disable: true } },
    nonClosingRefs: { control: { disable: true } },
  },
  component: Dropdown,
  propTypes: [
    Dropdown['__docgenInfo'],
    DropdownList['__docgenInfo'],
    DropdownListItem['__docgenInfo'],
  ],
  subcomponents: { DropdownList, DropdownListItem },
  title: 'Components/Dropdown',
} as Meta;

export const Default: Story = ({ submenuToggleLabel, ...args }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Dropdown
      {...args}
      isOpen={isOpen}
      onClose={() => setOpen(false)}
      toggleElement={
        <Button
          size="small"
          buttonType="muted"
          indicateDropdown
          onClick={() => setOpen(!isOpen)}
        >
          Choose more options and settings
        </Button>
      }
    >
      <DropdownList>
        <DropdownListItem isTitle>Entry Title</DropdownListItem>
        <DropdownListItem onClick={action('onClick Element')}>
          Embed existing entry
        </DropdownListItem>
        <Dropdown position="left" submenuToggleLabel={submenuToggleLabel}>
          <DropdownList>
            <DropdownListItem onClick={action('submenu click')}>
              Embed as inline element
            </DropdownListItem>
            <DropdownListItem isDisabled>
              Embed as block element
            </DropdownListItem>
          </DropdownList>
        </Dropdown>
      </DropdownList>
      <DropdownList border="top">
        <DropdownListItem>
          <TextLink href="http://google.com">This is a Link</TextLink>
        </DropdownListItem>
      </DropdownList>
    </Dropdown>
  );
};

Default.args = {
  submenuToggleLabel: 'Create and embed existing entry',
};

export const Scrollable: Story = (args) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Dropdown
      {...args}
      isOpen={isOpen}
      onClose={() => setOpen(false)}
      toggleElement={
        <Button
          size="small"
          buttonType="muted"
          indicateDropdown
          onClick={() => setOpen(!isOpen)}
        >
          toggle
        </Button>
      }
    >
      <DropdownList maxHeight={200}>
        {[...new Array(25)].map((entry, index) => (
          // eslint-disable-next-line
          <DropdownListItem key={`key-${index}`} onClick={action('click')}>
            Entry Item {index}
          </DropdownListItem>
        ))}
      </DropdownList>
    </Dropdown>
  );
};

export const DynamicContent: Story = (args) => {
  const messages = ['Loading...', 'This is my other piece of text'];
  const [isOpen, setOpen] = useState(false);
  const [text, setText] = useState(messages[0]);

  const onClose = () => {
    setOpen(false);
    setText(messages[0]);
  };

  const onClick = () => {
    if (isOpen) {
      return onClose();
    }

    setTimeout(() => setText(messages[1]), 500);
    setOpen(true);
  };

  return (
    <Dropdown
      {...args}
      isOpen={isOpen}
      onClose={onClose}
      toggleElement={
        <Button
          size="small"
          buttonType="muted"
          onClick={onClick}
          indicateDropdown
        >
          Choose more options and settings
        </Button>
      }
    >
      <DropdownList>
        <DropdownListItem>{text}</DropdownListItem>
      </DropdownList>
    </Dropdown>
  );
};

export const WithFullWidth: Story = (args) => {
  const [isOpen, setOpen] = useState(true);

  return (
    <Dropdown
      {...args}
      isOpen={isOpen}
      onClose={() => setOpen(false)}
      toggleElement={
        <Button
          size="small"
          buttonType="muted"
          indicateDropdown
          onClick={() => setOpen(!isOpen)}
        >
          Open dropdown
        </Button>
      }
    >
      <DropdownList maxHeight={200}>
        <DropdownListItem onClick={action('click')}>
          This list item is wider than the dropdown
        </DropdownListItem>
        <DropdownListItem onClick={action('click')}>
          Short list item
        </DropdownListItem>
      </DropdownList>
    </Dropdown>
  );
};
WithFullWidth.args = {
  isFullWidth: true,
};

export const Overview: Story = () => (
  <>
    <Flex marginBottom="spacingS">
      <SectionHeading as="h3">Dropdown default</SectionHeading>
    </Flex>

    <Default />

    <Flex flexDirection="column" style={{ marginBottom: '200px' }}>
      <Flex marginBottom="spacingS" marginTop="spacingM">
        <SectionHeading as="h3">Dropdown default open</SectionHeading>
      </Flex>

      <Dropdown
        isOpen
        usePortal
        position="bottom-left"
        toggleElement={
          <Button size="small" buttonType="muted" indicateDropdown>
            Choose more options and settings
          </Button>
        }
      >
        <DropdownList>
          <DropdownListItem isTitle>Entry Title</DropdownListItem>
          <DropdownListItem onClick={action('onClick Element')}>
            Embed existing entry
          </DropdownListItem>
          <Dropdown
            position="right"
            submenuToggleLabel="Create and embed existing entry"
          >
            <DropdownList>
              <DropdownListItem onClick={action('submenu click')}>
                Embed as inline element
              </DropdownListItem>
              <DropdownListItem isDisabled>
                Embed as block element
              </DropdownListItem>
            </DropdownList>
          </Dropdown>
        </DropdownList>
        <DropdownList border="top">
          <DropdownListItem>
            <TextLink href="http://google.com">This is a Link</TextLink>
          </DropdownListItem>
        </DropdownList>
      </Dropdown>
    </Flex>

    <Flex marginBottom="spacingS">
      <SectionHeading as="h3">Dropdown with full width</SectionHeading>
    </Flex>

    <Dropdown
      isOpen
      isFullWidth
      toggleElement={
        <Button size="small" buttonType="muted" indicateDropdown>
          Open dropdown
        </Button>
      }
    >
      <DropdownList>
        <DropdownListItem onClick={action('click')}>
          This list item is wider than the dropdown
        </DropdownListItem>
        <DropdownListItem onClick={action('click')}>
          Short list item
        </DropdownListItem>
      </DropdownList>
    </Dropdown>

    {/* hack to make the open dropdown show up in chromatic */}
    <Flex style={{ paddingBottom: '132px' }} />
  </>
);
