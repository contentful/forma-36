import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const FolderCreateTrimmed = generateIcon({
  name: 'FolderCreateTrimmed',
  path: (
    <Fragment>
      <path d="M0 0h15v18H0V0z" fill="none" />
      <path d="M13.5 4.5h-6L6 3H1.5C.7 3 0 3.7 0 4.5v9c0 .8.7 1.5 1.5 1.5h12c.8 0 1.5-.7 1.5-1.5V6c0-.8-.7-1.5-1.5-1.5zm-.7 6h-2.2v2.2H9v-2.2H6.8V9H9V6.8h1.5V9h2.2v1.5z" />
    </Fragment>
  ),
  trimmed: true,
  viewBox: '0 0 15 18',
});
