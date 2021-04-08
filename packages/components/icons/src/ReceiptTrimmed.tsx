import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const ReceiptTrimmed = generateIcon({
  name: 'ReceiptTrimmed',
  path: (
    <Fragment>
      <path d="M11.2 12.8h-9v-1.5h9v1.5zm0-3h-9V8.2h9v1.6zm0-3h-9V5.2h9v1.6zM0 16.5l1.1-1.1 1.1 1.1 1.1-1.1 1.1 1.1 1.1-1.1 1.1 1.1 1.1-1.1L9 16.5l1.1-1.1 1.1 1.1 1.1-1.1 1.1 1.1v-15l-1.1 1.1-1.1-1.1-1.1 1.1L9 1.5 7.9 2.6 6.8 1.5 5.6 2.6 4.5 1.5 3.4 2.6 2.2 1.5 1.1 2.6 0 1.5v15z" />
      <path d="M0 0h13.5v18H0V0z" fill="none" />
    </Fragment>
  ),
  trimmed: true,
  viewBox: '0 0 13.5 18',
});
