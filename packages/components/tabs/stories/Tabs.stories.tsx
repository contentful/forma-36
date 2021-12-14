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
      <Tabs
        {...args}
        defaultTab="first"
        onTabChange={(id: string) => {
          action('onSelect')(id);
        }}
      >
        <Tabs.List>
          <Tabs.Tab panelId="first">First</Tabs.Tab>
          <Tabs.Tab panelId="second">Second</Tabs.Tab>
          <Tabs.Tab panelId="third" isDisabled>
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
    <Tabs {...args} currentTab={currentTab} onTabChange={setCurrentTab}>
      <Tabs.List>
        <Tabs.Tab panelId="first">First</Tabs.Tab>
        <Tabs.Tab panelId="second">Second</Tabs.Tab>
        <Tabs.Tab panelId="third" isDisabled>
          Third (disabled)
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
        <Tabs defaultTab="first" onTabChange={onSelect}>
          <Tabs.List>
            <Tabs.Tab panelId="first">First</Tabs.Tab>
            <Tabs.Tab panelId="second">Second</Tabs.Tab>
            <Tabs.Tab panelId="third">Third</Tabs.Tab>
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
        <Tabs defaultTab="first" onTabChange={onSelect}>
          <Tabs.List variant="horizontal-divider">
            <Tabs.Tab panelId="first">First</Tabs.Tab>
            <Tabs.Tab panelId="second">Second</Tabs.Tab>
            <Tabs.Tab panelId="third">Third</Tabs.Tab>
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
        <Tabs defaultTab="first" onTabChange={onSelect}>
          <Tabs.List variant="vertical-divider">
            <Tabs.Tab panelId="first">First</Tabs.Tab>
            <Tabs.Tab panelId="second">Second</Tabs.Tab>
            <Tabs.Tab panelId="third">Third</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel id="first">content first tab</Tabs.Panel>
          <Tabs.Panel id="second">content second tab</Tabs.Panel>
          <Tabs.Panel id="third">content third tab</Tabs.Panel>
        </Tabs>
      </Flex>
    </>
  );
};
