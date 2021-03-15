import tokens from '@contentful/f36-tokens';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import type { BadgeVariant } from './types';

const variantToStyles = ({ variant }: { variant: BadgeVariant }) => {
  switch (variant) {
    case 'positive':
      return css`
        color: ${tokens.colorGreenBase};
        background-color: ${tokens.colorGreenLightest};
      `;
    case 'primary':
      return css`
        color: ${tokens.colorBlueBase};
        background-color: ${tokens.colorBlueLightest};
      `;
    case 'negative':
      return css`
        color: ${tokens.colorRedBase};
        background-color: ${tokens.colorRedLightest};
      `;
    case 'warning':
      return css`
        color: ${tokens.colorOrangeDark};
        background-color: #ffefd5; /* temporary hardcoded value until palette improvements */
      `;
    case 'secondary':
      return css`
        color: ${tokens.colorTextBase};
        background-color: ${tokens.colorElementLight};
      `;
    case 'muted':
      return css`
        color: ${tokens.colorTextMid};
        background-color: ${tokens.colorElementLightest};
      `;
    case 'primary-filled':
      return css`
        color: ${tokens.colorWhite};
        background-color: ${tokens.colorPrimary};
      `;
    default:
      return css``;
  }
};

export const Container = styled.div<{ variant: BadgeVariant }>`
  display: inline-block;
  font-family: ${tokens.fontStackPrimary};
  font-weight: ${tokens.fontWeightDemiBold};
  font-size: calc(1rem * (12 / ${tokens.fontBaseDefault}));
  line-height: 20px;
  max-height: 20px;
  text-transform: uppercase;
  letter-spacing: 0.06rem; /*move to tokens or update wide letter spacing token*/
  padding: 0 ${tokens.spacingXs};
  border-radius: ${tokens.borderRadiusSmall};

  ${variantToStyles}
`;
