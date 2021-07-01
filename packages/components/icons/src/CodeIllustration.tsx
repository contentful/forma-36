import React from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const CodeIllustration = generateIcon({
  name: 'CodeIllustration',
  viewBox: '0 0 24 24',
  path: (
    <g fill="none" stroke="#000">
      <path d="M21.7 23.5h-19V.5h13l6 6v17z" />
      <path d="M15.7.5v6h6" />
      <g strokeMiterlimit={4}>
        <path d="M10.776 9.095c-3.326 0 .475 4.274-3.326 5.225M10.776 19.544c-3.326 0 .475-4.274-3.326-5.225" />
        <g>
          <path d="M13.626 9.095c3.324 0-.475 4.274 3.324 5.225M13.626 19.544c3.324 0-.475-4.274 3.324-5.225" />
        </g>
      </g>
    </g>
  ),
});
