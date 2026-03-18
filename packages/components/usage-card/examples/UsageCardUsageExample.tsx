import React from 'react';
import { TextLink, UsageCount, UsageCard } from '@contentful/f36-components';

export default function UsageCardUsageExample() {
  return (
    <UsageCard
      variant="usage"
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
    >
      <UsageCount
        variant="periodic"
        value={150}
        valueUnit="GB"
        periodType="year"
      />
    </UsageCard>
  );
}
