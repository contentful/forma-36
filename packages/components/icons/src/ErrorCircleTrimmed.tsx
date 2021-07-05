import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const ErrorCircleTrimmed = generateIcon({
  name: 'ErrorCircleTrimmed',
  path: (
    <Fragment>
      <path d="M0 0h15v18H0V0z" fill="none" />
      <path d="M7.5 1.5C3.4 1.5 0 4.9 0 9s3.4 7.5 7.5 7.5S15 13.1 15 9s-3.4-7.5-7.5-7.5zm.7 11.3H6.8v-1.5h1.5v1.5zm0-3H6.8V5.2h1.5v4.6z" />
    </Fragment>
  ),
  trimmed: true,
  viewBox: '0 0 15 18',
});
