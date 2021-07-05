import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const HeadingOne = generateIcon({
  name: 'HeadingOne',
  path: (
    <Fragment>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M11.7 5v5.5H6.1V5H3.3v14h2.8v-6.1h5.6V19h2.8V5zM18.6 19v-6.3L17.1 14l-1-1.4 2.8-2.1h1.8V19h-2.1z" />
    </Fragment>
  ),
});
