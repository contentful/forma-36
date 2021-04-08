import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const ChevronDownTrimmed = generateIcon({
  name: 'ChevronDownTrimmed',
  path: (
    <Fragment>
      <path d="M1.1 5.9l3.4 3.4 3.4-3.4 1.1 1-4.5 4.5L0 6.9l1.1-1z" />
      <path d="M0 0h9v18H0V0z" fill="none" />
    </Fragment>
  ),
  trimmed: true,
  viewBox: '0 0 9 18',
});
