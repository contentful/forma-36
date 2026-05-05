import React from 'react';
import figma from '@figma/code-connect';
import { UsageCard } from './CompoundUsageCard';
import { UsageCount } from '@contentful/f36-usage-count';

const FIGMA_URL =
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=16663:2166';

figma.connect(UsageCard, FIGMA_URL, {
  variant: { Type: 'Usage' },
  example: () => (
    <UsageCard>
      <UsageCard.Header title="Environments" />
      <UsageCount value={3} variant="entitlement" quota={10} />
    </UsageCard>
  ),
});

figma.connect(UsageCard, FIGMA_URL, {
  variant: { Type: 'Info' },
  example: () => (
    <UsageCard variant="info">
      <UsageCard.Header title="Feature" />
      <UsageCard.Description>Description text</UsageCard.Description>
    </UsageCard>
  ),
});
