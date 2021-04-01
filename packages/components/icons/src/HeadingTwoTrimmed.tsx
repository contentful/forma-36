import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const HeadingTwoTrimmed = generateIcon({
  name: 'HeadingTwoTrimmed',
  path: (
    <Fragment>
      <path d="M0 0h14.4v18H0V0z" fill="none" />
      <path d="M6.3 3.8v4.1H2.2V3.8H0V14.2h2.2V9.7h4.1v4.5h2.2V3.8zM9.8 14.2V13l2.5-2.2c.2-.1.3-.3.4-.4.1-.2.2-.3.2-.5s-.1-.4-.2-.5c-.3-.3-.5-.4-.8-.4-.2 0-.5.1-.6.3-.1.1-.2.4-.3.7l-1.4-.2c0-.3.2-.6.3-.9.1-.2.3-.5.5-.7.2-.1.5-.3.8-.4.3-.1.6-.1.9-.1.3 0 .6.1.8.1.3.1.5.2.8.4.2.2.4.4.5.6s.2.5.2.9c0 .2 0 .5-.1.6-.1.1-.2.4-.2.5-.1.2-.2.3-.4.5-.2.1-.3.3-.4.4L11.8 13h2.6v1.3H9.8z" />
    </Fragment>
  ),
  trimmed: true,
  viewBox: '0 0 14.4 18',
});
