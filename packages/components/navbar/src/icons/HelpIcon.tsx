import React from 'react';
import { generateIconComponent } from '@contentful/f36-icon';

export const HelpIcon = /*#__PURE__*/ generateIconComponent({
  name: 'HelpIcon',
  viewBox: '0 0 24 24',
  path: (
    <>
      <g clipPath="url(#HelpIcon_svg__a)">
        <path
          d="M12 2.25A9.75 9.75 0 1 0 21.75 12 9.769 9.769 0 0 0 12 2.25ZM12 18a1.125 1.125 0 1 1 0-2.25A1.125 1.125 0 0 1 12 18Zm.75-4.584v.084a.75.75 0 1 1-1.5 0v-.75A.75.75 0 0 1 12 12a1.875 1.875 0 1 0-1.875-1.875.75.75 0 1 1-1.5 0 3.375 3.375 0 1 1 4.125 3.29Z"
          fill="currentFill"
        />
      </g>
      <defs>
        <clipPath id="HelpIcon_svg__a">
          <path fill="currentFill" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </>
  ),
});
