import React from 'react';
import { generateIconComponent } from '@contentful/f36-icon';

export const SearchIcon = /*#__PURE__*/ generateIconComponent({
  name: 'SearchIcon',
  viewBox: '0 0 24 24',
  path: (
    <>
      <g clipPath="url(#SearchIcon_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 11.125a5.125 5.125 0 1 1 10.25 0 5.125 5.125 0 0 1-10.25 0ZM11.125 4a7.125 7.125 0 1 0 4.282 12.82l2.886 2.887a1 1 0 0 0 1.414-1.414l-2.886-2.887A7.125 7.125 0 0 0 11.125 4Z"
          fill="currentFill"
        />
      </g>
      <defs>
        <clipPath id="SearchIcon_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </>
  ),
});
