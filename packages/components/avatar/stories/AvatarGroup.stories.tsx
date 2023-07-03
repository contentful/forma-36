import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Flex } from '@contentful/f36-core';
import { SectionHeading } from '@contentful/f36-typography';

import { Avatar, Variant, type AvatarProps } from '../src/Avatar';
import { AvatarGroup } from '../src/AvatarGroup';

export default {
  component: AvatarGroup,
  title: 'Components/Avatar/AvatarGroup',
} as Meta;

export const Overview: Story<AvatarProps> = (args) => {
  return (
    <>
      <SectionHeading as="h3" marginBottom="spacingS">
        Avatar Group
      </SectionHeading>

      <AvatarGroup>
        <Avatar {...args} alt="Lisa Simpson" variant={Variant.User} />
        <Avatar {...args} alt="Apu Nahasapeemapetilon" variant={Variant.User} />
        <Avatar {...args} alt="Arnie Pye" variant={Variant.User} />
        <Avatar {...args} alt="Dr. Julius Hibbert" variant={Variant.User} />
        <Avatar
          {...args}
          alt="Prof. Daniel Düsentrieb"
          variant={Variant.User}
        />
      </AvatarGroup>
      <SectionHeading as="h3" marginBottom="spacingS">
        Avatar Group
      </SectionHeading>

      <AvatarGroup>
        <Avatar {...args} alt="Arnie Pye" variant={Variant.User} />
        <Avatar {...args} alt="Dr. Julius Hibbert" variant={Variant.User} />
        <Avatar
          {...args}
          alt="Prof. Daniel Düsentrieb"
          variant={Variant.User}
        />
      </AvatarGroup>
    </>
  );
};

Overview.args = {
  src: 'https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=100&h=100',
};
