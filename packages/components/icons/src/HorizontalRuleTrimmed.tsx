import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

/**
 * @deprecated Trimmed icons will be removed in a future major release.
 * Please try to adapt to the untrimmed icon variant HorizontalRule.
 */
export const HorizontalRuleTrimmed = /*#__PURE__*/ generateIcon({
  name: 'HorizontalRuleTrimmed',
  path: (
    <Fragment>
      <path d="M0 0h12.6v18H0V0z" fill="none" />
      <path d="M0 8.4h12.6v1.3H0z" />
    </Fragment>
  ),
  trimmed: true,
  viewBox: '0 0 12.6 18',
});
