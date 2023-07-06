import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { SectionHeading } from '@contentful/f36-typography';

import { Avatar, type AvatarProps } from '../src/Avatar';
import { AvatarGroup } from '../src/AvatarGroup';

export default {
  component: AvatarGroup,
  title: 'Components/Avatar/AvatarGroup',
} as Meta;

export const Overview: Story<AvatarProps> = (args) => {
  return (
    <>
      <SectionHeading as="h3" marginBottom="spacingS">
        Avatar Group spaced with menu
      </SectionHeading>

      <AvatarGroup>
        <Avatar {...args} alt="Lisa Simpson" variant="user" />
        <Avatar {...args} alt="Apu Nahasapeemapetilon" variant="user" />
        <Avatar {...args} alt="Arnie Pye" variant="user" />
        <Avatar {...args} alt="Dr. Julius Hibbert" variant="user" />
        <Avatar {...args} alt="Prof. Daniel Düsentrieb" variant="user" />
      </AvatarGroup>
      <SectionHeading as="h3" marginBottom="spacingS">
        Avatar Group Stacked
      </SectionHeading>

      <AvatarGroup variant="stacked">
        <Avatar {...args} alt="Lisa Simpson" variant="user" />
        <Avatar {...args} alt="Apu Nahasapeemapetilon" variant="user" />
        <Avatar {...args} alt="Arnie Pye" variant="user" />
        <Avatar {...args} alt="Dr. Julius Hibbert" variant="user" />
        <Avatar {...args} alt="Prof. Daniel Düsentrieb" variant="user" />
      </AvatarGroup>

      <SectionHeading as="h3" marginBottom="spacingS">
        Avatar Group Spaced Small
      </SectionHeading>

      <AvatarGroup size="small">
        <Avatar {...args} alt="Arnie Pye" variant="user" />
        <Avatar {...args} alt="Dr. Julius Hibbert" variant="user" />
        <Avatar {...args} alt="Prof. Daniel Düsentrieb" variant="user" />
      </AvatarGroup>
      <SectionHeading as="h3" marginBottom="spacingS">
        Avatar Group spaced Small
      </SectionHeading>

      <AvatarGroup size="small" variant="stacked">
        <Avatar {...args} alt="Arnie Pye" variant="user" />
        <Avatar {...args} alt="Dr. Julius Hibbert" variant="user" />
        <Avatar {...args} alt="Prof. Daniel Düsentrieb" variant="user" />
      </AvatarGroup>
    </>
  );
};

Overview.args = {
  src: 'https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=100&h=100',
};
