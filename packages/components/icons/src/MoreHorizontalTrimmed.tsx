import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

/**
 * @deprecated Trimmed icons will be removed in a future major release.
 * Please try to adapt to the untrimmed icon variant MoreHorizontal.
 */
export const MoreHorizontalTrimmed = /*#__PURE__*/ generateIcon({
  name: 'MoreHorizontalTrimmed',
  path: (
    <Fragment>
      <path d="M0 0h12v18H0V0z" fill="none" />
      <path d="M1.5 7.5C.7 7.5 0 8.2 0 9s.7 1.5 1.5 1.5S3 9.8 3 9s-.7-1.5-1.5-1.5zm9 0C9.7 7.5 9 8.2 9 9s.7 1.5 1.5 1.5S12 9.8 12 9s-.7-1.5-1.5-1.5zM6 7.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5S7.5 9.8 7.5 9 6.8 7.5 6 7.5z" />
    </Fragment>
  ),
  trimmed: true,
  viewBox: '0 0 12 18',
});
