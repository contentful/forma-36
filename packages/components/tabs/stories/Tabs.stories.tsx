import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { SectionHeading } from '@contentful/f36-typography';
import { Tabs } from '../src';
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

export const Overview: Story = () => {
  const [selectedDefault, setSelectedDefault] = useState('first');
  const onSelectDefault = (id: string) => {
    action('onSelect')(id);
    setSelectedDefault(id);
  };
  const [selectedHorisontal, setSelectedHorisontal] = useState('first');
  const onSelectHorisontal = (id: string) => {
    action('onSelect')(id);
    setSelectedHorisontal(id);
  };
  const [selectedVertical, setSelectedVertical] = useState('first');
  const onSelectVertical = (id: string) => {
    action('onSelect')(id);
    setSelectedVertical(id);
  };

  return (
    <>
      <SectionHeading as="h3" marginBottom="spacingS">
        Tabs default
      </SectionHeading>

      <Flex marginBottom="spacingS" flexDirection="column">
        <Tabs>
          <Tab
            id="first"
            onSelect={onSelectDefault}
            isSelected={selectedDefault === 'first'}
          >
            First
          </Tab>
          <Tab
            id="second"
            onSelect={onSelectDefault}
            isSelected={selectedDefault === 'second'}
          >
            Second
          </Tab>
          <Tab
            id="third"
            onSelect={onSelectDefault}
            isSelected={selectedDefault === 'third'}
          >
            Third
          </Tab>
        </Tabs>
        {selectedDefault === 'first' && (
          <TabPanel id="first">content first tab</TabPanel>
        )}
        {selectedDefault === 'second' && (
          <TabPanel id="second">content second tab</TabPanel>
        )}
        {selectedDefault === 'third' && (
          <TabPanel id="third">content third tab</TabPanel>
        )}
      </Flex>

      <SectionHeading as="h3" marginBottom="spacingS">
        Tabs with horizontal divider
      </SectionHeading>

      <Flex marginBottom="spacingS" flexDirection="column">
        <Tabs variant="horizontal-divider">
          <Tab
            id="first"
            onSelect={onSelectHorisontal}
            isSelected={selectedHorisontal === 'first'}
          >
            First
          </Tab>
          <Tab
            id="second"
            onSelect={onSelectHorisontal}
            isSelected={selectedHorisontal === 'second'}
          >
            Second
          </Tab>
          <Tab
            id="third"
            onSelect={onSelectHorisontal}
            isSelected={selectedHorisontal === 'third'}
          >
            Third
          </Tab>
        </Tabs>
        {selectedHorisontal === 'first' && (
          <TabPanel id="first">content first tab</TabPanel>
        )}
        {selectedHorisontal === 'second' && (
          <TabPanel id="second">content second tab</TabPanel>
        )}
        {selectedHorisontal === 'third' && (
          <TabPanel id="third">content third tab</TabPanel>
        )}
      </Flex>

      <SectionHeading as="h3" marginBottom="spacingS">
        Tabs with vertical divider
      </SectionHeading>

      <Flex marginBottom="spacingS" flexDirection="column">
        <Tabs variant="vertical-divider">
          <Tab
            id="first"
            onSelect={onSelectVertical}
            isSelected={selectedVertical === 'first'}
          >
            First
          </Tab>
          <Tab
            id="second"
            onSelect={onSelectVertical}
            isSelected={selectedVertical === 'second'}
          >
            Second
          </Tab>
          <Tab
            id="third"
            onSelect={onSelectVertical}
            isSelected={selectedVertical === 'third'}
          >
            Third
          </Tab>
        </Tabs>
        {selectedVertical === 'first' && (
          <TabPanel id="first">content first tab</TabPanel>
        )}
        {selectedVertical === 'second' && (
          <TabPanel id="second">content second tab</TabPanel>
        )}
        {selectedVertical === 'third' && (
          <TabPanel id="third">content third tab</TabPanel>
        )}
      </Flex>
    </>
  );
};
