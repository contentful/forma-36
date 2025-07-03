import React from 'react';
import { UsageCard } from '@contentful/f36-usagecard';

export default function UsageCardUsage() {
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
