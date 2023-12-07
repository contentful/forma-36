import React from 'react';
import { Box } from '@contentful/f36-components';
import { useDensity } from '@contentful/f36-utils';

export default function YourComponent() {
  const density = useDensity();

  return <Box>{density === 'high' ? 'High density' : 'Low density'}</Box>;
}
