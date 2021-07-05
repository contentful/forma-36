import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const FormatItalic = generateIcon({
  name: 'FormatItalic',
  path: (
    <Fragment>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z" />
    </Fragment>
  ),
});
