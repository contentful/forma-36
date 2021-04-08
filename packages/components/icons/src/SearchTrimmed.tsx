import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const SearchTrimmed = generateIcon({
  name: 'SearchTrimmed',
  path: (
    <Fragment>
      <path d="M9.4 10.5h-.6l-.2-.2c.7-.9 1.2-2 1.2-3.2 0-2.7-2.2-4.9-4.9-4.9S0 4.4 0 7.1 2.2 12 4.9 12c1.2 0 2.3-.4 3.2-1.2l.1.2v.6l3.8 3.7 1.1-1.1-3.7-3.7zm-4.5 0C3 10.5 1.5 9 1.5 7.1S3 3.8 4.9 3.8s3.4 1.5 3.4 3.4-1.6 3.3-3.4 3.3z" />
      <path d="M0 0h13.1v18H0V0z" fill="none" />
    </Fragment>
  ),
  trimmed: true,
  viewBox: '0 0 13.1 18',
});
