import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const Heading = generateIcon({
  name: 'Heading',
  path: (
    <Fragment>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M14.8 5v5.5H9.2V5H6.4v14h2.8v-6.1h5.6V19h2.8V5z" />
    </Fragment>
  ),
});
