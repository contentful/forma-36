import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

/**
 * @deprecated Trimmed icons will be removed in a future major release.
 * Please try to adapt to the untrimmed icon variant Star.
 */
export const StarTrimmed = /*#__PURE__*/ generateIcon({
  name: 'StarTrimmed',
  path: (
    <Fragment>
      <path d="M0 0h15v18H0V0z" fill="none" />
      <path d="M7.5 13l4.6 2.8-1.2-5.3L15 6.9l-5.4-.4-2.1-5-2.1 5-5.4.4 4.1 3.5-1.2 5.3L7.5 13z" />
      <path d="M0 0h15v18H0V0z" fill="none" />
    </Fragment>
  ),
  trimmed: true,
  viewBox: '0 0 15 18',
});
