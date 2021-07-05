import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const Filter = generateIcon({
  name: 'Filter',
  path: (
    <Fragment>
      <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </Fragment>
  ),
});
