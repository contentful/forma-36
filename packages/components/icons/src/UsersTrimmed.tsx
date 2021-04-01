import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const UsersTrimmed = generateIcon({
  name: 'UsersTrimmed',
  path: (
    <Fragment>
      <path d="M0 0h16.5v18H0V0z" fill="none" />
      <path d="M11.2 8.2c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2S9 4.8 9 6s1 2.2 2.2 2.2zm-6 0c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2S3 4.8 3 6s1 2.2 2.2 2.2zm0 1.6c-1.7 0-5.2.8-5.2 2.6v1.9h10.5v-1.9c0-1.8-3.5-2.6-5.3-2.6zm6 0h-.7c.9.6 1.5 1.5 1.5 2.6v1.9h4.5v-1.9c0-1.8-3.5-2.6-5.3-2.6z" />
    </Fragment>
  ),
  trimmed: true,
  viewBox: '0 0 16.5 18',
});
