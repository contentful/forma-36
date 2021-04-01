import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const FormatUnderlined = generateIcon({
  name: 'FormatUnderlined',
  path: (
    <Fragment>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z" />
    </Fragment>
  ),
});
