import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';

import Switch from './Switch';
import SectionHeading from '../Typography/SectionHeading';
import Flex from '../Flex/Flex';

function DefaultStory() {
  const [isActive, setActive] = useState(false);

  return (
    <Switch
      id="testSwitch"
      className={text('className', '')}
      isChecked={boolean('isChecked', isActive)}
      isDisabled={boolean('isDisabled', false)}
      labelText={text('labelText', 'My label text')}
      onToggle={setActive}
    />
  );
}

storiesOf('Components/Switch', module)
  .addParameters({
    propTypes: Switch['__docgenInfo'],
    component: Switch,
  })
  .add('default', () => <DefaultStory />)
  .add('overview', () => (
    <>
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Switch default</SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <Switch id="testSwitch" labelText="My label text" />
      </Flex>
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Switch checked</SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <Switch id="testSwitch" isChecked labelText="My label text" />
      </Flex>
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Switch disabled</SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <Switch id="testSwitch" isDisabled labelText="My label text" />
      </Flex>
    </>
  ));
