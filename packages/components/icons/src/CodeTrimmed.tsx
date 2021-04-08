import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const CodeTrimmed = generateIcon({
  name: 'CodeTrimmed',
  path: (
    <Fragment>
      <path d="M0 0h15v18H0V0z" fill="none" />
      <path d="M5.5 12.5L2.1 9l3.4-3.4-1-1.1L0 9l4.5 4.5 1-1zm3.9 0L12.9 9 9.4 5.6l1.1-1.1L15 9l-4.5 4.5s-1-1-1.1-1z" />
    </Fragment>
  ),
  trimmed: true,
  viewBox: '0 0 15 18',
});
