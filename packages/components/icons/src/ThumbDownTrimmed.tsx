import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const ThumbDownTrimmed = generateIcon({
  name: 'ThumbDownTrimmed',
  path: (
    <Fragment>
      <path d="M0 0h16.5v18H0V0z" fill="none" />
      <path d="M10.5 2.2H3.8c-.6 0-1.2.4-1.4.9L.1 8.5c-.1.1-.1.3-.1.5v1.5c0 .8.7 1.5 1.5 1.5h4.7l-.7 3.4v.2c0 .3.1.6.3.8l.8.8 4.9-4.9c.3-.3.4-.6.4-1.1V3.8c.1-.9-.6-1.6-1.4-1.6zm3 0v9h3v-9h-3z" />
    </Fragment>
  ),
  trimmed: true,
  viewBox: '0 0 16.5 18',
});
