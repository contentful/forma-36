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
        padding: `0 ${tokens.spacing2Xs}`,
        lineHeight: tokens.lineHeightS,
        maxHeight: tokens.lineHeightS,
      };
    default:
      return {
        padding: `0 ${tokens.spacingXs}`,
        lineHeight: tokens.lineHeightM,
        maxHeight: tokens.lineHeightM,
      };
  }
};

export const getBadgeStyles = () => ({
  badge: ({ variant, size }: BadgeStylesProps) =>
    css({
      columnGap: tokens.spacing2Xs,
      alignItems: 'center',
      borderRadius: tokens.borderRadiusSmall,
      overflow: 'hidden',
      verticalAlign: 'middle',
      ...variantToStyles({ variant }),
      ...sizeToStyles({ size }),
    }),
  badgeIcon: css({
    flexShrink: 0,
  }),
  badgeText: css({
    color: 'currentcolor',
    lineHeight: 'inherit',
    textTransform: 'lowercase',
    '::first-letter': {
      textTransform: 'uppercase',
    },
  }),
});
