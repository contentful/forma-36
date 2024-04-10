import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

/**
 * @deprecated Trimmed icons will be removed in a future major release.
 * Please try to adapt to the untrimmed icon variant ChevronRight.
 */
export const ChevronRightTrimmed = /*#__PURE__*/ generateIcon({
  name: 'ChevronRightTrimmed',
  path: (
    <Fragment>
      <path d="M1.1 4.5L0 5.6 3.4 9 0 12.4l1.1 1.1L5.6 9 1.1 4.5z" />
      <path d="M0 0h5.6v18H0V0z" fill="none" />
    </Fragment>
  ),
  trimmed: true,
  viewBox: '0 0 5.6 18',
});
