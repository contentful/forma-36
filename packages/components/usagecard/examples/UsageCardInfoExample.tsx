import React from 'react';
import { UsageCard } from '@contentful/f36-usagecard';
import { TextLink } from '@contentful/f36-text-link';

export default function UsageCardInfoExample() {
  return (
    <UsageCard
      variant={'info'}
      header={
        <UsageCard.Header
          title="This is an Info Card"
          tooltip="This is a tooltip for Info Card"
        />
      }
      description={
        <UsageCard.Description>
          This is a description of the info card.
          {'  '}
          <TextLink
            target="_blank"
            rel="noopener noreferrer"
            href={'https://www.contentful.com'}
          >
            Learn more
          </TextLink>
        </UsageCard.Description>
      }
    ></UsageCard>
  );
}
