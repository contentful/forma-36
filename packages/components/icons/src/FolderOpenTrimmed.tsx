import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const FolderOpenTrimmed = generateIcon({
  name: 'FolderOpenTrimmed',
  path: (
    <Fragment>
      <path d="M0 0h15v18H0V0z" fill="none" />
      <path d="M13.5 4.5h-6L6 3H1.5C.7 3 0 3.7 0 4.5v9c0 .8.7 1.5 1.5 1.5h12c.8 0 1.5-.7 1.5-1.5V6c0-.8-.7-1.5-1.5-1.5zm0 9h-12V6h12v7.5z" />
    </Fragment>
  ),
  trimmed: true,
  viewBox: '0 0 15 18',
});
