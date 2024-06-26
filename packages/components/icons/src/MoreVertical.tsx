import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

/**
 * @deprecated This icon will be removed in a future major release.
 * Please use the `MoreHorizontal` icon instead.
 */
export const MoreVertical = /*#__PURE__*/ generateIcon({
  name: 'MoreVertical',
  path: (
    <Fragment>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
    </Fragment>
  ),
});
