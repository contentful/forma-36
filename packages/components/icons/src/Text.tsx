import React, { Fragment } from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const Text = generateIcon({
  name: 'Text',
  path: (
    <Fragment>
      <defs>
        <path d="M24 24H0V0h24v24z" id="Text_svg__a" />
      </defs>
      <clipPath id="Text_svg__b">
        <use overflow="visible" xlinkHref="#Text_svg__a" />
      </clipPath>
      <path
        clipPath="url(#Text_svg__b)"
        d="M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z"
      />
    </Fragment>
  ),
});
