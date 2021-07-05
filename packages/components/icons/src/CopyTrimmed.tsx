import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const CopyTrimmed = generateIcon({
  name: 'CopyTrimmed',
  path: (
    <Fragment>
      <path d="M0 0h14.2v18H0V0z" fill="none" />
      <path d="M10.5.8h-9C.7.8 0 1.4 0 2.2v10.5h1.5V2.2h9V.8zm2.3 3H4.5c-.8 0-1.5.6-1.5 1.4v10.5c0 .8.7 1.5 1.5 1.5h8.2c.8 0 1.5-.7 1.5-1.5V5.2c0-.8-.6-1.4-1.4-1.4zm0 12H4.5V5.2h8.2v10.6z" />
    </Fragment>
  ),
  trimmed: true,
  viewBox: '0 0 14.2 18',
});
