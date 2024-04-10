import React from 'react';
import { generateIcon } from '@contentful/f36-icon';

/**
 * @deprecated Trimmed icons will be removed in a future major release.
 * Please try to adapt to the untrimmed icon variant ArrowForward.
 */
export const ArrowForwardTrimmed = /*#__PURE__*/ generateIcon({
  name: 'ArrowForwardTrimmed',
  viewBox: '0 0 24 24',
  trimmed: true,
  path: (
    <>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
    </>
  ),
});
