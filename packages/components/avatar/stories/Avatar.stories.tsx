import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Flex } from '@contentful/f36-core';
import { SectionHeading } from '@contentful/f36-typography';

import { Avatar, type AvatarProps } from '../src/Avatar';
import { CheckCircleIcon } from '@contentful/f36-icons/src';

export default {
  component: Avatar,
  title: 'Components/Avatar',
} as Meta;

export const Overview: Story<AvatarProps> = (args) => {
  return (
    <>
      <SectionHeading as="h3" marginBottom="spacingS">
        Avatar variants & sizes
      </SectionHeading>

      <Flex
        alignItems="center"
        flexDirection="row"
        gap="spacingS"
        marginBottom="spacingM"
      >
        <Avatar size="tiny" variant="user" />
        <Avatar size="small" variant="user" />
        <Avatar size="medium" variant="user" />
        <Avatar size="large" variant="user" />
        <Avatar size="large" variant="app" />
        <Avatar size="large" variant="user" />
        <Avatar size="medium" variant="app" />
        <Avatar size="small" variant="app" />
        <Avatar size="tiny" variant="app" />
      </Flex>

      <Flex
        alignItems="center"
        flexDirection="row"
        gap="spacingS"
        marginBottom="spacingM"
      >
        <Avatar {...args} size="tiny" />
        <Avatar {...args} size="small" />
        <Avatar {...args} size="medium" />
        <Avatar {...args} size="large" />
        <Avatar {...args} size="large" variant="app" />
        <Avatar {...args} size="medium" variant="app" />
        <Avatar {...args} size="small" variant="app" />
        <Avatar {...args} size="tiny" variant="app" />
      </Flex>

      <Flex
        alignItems="center"
        flexDirection="row"
        gap="spacingS"
        marginBottom="spacingM"
      >
        <Avatar {...args} size="tiny" showColorBorders />
        <Avatar {...args} size="small" showColorBorders />
        <Avatar {...args} size="medium" showColorBorders />
        <Avatar {...args} size="large" showColorBorders isPrimary />
        <Avatar {...args} size="large" variant="app" showColorBorders />
        <Avatar {...args} size="medium" variant="app" showColorBorders />
        <Avatar
          {...args}
          size="medium"
          showColorBorders
          icon={<CheckCircleIcon variant="positive" />}
        />
        <Avatar {...args} size="small" variant="app" showColorBorders />
        <Avatar
          {...args}
          size="tiny"
          variant="app"
          showColorBorders
          icon={<CheckCircleIcon variant="positive" />}
        />
      </Flex>
    </>
  );
};

Overview.args = {
  src: 'https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=100&h=100',
};
