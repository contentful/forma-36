import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const LooksOne = generateIcon({
  name: 'LooksOne',
  path: (
    <Fragment>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z" />
    </Fragment>
  ),
});
