import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { SectionHeading } from '@contentful/f36-typography';

import { Avatar, type AvatarProps } from '../src/Avatar';
import { AvatarGroup } from '../src/AvatarGroup';

export default {
  component: AvatarGroup,
  title: 'Components/Avatar/AvatarGroup',
} as Meta;

export const Overview: StoryObj<AvatarProps> = (args) => {
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
        Avatar Group spaced with menu and tooltip
      </SectionHeading>

      <AvatarGroup>
        <Avatar
          {...args}
          alt="Lisa Simpson"
          variant="user"
          tooltipProps={{ content: 'Lisa Simpson', placement: 'bottom' }}
        />
        <Avatar
          {...args}
          alt="Apu Nahasapeemapetilon"
          variant="user"
          tooltipProps={{
            content: 'Apu Nahasapeemapetilon',
            placement: 'bottom',
          }}
        />
        <Avatar
          {...args}
          alt="Arnie Pye"
          variant="user"
          tooltipProps={{ content: 'Arnie Pye', placement: 'bottom' }}
        />
        <Avatar
          {...args}
          alt="Dr. Julius Hibbert"
          variant="user"
          tooltipProps={{ content: 'Dr. Julius Hibbert', placement: 'bottom' }}
        />
        <Avatar
          {...args}
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
        <Avatar {...args} alt="Lisa Simpson" variant="user" />
        <Avatar {...args} alt="Apu Nahasapeemapetilon" variant="user" />
        <Avatar {...args} alt="Arnie Pye" variant="user" />
        <Avatar {...args} alt="Dr. Julius Hibbert" variant="user" />
        <Avatar {...args} alt="Prof. Daniel Düsentrieb" variant="user" />
      </AvatarGroup>

      <SectionHeading as="h3" marginBottom="spacingS">
        Avatar Group Stacked
      </SectionHeading>

      <AvatarGroup maxVisibleChildren={4} variant="stacked">
        <Avatar {...args} alt="Lisa Simpson" variant="user" />
        <Avatar
          {...args}
          alt="Apu N."
          variant="user"
          colorVariant="muted"
          tooltipProps={{
            content: 'Apu Nahasapeemapetilon',
            placement: 'bottom',
          }}
        />
        <Avatar {...args} alt="Arnie Pye" variant="user" colorVariant="muted" />
        <Avatar
          {...args}
          alt="Dr. Julius Hibbert"
          variant="user"
          colorVariant="muted"
        />
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

      <SectionHeading as="h3" marginBottom="spacingS">
        Avatar Group stacked with tooltips
      </SectionHeading>

      <AvatarGroup size="small" variant="stacked">
        <Avatar
          {...args}
          alt="Arnie Pye"
          variant="user"
          tooltipProps={{
            content: 'Arnie Pye',
            placement: 'bottom',
          }}
        />
        <Avatar
          {...args}
          alt="Dr. Julius Hibbert"
          variant="user"
          tooltipProps={{
            content: 'Dr. Julius Hibbert',
            placement: 'bottom',
          }}
        />
        <Avatar
          {...args}
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
};

Overview.args = {
  size: 'large',
  src: 'https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=100&h=100',
};
