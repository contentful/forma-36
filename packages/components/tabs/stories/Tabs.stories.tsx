import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { SectionHeading } from '@contentful/f36-typography';
import { Tabs } from '../src/Tabs';
import { Tab } from '../src/Tab';
import { TabPanel } from '../src/TabPanel';
import { Flex } from '@contentful/f36-core';

export default {
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
  component: Tabs,
  parameters: {
    propTypes: [
      Tab['__docgenInfo'],
      Tabs['__docgenInfo'],
      TabPanel['__docgenInfo'],
    ],
  },
  title: 'Components/Tabs',
} as Meta;

export const Basic: Story = (args) => {
  const [selected, setSelected] = useState('first');

  return (
    <div>
      <Tabs {...args}>
        <Tab
          id="first"
          selected={selected === 'first'}
          onSelect={(id: string) => {
            action('onSelect')(id);
            setSelected(id);
          }}
        >
          First
        </Tab>
        <Tab
          id="second"
          selected={selected === 'second'}
          onSelect={(id: string) => {
            action('onSelect')(id);
            setSelected(id);
          }}
        >
          Second
        </Tab>
        <Tab
          id="third"
          disabled
          selected={selected === 'third'}
          onSelect={(id: string) => {
            action('onSelect')(id);
            setSelected(id);
          }}
        >
          Third (disabled)
        </Tab>
      </Tabs>
      {selected === 'first' && (
        <TabPanel id="first">content first tab</TabPanel>
      )}
      {selected === 'second' && (
        <TabPanel id="second">content second tab</TabPanel>
      )}
      {selected === 'third' && (
        <TabPanel id="third">content third tab</TabPanel>
      )}
    </div>
  );
};

export const Overview: Story = () => (
  <>
    <Flex marginBottom="spacingS">
      <SectionHeading as="h3">Tabs default</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <Tabs role="navigation">
        <Tab id="first" href="https://contentful.com" selected>
          First
        </Tab>
        <Tab id="second" href="https://contentful.com">
          Second
        </Tab>
        <Tab id="third" href="https://contentful.com">
          Third
        </Tab>
      </Tabs>
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading as="h3">Tabs with horizontal divider</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <Tabs role="navigation" variant="horizontal">
        <Tab id="first" href="https://contentful.com" selected>
          First
        </Tab>
        <Tab id="second" href="https://contentful.com">
          Second
        </Tab>
        <Tab id="third" href="https://contentful.com">
          Third
        </Tab>
      </Tabs>
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading as="h3">Tabs with vertical divider</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <Tabs role="navigation" variant="vertical">
        <Tab id="first" href="https://contentful.com" selected>
          First
        </Tab>
        <Tab id="second" href="https://contentful.com">
          Second
        </Tab>
        <Tab id="third" href="https://contentful.com">
          Third
        </Tab>
      </Tabs>
    </Flex>
  </>
);
