import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { PillVariants } from './types';
import type { CSSObject } from '@emotion/serialize';

const getCloseButtonStyle = (variant: PillVariants) => {
  const variantStyle = (variant: PillVariants): CSSObject => {
    switch (variant) {
      case 'active':
        return {
          borderLeft: `1px solid ${tokens.colorTextLightest}`,
          '&:hover, &:focus': {
            background: tokens.colorElementDarkest,
            cursor: 'pointer',
          },
        };
      default:
        return {
          borderLeft: `1px solid ${tokens.colorElementDarkest}`,
          '&:hover, &:focus': {
            background: tokens.colorElementMid,
            cursor: 'pointer',
          },
        };
    }
  };

  return css({
    border: 'none',
    borderTopRightRadius: tokens.borderRadiusSmall,
    borderBottomRightRadius: tokens.borderRadiusSmall,
    padding: tokens.spacingXs,
    background: 'transparent',
    transition: `background ${tokens.transitionDurationShort} ${tokens.transitionEasingDefault}`,
    ...variantStyle(variant),
  });
};

const getLabelStyle = (variant: PillVariants) => {
  const variantStyle = (variant: PillVariants): CSSObject => {
    switch (variant) {
      case 'active':
        return {
          color: tokens.colorTextDark,
        };
      default:
        return {
          color: tokens.colorTextBase,
        };
    }
  };

  return css({
    lineHeight: tokens.lineHeightM,
    padding: tokens.spacingXs,
    fontSize: tokens.fontSizeM,
    flexGrow: 2,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    ...variantStyle(variant),
  });
};

const icon = {
  fill: tokens.colorTextLightest,
  verticalAlign: 'middle',
};

const dragIcon = {
  padding: tokens.spacingXs,
  paddingRight: 0,
};

const getPillStyle = (variant: PillVariants) => {
  const variantStyle = (variant: PillVariants) => {
    switch (variant) {
      case 'active':
        return {
          background: tokens.colorElementDark,
        };
      case 'deleted':
        return {
          background: tokens.colorElementLight,
          textDecoration: 'line-through',
          opacity: '0.5',
        };
      default:
        return {
          background: tokens.colorElementLight,
        };
    }
  };

  return css({
    display: 'inline-flex',
    fontFamily: tokens.fontStackPrimary,
    alignItems: 'center',
    borderRadius: tokens.borderRadiusSmall,
    border: 'none',
    padding: 0,
    maxWidth: '100%',
    ...variantStyle(variant),
  });
};

export default (variant: PillVariants) => {
  return {
    closeButton: getCloseButtonStyle(variant),
    label: getLabelStyle(variant),
    icon: css(icon),
    dragIcon: css(dragIcon),
    pill: getPillStyle(variant),
  };
};
