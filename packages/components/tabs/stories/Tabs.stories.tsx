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
          <Tabs.Tab
            id="first"
            onSelect={onSelectDefault}
            isSelected={selectedDefault === 'first'}
          >
            First
          </Tabs.Tab>
          <Tabs.Tab
            id="second"
            onSelect={onSelectDefault}
            isSelected={selectedDefault === 'second'}
          >
            Second
          </Tabs.Tab>
          <Tabs.Tab
            id="third"
            onSelect={onSelectDefault}
            isSelected={selectedDefault === 'third'}
          >
            Third
          </Tabs.Tab>
        </Tabs>
        {selectedDefault === 'first' && (
          <Tabs.Panel id="first">content first tab</Tabs.Panel>
        )}
        {selectedDefault === 'second' && (
          <Tabs.Panel id="second">content second tab</Tabs.Panel>
        )}
        {selectedDefault === 'third' && (
          <Tabs.Panel id="third">content third tab</Tabs.Panel>
        )}
      </Flex>

      <SectionHeading as="h3" marginBottom="spacingS">
        Tabs with horizontal divider
      </SectionHeading>

      <Flex marginBottom="spacingS" flexDirection="column">
        <Tabs variant="horizontal-divider">
          <Tabs.Tab
            id="first"
            onSelect={onSelectHorisontal}
            isSelected={selectedHorisontal === 'first'}
          >
            First
          </Tabs.Tab>
          <Tabs.Tab
            id="second"
            onSelect={onSelectHorisontal}
            isSelected={selectedHorisontal === 'second'}
          >
            Second
          </Tabs.Tab>
          <Tabs.Tab
            id="third"
            onSelect={onSelectHorisontal}
            isSelected={selectedHorisontal === 'third'}
          >
            Third
          </Tabs.Tab>
        </Tabs>
        {selectedHorisontal === 'first' && (
          <Tabs.Panel id="first">content first tab</Tabs.Panel>
        )}
        {selectedHorisontal === 'second' && (
          <Tabs.Panel id="second">content second tab</Tabs.Panel>
        )}
        {selectedHorisontal === 'third' && (
          <Tabs.Panel id="third">content third tab</Tabs.Panel>
        )}
      </Flex>

      <SectionHeading as="h3" marginBottom="spacingS">
        Tabs with vertical divider
      </SectionHeading>

      <Flex marginBottom="spacingS" flexDirection="column">
        <Tabs variant="vertical-divider">
          <Tabs.Tab
            id="first"
            onSelect={onSelectVertical}
            isSelected={selectedVertical === 'first'}
          >
            First
          </Tabs.Tab>
          <Tabs.Tab
            id="second"
            onSelect={onSelectVertical}
            isSelected={selectedVertical === 'second'}
          >
            Second
          </Tabs.Tab>
          <Tabs.Tab
            id="third"
            onSelect={onSelectVertical}
            isSelected={selectedVertical === 'third'}
          >
            Third
          </Tabs.Tab>
        </Tabs>
        {selectedVertical === 'first' && (
          <Tabs.Panel id="first">content first tab</Tabs.Panel>
        )}
        {selectedVertical === 'second' && (
          <Tabs.Panel id="second">content second tab</Tabs.Panel>
        )}
        {selectedVertical === 'third' && (
          <Tabs.Panel id="third">content third tab</Tabs.Panel>
        )}
      </Flex>
    </>
  );
};
