import React from 'react';
import { AvatarGroup, Avatar } from '@contentful/f36-avatar';
import { SectionHeading } from '@contentful/f36-typography';

export default function AvatarVariantsExample() {
  return (
    <div>
      <SectionHeading as="h3" marginBottom="spacingS">
        Avatar Group spaced with menu
      </SectionHeading>
      <AvatarGroup>
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
          alt="Tyler Brunnenberger"
        />

        <Avatar
          src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=100&h=100"
          alt="Yasemin Ahmed"
        />
      </AvatarGroup>
      <SectionHeading as="h3" marginBottom="spacingS">
        Avatar Group stacked with menu
      </SectionHeading>
      <AvatarGroup variant="stacked">
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
          alt="Tyler Brunnenberger"
        />

        <Avatar
          src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=100&h=100"
          alt="Yasemin Ahmed"
        />
      </AvatarGroup>
    </div>
  );
}
