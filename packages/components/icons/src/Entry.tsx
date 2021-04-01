import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const Entry = generateIcon({
  name: 'Entry',
  path: (
    <Fragment>
      <path fill="none" d="M0 0h24v24H0V0z" />
      <path d="M8 16h8v2H8zM8 12h8v2H8z" />
      <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
    </Fragment>
  ),
});
