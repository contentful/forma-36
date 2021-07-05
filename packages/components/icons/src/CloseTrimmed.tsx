import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const CloseTrimmed = generateIcon({
  name: 'CloseTrimmed',
  path: (
    <Fragment>
      <path d="M14 6.4L12.6 5 7 10.6 1.4 5 0 6.4 5.6 12 0 17.6 1.4 19 7 13.4l5.6 5.6 1.4-1.4L8.4 12 14 6.4z" />
      <path d="M0 0h14v24H0V0z" fill="none" />
    </Fragment>
  ),
  trimmed: true,
  viewBox: '0 0 14 24',
});
