import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const CheckCircle = /*#__PURE__*/ generateIcon({
  name: 'CheckCircle',
  path: (
    <Fragment>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </Fragment>
  ),
});
