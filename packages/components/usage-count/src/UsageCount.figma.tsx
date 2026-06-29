import React from 'react';
import figma from '@figma/code-connect';
import { UsageCount } from './UsageCount';

const FIGMA_URL =
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=16668:6256';

figma.connect(UsageCount, FIGMA_URL, {
  variant: { Type: 'Periodic' },
  example: () => <UsageCount value={3} variant="periodic" periodType="month" />,
});

figma.connect(UsageCount, FIGMA_URL, {
  variant: { Type: 'Consumption' },
  example: () => (
    <UsageCount value={3} variant="consumption" valueDescription="of 10 GB" />
  ),
});

figma.connect(UsageCount, FIGMA_URL, {
  variant: { Type: 'Entitlement' },
  example: () => <UsageCount value={3} variant="entitlement" quota={10} />,
});
