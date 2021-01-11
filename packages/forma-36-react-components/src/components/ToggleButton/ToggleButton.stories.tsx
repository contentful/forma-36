import React from 'react';

import ToggleButton, { ToggleButtonProps } from './ToggleButton';
import SectionHeading from '../Typography/SectionHeading';
import Flex from '../Flex/Flex';

import type { Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Components/ToggleButton',
  component: ToggleButton,
  parameters: {
    propTypes: [ToggleButton['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
} as Meta;

export const Default = (props: ToggleButtonProps) => (
  <div>
    <ToggleButton {...props} />
  </div>
);

Default.args = {
  isDisabled: false,
  isActive: false,
  icon: undefined,
  children: 'Embed Entry',
};

export const overview = () => (
  <>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">Toggle Button default</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <ToggleButton>Embed Entry</ToggleButton>
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">Toggle Button with icon</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <ToggleButton icon="Calendar">Embed Entry</ToggleButton>
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">Toggle Button active</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <ToggleButton isActive icon="Calendar">
        Embed Entry
      </ToggleButton>
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">Toggle Button disabled</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <ToggleButton isDisabled>Embed Entry</ToggleButton>
    </Flex>
  </>
);
