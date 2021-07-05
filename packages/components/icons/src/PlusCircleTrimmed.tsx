import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const PlusCircleTrimmed = generateIcon({
  name: 'PlusCircleTrimmed',
  path: (
    <Fragment>
      <path d="M0 0h15v18H0V0z" fill="none" />
      <path d="M7.5 1.5C3.4 1.5 0 4.9 0 9s3.4 7.5 7.5 7.5S15 13.1 15 9s-3.4-7.5-7.5-7.5zm3.7 8.3h-3v3H6.8v-3h-3V8.2h3v-3h1.5v3h3v1.6z" />
    </Fragment>
  ),
  trimmed: true,
  viewBox: '0 0 15 18',
});
