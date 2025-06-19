import React from 'react';
import {
  IconVariant,
  generateComponentWithVariants,
  generateIconComponent,
} from '@contentful/f36-icon-alpha';

const iconPath = (
  <path
    d="M11.3843 2.43475H8.9687L13.3739 13.5652H15.7896L11.3843 2.43475ZM4.40522 2.43475L0 13.5652H2.4633L3.36417 11.2278H7.97287L8.87374 13.5652H11.337L6.93183 2.43475H4.40522ZM4.16104 9.16067L5.66852 5.24901L7.176 9.16067H4.16104Z"
    fill="currentColor"
  />
);

export const ClaudeIcon = generateComponentWithVariants({
  variants: {
    [IconVariant.Default]: generateIconComponent({
      path: iconPath,
      viewBox: '0 0 16 16',
    }),
    [IconVariant.Active]: generateIconComponent({
      path: (
        <g>
          <rect
            width="16"
            height="16"
            opacity=".2"
            rx="1"
            fill="currentColor"
          />
          {iconPath}
        </g>
      ),
      viewBox: '0 0 16 16',
    }),
  },
});
