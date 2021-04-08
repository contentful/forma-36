import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const Menu = generateIcon({
  name: 'Menu',
  path: (
    <Fragment>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </Fragment>
  ),
});
