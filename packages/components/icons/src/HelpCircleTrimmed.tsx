import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const HelpCircleTrimmed = generateIcon({
  name: 'HelpCircleTrimmed',
  path: (
    <Fragment>
      <path d="M0 0h15v18H0V0z" fill="none" />
      <path d="M7.5 1.5C3.4 1.5 0 4.9 0 9s3.4 7.5 7.5 7.5S15 13.1 15 9s-3.4-7.5-7.5-7.5zm.7 12.7H6.8v-1.5h1.5v1.5zm1.6-5.8l-.7.7c-.5.5-.9 1-.9 2.1H6.8v-.4c0-.8.3-1.6.9-2.1l.9-.9c.2-.3.4-.6.4-1 0-.8-.7-1.5-1.5-1.5S6 5.9 6 6.8H4.5c0-1.7 1.3-3 3-3s3 1.3 3 3c0 .6-.3 1.2-.7 1.6z" />
    </Fragment>
  ),
  trimmed: true,
  viewBox: '0 0 15 18',
});
