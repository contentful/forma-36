import React from 'react';

import { UsageCount } from '@contentful/f36-components';

export default function UsageCountConsumptionExample() {
  return (
    <UsageCount
      variant="consumption"
      value={150}
      valueDescription="consumption units per year"
    />
  );
}
