import tokens from '@contentful/f36-tokens';
import { Interpolation } from '@emotion/core';
import type { BadgeVariant } from './types';

const variantToStyles = ({
  variant,
}: {
  variant: BadgeVariant;
}): Interpolation => {
  switch (variant) {
    case 'positive':
      return {
        color: tokens.colorGreenBase,
        backgroundColor: tokens.colorGreenLightest,
      };
    case 'primary':
      return {
        color: tokens.colorBlueBase,
        backgroundColor: tokens.colorBlueLightest,
      };
    case 'negative':
      return {
        color: tokens.colorRedBase,
        backgroundColor: tokens.colorRedLightest,
      };
    case 'warning':
      return {
        color: tokens.colorOrangeDark,
        backgroundColor:
          '#ffefd5' /* temporary hardcoded value until palette improvements */,
      };
    case 'secondary':
      return {
        color: tokens.colorTextBase,
        backgroundColor: tokens.colorElementLight,
      };
    case 'muted':
      return {
        color: tokens.colorTextMid,
        backgroundColor: tokens.colorElementLightest,
      };
    case 'primary-filled':
      return {
        color: tokens.colorWhite,
        backgroundColor: tokens.colorPrimary,
      };
    default:
      return {};
  }
};

export const getBadgeStyles = ({
  variant,
}: {
  variant: BadgeVariant;
}): Interpolation => {
  return [
    {
      fontFamily: tokens.fontStackPrimary,
      fontWeight: tokens.fontWeightDemiBold,
      fontSize: `calc(1rem * (12 / ${tokens.fontBaseDefault}))`,
      lineHeight: '20px',
      maxHeight: '20px',
      textTransform: 'uppercase',
      letterSpacing:
        '0.06rem' /*move to tokens or update wide letter spacing token*/,
      padding: `0 ${tokens.spacingXs}`,
      borderRadius: `${tokens.borderRadiusSmall}`,
    },
    variantToStyles({ variant }),
  ];
};
