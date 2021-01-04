import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';

import Tabs from './Tabs';
import Tab from './Tab';
import TabPanel from './TabPanel';
import SectionHeading from '../Typography/SectionHeading';
import Flex from '../Flex/Flex';

function DefaultStory() {
  const [selected, setSelected] = useState('first');

  return (
    <div>
      <Tabs
        className={text('className', '')}
        withDivider={boolean('withDivider', false)}
      >
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
}

function AsNavigationStory() {
  const [selected, setSelected] = useState('first');
  return (
    <Tabs
      role="navigation"
      className={text('className', '')}
      withDivider={boolean('withDivider', false)}
    >
      <Tab
        id="first"
        href="https://contentful.com"
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
        href="https://contentful.com"
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
        href="https://contentful.com"
        selected={selected === 'third'}
        onSelect={(id: string) => {
          action('onSelect')(id);
          setSelected(id);
        }}
      >
        Third
      </Tab>
    </Tabs>
  );
}

storiesOf('Components/Tabs', module)
  .addParameters({
    propTypes: [
      Tab['__docgenInfo'],
      Tabs['__docgenInfo'],
      TabPanel['__docgenInfo'],
    ],
    component: Tab,
    subcomponents: { Tabs, TabPanel },
  })
  .add('default', () => <DefaultStory />)
  .add('as navigation', () => <AsNavigationStory />)
  .add('overview', () => (
    <>
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Tabs default</SectionHeading>
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
        <SectionHeading element="h3">Tabs with divider</SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <Tabs role="navigation" withDivider>
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
  ));
