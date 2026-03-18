import React from 'react';
import { TextLink, UsageCount, UsageCard } from '@contentful/f36-components';

export default function UsageCardInfoExample() {
  return (
    <UsageCard
      variant="info"
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
    >
      <UsageCount
        variant="consumption"
        value={150}
        valueUnit="GB"
        valueDescription="Used this month"
      />
    </UsageCard>
  );
}
