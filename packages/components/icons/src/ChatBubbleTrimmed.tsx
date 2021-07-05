import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const ChatBubbleTrimmed = generateIcon({
  name: 'ChatBubbleTrimmed',
  path: (
    <Fragment>
      <path d="M13.5 1.5h-12C.7 1.5 0 2.2 0 3v13.5l3-3h10.5c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5z" />
      <path d="M0 0h15v18H0V0z" fill="none" />
    </Fragment>
  ),
  trimmed: true,
  viewBox: '0 0 15 18',
});
