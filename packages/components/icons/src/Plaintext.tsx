import * as React from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const Plaintext = generateIcon({
  name: 'Plaintext',
  viewBox: '0 0 24 24',
  path: (
    <g
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
    >
      <path d="M21.5 23.5h-19V.5h13l6 6z" />
      <path d="M15.5.5v6h6M7.5 7.5H12M7.5 10.5h9M7.5 13.5h3M7.5 16.5h3M7.5 19.5h3" />
      <g>
        <path d="M12.5 14.5v-1h4v1M14.5 13.5v6M13 19.5h3" />
      </g>
    </g>
  ),
});
