import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const ShoppingCartTrimmed = generateIcon({
  name: 'ShoppingCartTrimmed',
  path: (
    <Fragment>
      <path d="M4.5 13.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5S6 15.8 6 15s-.7-1.5-1.5-1.5zM0 1.5V3h1.5l2.7 5.7-1 1.8c-.1.2-.2.5-.2.7 0 .8.7 1.5 1.5 1.5h9v-1.5H4.8c-.1 0-.2-.1-.2-.2v-.1l.7-1.2h5.6c.6 0 1.1-.3 1.3-.8L14.9 4c.1 0 .1-.1.1-.2 0-.5-.3-.8-.8-.8h-11l-.7-1.5H0zm12 12c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5z" />
      <path d="M0 0h15v18H0V0z" fill="none" />
    </Fragment>
  ),
  trimmed: true,
  viewBox: '0 0 15 18',
});
