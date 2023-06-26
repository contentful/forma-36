import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Flex } from '@contentful/f36-core';
import { SectionHeading } from '@contentful/f36-typography';

import { Avatar, Variant, type AvatarProps, Size } from '../src/Avatar';

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
        <Avatar size={Size.Tiny} variant={Variant.User} />
        <Avatar size={Size.Small} variant={Variant.User} />
        <Avatar size={Size.Medium} variant={Variant.User} />
        <Avatar size={Size.Large} variant={Variant.User} />
        <Avatar size={Size.Large} variant={Variant.App} />
        <Avatar size={Size.Medium} variant={Variant.App} />
        <Avatar size={Size.Small} variant={Variant.App} />
        <Avatar size={Size.Tiny} variant={Variant.App} />
      </Flex>

      <Flex
        alignItems="center"
        flexDirection="row"
        gap="spacingS"
        marginBottom="spacingM"
      >
        <Avatar {...args} size={Size.Tiny} />
        <Avatar {...args} size={Size.Small} />
        <Avatar {...args} size={Size.Medium} />
        <Avatar {...args} size={Size.Large} />
        <Avatar {...args} size={Size.Large} variant={Variant.App} />
        <Avatar {...args} size={Size.Medium} variant={Variant.App} />
        <Avatar {...args} size={Size.Small} variant={Variant.App} />
        <Avatar {...args} size={Size.Tiny} variant={Variant.App} />
      </Flex>
    </>
  );
};

Overview.args = {
  src: 'https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=100&h=100',
};
