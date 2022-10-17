import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';
import type { BadgeVariant, BadgeSize, BadgeStylesProps } from '../types';
import type { CSSObject } from '@emotion/serialize';

const variantToStyles = ({ variant }: { variant: BadgeVariant }): CSSObject => {
  switch (variant) {
    case 'positive':
      return {
        color: tokens.green600,
        backgroundColor: tokens.green200,
      };
    case 'primary':
      return {
        color: tokens.blue600,
        backgroundColor: tokens.blue200,
      };
    case 'negative':
      return {
        color: tokens.red600,
        backgroundColor: tokens.red200,
      };
    case 'warning':
      return {
        color: tokens.orange600,
        backgroundColor: tokens.orange200,
      };
    case 'secondary':
      return {
        color: tokens.gray700,
        backgroundColor: tokens.gray200,
      };
    case 'primary-filled':
      return {
        color: tokens.colorWhite,
        backgroundColor: tokens.blue600,
      };
    case 'featured':
      return {
        color: tokens.purple600,
        backgroundColor: tokens.purple200,
      };
    default:
      return {};
  }
};

const sizeToStyles = ({ size }: { size: BadgeSize }): CSSObject => {
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

export const getBadgeStyles = () => ({
  badge: ({ variant, size }: BadgeStylesProps) =>
    css({
      columnGap: tokens.spacing2Xs,
      alignItems: 'center',
      fontFamily: tokens.fontStackPrimary,
      fontWeight: tokens.fontWeightDemiBold,
      textTransform: 'uppercase',
      letterSpacing:
        '0.06rem' /*move to tokens or update wide letter spacing token*/,
      borderRadius: `${tokens.borderRadiusSmall}`,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      verticalAlign: 'middle',
      ...variantToStyles({ variant }),
      ...sizeToStyles({ size }),
    }),
});
