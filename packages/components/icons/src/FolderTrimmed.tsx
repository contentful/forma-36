import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

/**
 * @deprecated Trimmed icons will be removed in a future major release.
 * Please try to adapt to the untrimmed icon variant Folder.
 */
export const FolderTrimmed = /*#__PURE__*/ generateIcon({
  name: 'FolderTrimmed',
  path: (
    <Fragment>
      <path d="M6 3H1.5C.7 3 0 3.7 0 4.5v9c0 .8.7 1.5 1.5 1.5h12c.8 0 1.5-.7 1.5-1.5V6c0-.8-.7-1.5-1.5-1.5h-6L6 3z" />
      <path d="M0 0h15v18H0V0z" fill="none" />
    </Fragment>
  ),
  trimmed: true,
  viewBox: '0 0 15 18',
});
