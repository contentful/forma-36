import React from 'react';

import { UsageCount } from '@contentful/f36-components';

export default function UsageCountExample() {
  return (
    <UsageCount
      variant="entitlement"
      value={150}
      valueUnit="GB"
      quota={200}
      includedLabel="included"
    />
  );
}
