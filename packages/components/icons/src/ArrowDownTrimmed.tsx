import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

/**
 * @deprecated Trimmed icons will be removed in a future major release.
 * Please try to adapt to the untrimmed icon variant ArrowDown.
 */
export const ArrowDownTrimmed = /*#__PURE__*/ generateIcon({
  name: 'ArrowDownTrimmed',
  path: (
    <Fragment>
      <path d="M0 10l5 5 5-5H0z" />
      <path d="M0 0h10v24H0V0z" fill="none" />
    </Fragment>
  ),
  trimmed: true,
  viewBox: '0 0 10 24',
});
