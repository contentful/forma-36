import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const CheckCircleTrimmed = generateIcon({
  name: 'CheckCircleTrimmed',
  path: (
    <Fragment>
      <path d="M0 0h15v18H0V0z" fill="none" />
      <path d="M7.5 1.5C3.4 1.5 0 4.9 0 9s3.4 7.5 7.5 7.5S15 13.1 15 9s-3.4-7.5-7.5-7.5zM6 12.8L2.2 9l1.1-1.1L6 10.6l5.7-5.7L12.8 6 6 12.8z" />
    </Fragment>
  ),
  trimmed: true,
  viewBox: '0 0 15 18',
});
