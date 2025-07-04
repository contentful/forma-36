import React from 'react';

import { UsageCount } from '@contentful/f36-usagecount';

export default function UsageCountExample() {
  return (
    <UsageCount
      variant={'periodic'}
      value={150}
      valueUnit="GB"
      periodType="year"
      quota={100}
    ></UsageCount>
  );
}
