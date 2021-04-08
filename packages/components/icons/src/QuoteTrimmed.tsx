import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const QuoteTrimmed = generateIcon({
  name: 'QuoteTrimmed',
  path: (
    <Fragment>
      <path d="M.8 12.8H3l1.5-3V5.2H0v4.5h2.2L.8 12.8zm6 0H9l1.5-3V5.2H6v4.5h2.2l-1.4 3.1z" />
      <path d="M0 0h10.5v18H0V0z" fill="none" />
    </Fragment>
  ),
  trimmed: true,
  viewBox: '0 0 10.5 18',
});
