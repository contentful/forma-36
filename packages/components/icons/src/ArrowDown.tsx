import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const ArrowDown = generateIcon({
  name: 'ArrowDown',
  path: (
    <Fragment>
      <path d="M7 10l5 5 5-5z" />,
      <path d="M0 0h24v24H0z" fill="none" />
    </Fragment>
  ),
});
