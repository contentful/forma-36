import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { SectionHeading } from '@contentful/f36-typography';
import { Tabs } from '../src';
import { Flex } from '@contentful/f36-core';

export default {
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
  component: Tabs,
  parameters: {
    propTypes: [
      Tabs.Tab['__docgenInfo'],
      Tabs['__docgenInfo'],
      Tabs.Panel['__docgenInfo'],
    ],
  },
  title: 'Components/Tabs',
} as Meta;

export const Basic: Story = (args) => {
  const [selected, setSelected] = useState('first');

  return (
    <div>
      <Tabs {...args}>
        <Tabs.Tab
          id="first"
          isSelected={selected === 'first'}
          onSelect={(id: string) => {
            action('onSelect')(id);
            setSelected(id);
          }}
        >
          First
        </Tabs.Tab>
        <Tabs.Tab
          id="second"
          isSelected={selected === 'second'}
          onSelect={(id: string) => {
            action('onSelect')(id);
            setSelected(id);
          }}
        >
          Second
        </Tabs.Tab>
        <Tabs.Tab
          id="third"
          isDisabled
          isSelected={selected === 'third'}
          onSelect={(id: string) => {
            action('onSelect')(id);
            setSelected(id);
          }}
        >
          Third (disabled)
        </Tabs.Tab>
      </Tabs>
      {selected === 'first' && (
        <Tabs.Panel id="first">content first tab</Tabs.Panel>
      )}
      {selected === 'second' && (
        <Tabs.Panel id="second">content second tab</Tabs.Panel>
      )}
      {selected === 'third' && (
        <Tabs.Panel id="third">content third tab</Tabs.Panel>
      )}
    </div>
  );
};

export const Overview: Story = () => (
  <>
    <SectionHeading as="h3" marginBottom="spacingS">
      Tabs default
    </SectionHeading>

    <Flex marginBottom="spacingS">
      <Tabs role="navigation">
        <Tabs.Tab id="first" href="https://contentful.com" isSelected>
          First
        </Tabs.Tab>
        <Tabs.Tab id="second" href="https://contentful.com">
          Second
        </Tabs.Tab>
        <Tabs.Tab id="third" href="https://contentful.com">
          Third
        </Tabs.Tab>
      </Tabs>
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Tabs with horizontal divider
    </SectionHeading>

    <Flex marginBottom="spacingS">
      <Tabs role="navigation" variant="horizontal-divider">
        <Tabs.Tab id="first" href="https://contentful.com" isSelected>
          First
        </Tabs.Tab>
        <Tabs.Tab id="second" href="https://contentful.com">
          Second
        </Tabs.Tab>
        <Tabs.Tab id="third" href="https://contentful.com">
          Third
        </Tabs.Tab>
      </Tabs>
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Tabs with vertical divider
    </SectionHeading>

    <Flex marginBottom="spacingS">
      <Tabs role="navigation" variant="vertical-divider">
        <Tabs.Tab id="first" href="https://contentful.com" isSelected>
          First
        </Tabs.Tab>
        <Tabs.Tab id="second" href="https://contentful.com">
          Second
        </Tabs.Tab>
        <Tabs.Tab id="third" href="https://contentful.com">
          Third
        </Tabs.Tab>
      </Tabs>
    </Flex>
  </>
);
