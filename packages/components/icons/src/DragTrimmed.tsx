import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const DragTrimmed = generateIcon({
  name: 'DragTrimmed',
  path: (
    <Fragment>
      <path d="M0 0h10v24H0V0z" fill="none" />
      <path d="M4 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6C.9 4 0 4.9 0 6s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
    </Fragment>
  ),
  trimmed: true,
  viewBox: '0 0 10 24',
});
