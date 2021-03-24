import * as React from 'react';
import { CacheProvider } from '@emotion/core';
import { cache } from 'emotion';

export const wrapRootElement = ({ element }) => {
  return <CacheProvider value={cache}>{element}</CacheProvider>;
};
