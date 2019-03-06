import React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';
import { StateDecorator, Store } from '@sambego/storybook-state';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

import Tabs from './Tabs';
import Tab from './Tab';
import TabPanel from './TabPanel';

const store = new Store({
  selected: 'first',
});

storiesOf('Components|Tabs', module)
  .addDecorator(StateDecorator(store) as StoryDecorator)
  .add('default', () => (
    <div>
      <Tabs extraClassNames={text('extraClassNames', '')}>
        <Tab
          id="first"
          selected={store.state.selected === 'first'}
          onSelect={id => {
            action('onSelect')(id);
            store.set({ selected: id });
          }}
        >
          First
        </Tab>
        <Tab
          id="second"
          selected={store.state.selected === 'second'}
          onSelect={id => {
            action('onSelect')(id);
            store.set({ selected: id });
          }}
        >
          Second
        </Tab>
        <Tab
          id="third"
          selected={store.state.selected === 'third'}
          onSelect={id => {
            action('onSelect')(id);
            store.set({ selected: id });
          }}
        >
          Third
        </Tab>
      </Tabs>
      {store.state.selected === 'first' && (
        <TabPanel id="first">content first tab</TabPanel>
      )}
      {store.state.selected === 'second' && (
        <TabPanel id="second">content second tab</TabPanel>
      )}
      {store.state.selected === 'third' && (
        <TabPanel id="third">content third tab</TabPanel>
      )}
    </div>
  ))
  .add('as navigation', () => (
    <Tabs role="navigation" extraClassNames={text('extraClassNames', '')}>
      <Tab
        id="first"
        href="https://contentful.com"
        selected={store.state.selected === 'first'}
        onSelect={id => {
          action('onSelect')(id);
          store.set({ selected: id });
        }}
      >
        First
      </Tab>
      <Tab
        id="second"
        href="https://contentful.com"
        selected={store.state.selected === 'second'}
        onSelect={id => {
          action('onSelect')(id);
          store.set({ selected: id });
        }}
      >
        Second
      </Tab>
      <Tab
        id="third"
        href="https://contentful.com"
        selected={store.state.selected === 'third'}
        onSelect={id => {
          action('onSelect')(id);
          store.set({ selected: id });
        }}
      >
        Third
      </Tab>
    </Tabs>
  ));
