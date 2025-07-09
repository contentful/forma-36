import React from 'react';
import { UsageCard } from '@contentful/f36-usage-card';
import { TextLink } from '@contentful/f36-text-link';

export default function UsageCardUsageExample() {
  return (
    <UsageCard
      variant={'usage'}
      header={
        <UsageCard.Header
          title="Asset Bandwidth Usage"
          tooltip="This is a tooltip for the usage card"
        />
      }
      description={
        <UsageCard.Description>
          This is a description of the usage card.
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
