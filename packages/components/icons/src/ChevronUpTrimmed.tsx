import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const ChevronUpTrimmed = generateIcon({
  name: 'ChevronUpTrimmed',
  path: (
    <Fragment>
      <path d="M1.1 11.6l3.4-3.4 3.4 3.4L9 10.5 4.5 6 0 10.5l1.1 1.1z" />
      <path d="M0 0h9v18H0V0z" fill="none" />
    </Fragment>
  ),
  trimmed: true,
  viewBox: '0 0 9 18',
});
