import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const DownloadTrimmed = generateIcon({
  name: 'DownloadTrimmed',
  path: (
    <Fragment>
      <path d="M10.5 6.8h-3V2.2H3v4.5H0L5.2 12l5.3-5.2zM0 13.5V15h10.5v-1.5H0z" />
      <path d="M0 0h10.5v18H0V0z" fill="none" />
    </Fragment>
  ),
  trimmed: true,
  viewBox: '0 0 10.5 18',
});
