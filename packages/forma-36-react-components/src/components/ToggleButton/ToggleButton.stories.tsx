import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';
import { iconName } from '../Icon/constants';

import ToggleButton from './ToggleButton';
import SectionHeading from '../Typography/SectionHeading';
import Flex from '../Flex/Flex';

storiesOf('Components/ToggleButton', module)
  .addParameters({
    propTypes: ToggleButton['__docgenInfo'],
    component: ToggleButton,
  })
  .add('default', () => (
    <div>
      <ToggleButton
        className={text('className', '')}
        isDisabled={boolean('isDisabled', false)}
        isActive={boolean('isActive', false)}
        icon={select('icon', [undefined, ...Object.keys(iconName)], undefined)}
      >
        {text('children', 'Embed Entry')}
      </ToggleButton>
    </div>
  ))
  .add('overview', () => (
    <>
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Toggle Button default</SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <ToggleButton>'Embed Entry'</ToggleButton>
      </Flex>
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Toggle Button with icon</SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <ToggleButton icon="Calendar">'Embed Entry'</ToggleButton>
      </Flex>
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Toggle Button active</SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <ToggleButton isActive>'Embed Entry'</ToggleButton>
      </Flex>
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Toggle Button disabled</SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <ToggleButton isDisabled>'Embed Entry'</ToggleButton>
      </Flex>
    </>
  ));
