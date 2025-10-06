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
          src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=100&h=100"
          alt="Alex Taylor-Allister"
        />
        <Avatar
          src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=100&h=100"
          alt="Yasemin Ahmed"
        />
      </AvatarGroup>
      <SectionHeading as="h3" marginBottom="spacingS">
        Avatar Group in small size
      </SectionHeading>
      <AvatarGroup size="small">
        <Avatar
          src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=100&h=100"
          alt="Alex Taylor-Allister"
        />

        <Avatar
          src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=100&h=100"
          alt="Casey Lee"
        />

        <Avatar
          src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=100&h=100"
          alt="Yasemin Ahmed"
        />
      </AvatarGroup>
    </div>
  );
}
