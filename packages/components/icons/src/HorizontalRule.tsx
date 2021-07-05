import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const HorizontalRule = generateIcon({
  name: 'HorizontalRule',
  path: (
    <Fragment>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M3.6 11.2h16.8v1.7H3.6z" />
    </Fragment>
  ),
});
