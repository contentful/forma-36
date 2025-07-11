import React from 'react';

import { UsageCount } from '@contentful/f36-components';

export default function UsageCountExample() {
  return (
    <UsageCount
      variant="periodic"
      value={150}
      valueUnit="GB"
      periodType="year"
    />
  );
}
