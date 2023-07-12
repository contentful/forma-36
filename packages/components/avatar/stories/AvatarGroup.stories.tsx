import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SectionHeading } from '@contentful/f36-typography';

import { Avatar } from '../src/Avatar';
import { AvatarGroup } from '../src/AvatarGroup';

export default {
  component: AvatarGroup,
  title: 'Components/Avatar/AvatarGroup',
} as Meta<typeof AvatarGroup>;

type Story = StoryObj<typeof AvatarGroup>;

const avatarSrc =
  'https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=100&h=100';

export const Overview: Story = {
  render: () => {
    return (
      <>
        <SectionHeading as="h3" marginBottom="spacingS">
          Avatar Group spaced with menu
        </SectionHeading>

        <AvatarGroup>
          <Avatar src={avatarSrc} alt="Lisa Simpson" variant="user" />
          <Avatar src={avatarSrc} alt="Apu Nahasapeemapetilon" variant="user" />
          <Avatar src={avatarSrc} alt="Arnie Pye" variant="user" />
          <Avatar src={avatarSrc} alt="Dr. Julius Hibbert" variant="user" />
          <Avatar
            src={avatarSrc}
            alt="Prof. Daniel Düsentrieb"
            variant="user"
          />
        </AvatarGroup>

        <SectionHeading as="h3" marginBottom="spacingS">
          Avatar Group spaced with menu and tooltip
        </SectionHeading>

        <AvatarGroup>
          <Avatar
            src={avatarSrc}
            alt="Lisa Simpson"
            variant="user"
            tooltipProps={{ content: 'Lisa Simpson', placement: 'bottom' }}
          />
          <Avatar
            src={avatarSrc}
            alt="Apu Nahasapeemapetilon"
            variant="user"
            tooltipProps={{
              content: 'Apu Nahasapeemapetilon',
              placement: 'bottom',
            }}
          />
          <Avatar
            src={avatarSrc}
            alt="Arnie Pye"
            variant="user"
            tooltipProps={{ content: 'Arnie Pye', placement: 'bottom' }}
          />
          <Avatar
            src={avatarSrc}
            alt="Dr. Julius Hibbert"
            variant="user"
            tooltipProps={{
              content: 'Dr. Julius Hibbert',
              placement: 'bottom',
            }}
          />
          <Avatar
            src={avatarSrc}
            alt="Prof. Daniel Düsentrieb"
            variant="user"
            tooltipProps={{
              content: 'Prof. Daniel Düsentrieb',
              placement: 'bottom',
            }}
          />
        </AvatarGroup>

        <SectionHeading as="h3" marginBottom="spacingS">
          Avatar Group spaced with custom visible children
        </SectionHeading>

        <AvatarGroup maxVisibleChildren={5}>
          <Avatar src={avatarSrc} alt="Lisa Simpson" variant="user" />
          <Avatar src={avatarSrc} alt="Apu Nahasapeemapetilon" variant="user" />
          <Avatar src={avatarSrc} alt="Arnie Pye" variant="user" />
          <Avatar src={avatarSrc} alt="Dr. Julius Hibbert" variant="user" />
          <Avatar
            src={avatarSrc}
            alt="Prof. Daniel Düsentrieb"
            variant="user"
          />
        </AvatarGroup>

        <SectionHeading as="h3" marginBottom="spacingS">
          Avatar Group Stacked
        </SectionHeading>

        <AvatarGroup maxVisibleChildren={4} variant="stacked">
          <Avatar src={avatarSrc} alt="Lisa Simpson" variant="user" />
          <Avatar
            src={avatarSrc}
            alt="Apu N."
            variant="user"
            colorVariant="muted"
            tooltipProps={{
              content: 'Apu Nahasapeemapetilon',
              placement: 'bottom',
            }}
          />
          <Avatar
            src={avatarSrc}
            alt="Arnie Pye"
            variant="user"
            colorVariant="muted"
          />
          <Avatar
            src={avatarSrc}
            alt="Dr. Julius Hibbert"
            variant="user"
            colorVariant="muted"
          />
          <Avatar
            src={avatarSrc}
            alt="Prof. Daniel Düsentrieb"
            variant="user"
          />
        </AvatarGroup>

        <SectionHeading as="h3" marginBottom="spacingS">
          Avatar Group Spaced Small
        </SectionHeading>

        <AvatarGroup size="small">
          <Avatar src={avatarSrc} alt="Arnie Pye" variant="user" />
          <Avatar src={avatarSrc} alt="Dr. Julius Hibbert" variant="user" />
          <Avatar
            src={avatarSrc}
            alt="Prof. Daniel Düsentrieb"
            variant="user"
          />
        </AvatarGroup>
        <SectionHeading as="h3" marginBottom="spacingS">
          Avatar Group spaced Small
        </SectionHeading>

        <AvatarGroup size="small" variant="stacked">
          <Avatar src={avatarSrc} alt="Arnie Pye" variant="user" />
          <Avatar src={avatarSrc} alt="Dr. Julius Hibbert" variant="user" />
          <Avatar
            src={avatarSrc}
            alt="Prof. Daniel Düsentrieb"
            variant="user"
          />
        </AvatarGroup>

        <SectionHeading as="h3" marginBottom="spacingS">
          Avatar Group stacked with tooltips
        </SectionHeading>

        <AvatarGroup size="small" variant="stacked">
          <Avatar
            src={avatarSrc}
            alt="Arnie Pye"
            variant="user"
            tooltipProps={{
              content: 'Arnie Pye',
              placement: 'bottom',
            }}
          />
          <Avatar
            src={avatarSrc}
            alt="Dr. Julius Hibbert"
            variant="user"
            tooltipProps={{
              content: 'Dr. Julius Hibbert',
              placement: 'bottom',
            }}
          />
          <Avatar
            src={avatarSrc}
            alt="Prof. Daniel Düsentrieb"
            variant="user"
            tooltipProps={{
              content: 'Prof. Daniel Düsentrieb',
              placement: 'bottom',
            }}
          />
        </AvatarGroup>
      </>
    );
  },
};
