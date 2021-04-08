import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const LooksOneTrimmed = generateIcon({
  name: 'LooksOneTrimmed',
  path: (
    <Fragment>
      <path d="M0 0h18v24H0V0z" fill="none" />
      <path d="M16 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H9V9H7V7h4v10z" />
    </Fragment>
  ),
  trimmed: true,
  viewBox: '0 0 18 24',
});
