import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const ChatBubble = generateIcon({
  name: 'ChatBubble',
  path: (
    <Fragment>
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </Fragment>
  ),
});
