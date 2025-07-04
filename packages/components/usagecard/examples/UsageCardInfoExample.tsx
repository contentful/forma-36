import React from 'react';
import { UsageCard } from '@contentful/f36-usagecard';

export default function UsageCardUsageExample() {
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
        <UsageCard.Description
          linkTitle="Learn more"
          link="https://www.contentful.com"
        >
          Your total usage in the current billing period is below your contracts
          limits.
        </UsageCard.Description>
      }
    ></UsageCard>
  );
}
