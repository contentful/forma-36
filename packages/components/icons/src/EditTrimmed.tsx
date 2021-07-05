import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const EditTrimmed = generateIcon({
  name: 'EditTrimmed',
  path: (
    <Fragment>
      <path d="M0 12.9v2.8h2.8l8.3-8.3-2.8-2.8L0 12.9zm13.3-7.6c.3-.3.3-.8 0-1.1l-1.8-1.8c-.3-.3-.8-.3-1.1 0L9.1 3.8l2.8 2.8c0 .1 1.4-1.3 1.4-1.3z" />
      <path d="M0 0h13.5v18H0V0z" fill="none" />
    </Fragment>
  ),
  trimmed: true,
  viewBox: '0 0 13.5 18',
});
