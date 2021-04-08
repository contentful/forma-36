import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const MoreVerticalTrimmed = generateIcon({
  name: 'MoreVerticalTrimmed',
  path: (
    <Fragment>
      <path d="M0 0h3v18H0V0z" fill="none" />
      <path d="M1.5 6C2.3 6 3 5.3 3 4.5S2.3 3 1.5 3 0 3.7 0 4.5.7 6 1.5 6zm0 1.5C.7 7.5 0 8.2 0 9s.7 1.5 1.5 1.5S3 9.8 3 9s-.7-1.5-1.5-1.5zm0 4.5c-.8 0-1.5.7-1.5 1.5S.7 15 1.5 15 3 14.3 3 13.5 2.3 12 1.5 12z" />
    </Fragment>
  ),
  trimmed: true,
  viewBox: '0 0 3 18',
});
