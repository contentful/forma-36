import React from 'react';
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
  return (
    <div>
      <Tabs defaultTab="first" {...args}>
        <Tabs.List>
          <Tabs.Tab
            panelId="first"
            onSelect={(id: string) => {
              action('onSelect')(id);
            }}
          >
            First
          </Tabs.Tab>
          <Tabs.Tab
            panelId="second"
            onSelect={(id: string) => {
              action('onSelect')(id);
            }}
          >
            Second
          </Tabs.Tab>
          <Tabs.Tab
            panelId="third"
            isDisabled
            onSelect={(id: string) => {
              action('onSelect')(id);
            }}
          >
            Third (disabled)
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel id="first">content first tab</Tabs.Panel>
        <Tabs.Panel id="second">content second tab</Tabs.Panel>
        <Tabs.Panel id="third">content third tab</Tabs.Panel>
      </Tabs>
    </div>
  );
};

export const Controlled: Story = (args) => {
  const [currentTab, setCurrentTab] = React.useState('first');
  return (
    <Tabs currentTab={currentTab} {...args}>
      <Tabs.List>
        <Tabs.Tab
          panelId="first"
          onSelect={(id: string) => {
            action('onSelect')(id);
            setCurrentTab(id);
          }}
        >
          First
        </Tabs.Tab>
        <Tabs.Tab
          panelId="second"
          onSelect={(id: string) => {
            action('onSelect')(id);
            setCurrentTab(id);
          }}
        >
          Second
        </Tabs.Tab>
        <Tabs.Tab
          panelId="third"
          onSelect={(id: string) => {
            action('onSelect')(id);
            setCurrentTab(id);
          }}
        >
          Third
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel id="first">content first tab</Tabs.Panel>
      <Tabs.Panel id="second">content second tab</Tabs.Panel>
      <Tabs.Panel id="third">content third tab</Tabs.Panel>
    </Tabs>
  );
};

export const Overview: Story = () => {
  const onSelect = (id: string) => {
    action('onSelect')(id);
  };

  return (
    <>
      <SectionHeading as="h3" marginBottom="spacingM">
        Tabs default
      </SectionHeading>

      <Flex marginBottom="spacingXl" flexDirection="column">
        <Tabs defaultTab="first">
          <Tabs.List>
            <Tabs.Tab panelId="first" onSelect={onSelect}>
              First
            </Tabs.Tab>
            <Tabs.Tab panelId="second" onSelect={onSelect}>
              Second
            </Tabs.Tab>
            <Tabs.Tab panelId="third" onSelect={onSelect}>
              Third
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel id="first">content first tab</Tabs.Panel>
          <Tabs.Panel id="second">content second tab</Tabs.Panel>
          <Tabs.Panel id="third">content third tab</Tabs.Panel>
        </Tabs>
      </Flex>

      <SectionHeading as="h3" marginBottom="spacingM">
        Tabs with horizontal divider
      </SectionHeading>

      <Flex marginBottom="spacingXl" flexDirection="column">
        <Tabs defaultTab="first">
          <Tabs.List variant="horizontal-divider">
            <Tabs.Tab panelId="first" onSelect={onSelect}>
              First
            </Tabs.Tab>
            <Tabs.Tab panelId="second" onSelect={onSelect}>
              Second
            </Tabs.Tab>
            <Tabs.Tab panelId="third" onSelect={onSelect}>
              Third
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel id="first">content first tab</Tabs.Panel>
          <Tabs.Panel id="second">content second tab</Tabs.Panel>
          <Tabs.Panel id="third">content third tab</Tabs.Panel>
        </Tabs>
      </Flex>

      <SectionHeading as="h3" marginBottom="spacingM">
        Tabs with vertical divider
      </SectionHeading>

      <Flex marginBottom="spacingXl" flexDirection="column">
        <Tabs defaultTab="first">
          <Tabs.List variant="vertical-divider">
            <Tabs.Tab panelId="first" onSelect={onSelect}>
              First
            </Tabs.Tab>
            <Tabs.Tab panelId="second" onSelect={onSelect}>
              Second
            </Tabs.Tab>
            <Tabs.Tab panelId="third" onSelect={onSelect}>
              Third
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel id="first">content first tab</Tabs.Panel>
          <Tabs.Panel id="second">content second tab</Tabs.Panel>
          <Tabs.Panel id="third">content third tab</Tabs.Panel>
        </Tabs>
      </Flex>
    </>
  );
};
