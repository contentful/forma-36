import React from 'react';
import {
  AvatarGroup,
  Avatar,
  SectionHeading,
} from '@contentful/f36-components';

export default function AvatarVariantsExample() {
  return (
    <div>
      <SectionHeading as="h3" marginBottom="spacingS">
        Avatar Group spaced with menu
      </SectionHeading>
      <AvatarGroup>
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
          alt="Tyler Brunnenberger"
        />

        <Avatar
          src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=100&h=100"
          alt="Yasemin Ahmed"
        />
      </AvatarGroup>
      <SectionHeading as="h3" marginBottom="spacingS">
        Avatar Group stacked with menu
      </SectionHeading>
      <AvatarGroup variant="stacked">
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
          alt="Tyler Brunnenberger"
        />

        <Avatar
          src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=100&h=100"
          alt="Yasemin Ahmed"
        />
      </AvatarGroup>
    </div>
  );
}
