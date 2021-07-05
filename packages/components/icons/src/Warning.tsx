import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const Warning = generateIcon({
  name: 'Warning',
  path: (
    <Fragment>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
    </Fragment>
  ),
});
