import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const FaceHappyTrimmed = generateIcon({
  name: 'FaceHappyTrimmed',
  path: (
    <Fragment>
      <path d="M7.5 1.5C3.4 1.5 0 4.9 0 9s3.4 7.5 7.5 7.5S15 13.1 15 9s-3.4-7.5-7.5-7.5zm0 13.5c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm.7-7.5l.8.7.8-.8.8.8.8-.8-1.6-1.5-1.6 1.6zm-3 0l.8.7.8-.8-1.6-1.5-1.6 1.6.8.8.8-.8zm2.3 5.6c1.7 0 3.2-1.1 3.8-2.6H3.7c.6 1.5 2.1 2.6 3.8 2.6z" />
      <path d="M0 0h15v18H0V0z" fill="none" />
    </Fragment>
  ),
  trimmed: true,
  viewBox: '0 0 15 18',
});
