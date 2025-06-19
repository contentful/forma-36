import React from 'react';
import {
  IconVariant,
  generateComponentWithVariants,
  generateIconComponent,
} from '@contentful/f36-icon-alpha';

const iconPath = (
  <>
    <path
      fill="currentColor"
      d="M14.86 2.988a2.98 2.98 0 0 0-1.703 1.703.212.212 0 0 1-.399 0 2.98 2.98 0 0 0-1.707-1.703.212.212 0 0 1 0-.399A3 3 0 0 0 12.758.882a.212.212 0 0 1 .4 0A3 3 0 0 0 14.86 2.59a.212.212 0 0 1 0 .4"
    >
      <animateTransform
        attributeName="transform"
        calcMode="spline"
        dur="3s"
        keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
        keyTimes="0;0.25;0.5;0.75;1"
        repeatCount="indefinite"
        type="translate"
        values="0,0; 0,10; -10,10; -10,0; 0,0"
      />
      <animate
        attributeName="opacity"
        calcMode="spline"
        dur="3s"
        keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
        keyTimes="0;0.25;0.5;0.75;1"
        repeatCount="indefinite"
        values="1;0.5;1;0.5;1"
      />
    </path>
    <path
      fill="currentColor"
      d="M13.113 9.669a9.15 9.15 0 0 0-5.222 5.222.654.654 0 0 1-1.227 0 9.17 9.17 0 0 0-5.23-5.222.654.654 0 0 1 0-1.227 9.18 9.18 0 0 0 5.23-5.23.654.654 0 0 1 1.227 0 9.16 9.16 0 0 0 5.222 5.23.654.654 0 0 1 0 1.227"
    >
      <animateTransform
        attributeName="transform"
        calcMode="spline"
        dur="3s"
        keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
        keyTimes="0;0.25;0.5;0.75;1"
        repeatCount="indefinite"
        type="rotate"
        values="0 8 8; 90 8 8; 180 8 8; 270 8 8; 360 8 8"
      />
      <animate
        attributeName="opacity"
        calcMode="spline"
        dur="3s"
        keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
        keyTimes="0;0.25;0.5;0.75;1"
        repeatCount="indefinite"
        values="1;0.5;1;0.5;1"
      />
    </path>
  </>
);

export const AiLoadingIcon = generateComponentWithVariants({
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
