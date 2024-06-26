import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

/**
 * @deprecated Trimmed icons will be removed in a future major release.
 * Please try to adapt to the untrimmed icon variant FormatItalic.
 */
export const FormatItalicTrimmed = /*#__PURE__*/ generateIcon({
  name: 'FormatItalicTrimmed',
  path: (
    <Fragment>
      <path d="M0 0h12v24H0V0z" fill="none" />
      <path d="M4 4v3h2.2l-3.4 8H0v3h8v-3H5.8l3.4-8H12V4H4z" />
    </Fragment>
  ),
  trimmed: true,
  viewBox: '0 0 12 24',
});
