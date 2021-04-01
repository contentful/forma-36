import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const DeleteTrimmed = generateIcon({
  name: 'DeleteTrimmed',
  path: (
    <Fragment>
      <path d="M1 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H1v12zM14 4h-3.5l-1-1h-5l-1 1H0v2h14V4z" />
      <path fill="none" d="M-5 0h24v24H-5V0z" />
    </Fragment>
  ),
  trimmed: true,
  viewBox: '0 0 14 24',
});
