import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const Plus = generateIcon({
  name: 'Plus',
  path: (
    <Fragment>
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </Fragment>
  ),
});
