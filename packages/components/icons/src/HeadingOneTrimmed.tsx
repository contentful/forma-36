import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const HeadingOneTrimmed = generateIcon({
  name: 'HeadingOneTrimmed',
  path: (
    <Fragment>
      <path d="M0 0h13v18H0V0z" fill="none" />
      <path d="M6.3 3.8v4.1H2.1V3.8H0V14.2h2.1V9.7h4.2v4.5h2.1V3.8zM11.5 14.2V9.5l-1.1 1-.8-1 2.1-1.6H13v6.4h-1.5z" />
    </Fragment>
  ),
  trimmed: true,
  viewBox: '0 0 13 18',
});
