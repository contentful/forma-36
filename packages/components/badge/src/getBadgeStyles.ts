import tokens from '@contentful/f36-tokens';
import type { BadgeVariant, BadgeSize } from './types';

const variantToStyles = ({ variant }: { variant: BadgeVariant }) => {
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

const sizeToStyles = ({ size }: { size: BadgeSize }) => {
  switch (size) {
    case 'small':
      return {
        padding: `3px ${tokens.spacing2Xs}`,
        fontSize: '0.625rem',
        lineHeight: '0.625rem',
        maxHeight: '16px',
      };
    default:
      return {
        padding: `0 ${tokens.spacingXs}`,
        fontSize: `calc(1rem * (12 / ${tokens.fontBaseDefault}))`,
        lineHeight: '20px',
        maxHeight: '20px',
      };
  }
};

export const getBadgeStyles = ({
  variant,
  size,
}: {
  variant: BadgeVariant;
  size: BadgeSize;
}) => {
  return [
    {
      fontFamily: tokens.fontStackPrimary,
      fontWeight: tokens.fontWeightDemiBold,

      textTransform: 'uppercase',
      letterSpacing:
        '0.06rem' /*move to tokens or update wide letter spacing token*/,
      borderRadius: `${tokens.borderRadiusSmall}`,
    },
    variantToStyles({ variant }),
    sizeToStyles({ size }),
  ];
};
