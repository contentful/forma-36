import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const EntryTrimmed = generateIcon({
  name: 'EntryTrimmed',
  path: (
    <Fragment>
      <path d="M0 0h16v24H0V0z" fill="none" />
      <path d="M4 16h8v2H4zM4 12h8v2H4z" />
      <path d="M10 2H2C.9 2 0 2.9 0 4v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H2V4h7v5h5v11z" />
    </Fragment>
  ),
  trimmed: true,
  viewBox: '0 0 16 24',
});
