import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const MenuTrimmed = generateIcon({
  name: 'MenuTrimmed',
  path: (
    <Fragment>
      <path d="M0 0h13.5v18H0V0z" fill="none" />
      <path d="M0 13.5h13.5V12H0v1.5zm0-3.7h13.5V8.2H0v1.6zm0-5.3V6h13.5V4.5H0z" />
    </Fragment>
  ),
  trimmed: true,
  viewBox: '0 0 13.5 18',
});
