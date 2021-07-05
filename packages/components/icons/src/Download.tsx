import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const Download = generateIcon({
  name: 'Download',
  path: (
    <Fragment>
      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </Fragment>
  ),
});
