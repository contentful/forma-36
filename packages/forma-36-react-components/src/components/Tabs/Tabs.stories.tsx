import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

import Tabs from './Tabs';
import Tab from './Tab';
import TabPanel from './TabPanel';

function DefaultStory() {
  const [selected, setSelected] = useState('first');

  return (
    <div>
      <Tabs extraClassNames={text('extraClassNames', '')}>
        <Tab
          id="first"
          selected={selected === 'first'}
          onSelect={id => {
            action('onSelect')(id);
            setSelected(id);
          }}
        >
          First
        </Tab>
        <Tab
          id="second"
          selected={selected === 'second'}
          onSelect={id => {
            action('onSelect')(id);
            setSelected(id);
          }}
        >
          Second
        </Tab>
        <Tab
          id="third"
          selected={selected === 'third'}
          onSelect={id => {
            action('onSelect')(id);
            setSelected(id);
          }}
        >
          Third
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
    <Tabs role="navigation" extraClassNames={text('extraClassNames', '')}>
      <Tab
        id="first"
        href="https://contentful.com"
        selected={selected === 'first'}
        onSelect={id => {
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
        onSelect={id => {
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
        onSelect={id => {
          action('onSelect')(id);
          setSelected(id);
        }}
      >
        Third
      </Tab>
    </Tabs>
  );
}

storiesOf('Components|Tabs', module)
  .addParameters({
    propTypes: [
      Tab['__docgenInfo'],
      Tabs['__docgenInfo'],
      TabPanel['__docgenInfo'],
    ],
  })
  .add('default', () => <DefaultStory />)
  .add('as navigation', () => <AsNavigationStory />);
