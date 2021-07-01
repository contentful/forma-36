import * as React from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const Richtext = generateIcon({
  name: 'Richtext',
  viewBox: '0 0 24 24',
  path: (
    <>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      >
        <path d="M21.5 23.5h-19V.5h13l6 6z" />
        <path d="M15.5.5v6h6" />
      </g>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M6.5 7.5h5M6.5 10.5h9M6.5 13.5h2M6.5 16.5h2M6.5 19.5h2M11.542 20.5H17.5l-2.479-4z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M11.5 13.5h6v7h-6z"
      />
      <path d="M13.5 15a.5.5 0 10.002 1.002A.5.5 0 0013.5 15z" />
    </>
  ),
});
