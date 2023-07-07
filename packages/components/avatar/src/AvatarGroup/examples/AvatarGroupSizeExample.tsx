import React from 'react';
import { AvatarGroup, Avatar } from '@contentful/f36-avatar';
import { SectionHeading } from '@contentful/f36-typography';

export default function AvatarVariantsExample() {
  return (
    <div>
      <SectionHeading as="h3" marginBottom="spacingS">
        Avatar Group in medium size
      </SectionHeading>
      <AvatarGroup>
        <Avatar
          src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=100&h=100"
          alt="Alex Taylor-Allister"
        />
        <Avatar
          src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=100&h=100"
          alt="Yasemin Ahmed"
        />
      </AvatarGroup>
      <SectionHeading as="h3" marginBottom="spacingS">
        Avatar Group in small size
      </SectionHeading>
      <AvatarGroup size="small">
        <Avatar
          src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=100&h=100"
          alt="Alex Taylor-Allister"
        />

        <Avatar
          src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=100&h=100"
          alt="Casey Lee"
        />

        <Avatar
          src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=100&h=100"
          alt="Yasemin Ahmed"
        />
      </AvatarGroup>
    </div>
  );
}
