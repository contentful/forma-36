import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const ArrowDownTrimmed = generateIcon({
  name: 'ArrowDownTrimmed',
  path: (
    <Fragment>
      <path d="M0 10l5 5 5-5H0z" />
      <path d="M0 0h10v24H0V0z" fill="none" />
    </Fragment>
  ),
  trimmed: true,
  viewBox: '0 0 10 24',
});
