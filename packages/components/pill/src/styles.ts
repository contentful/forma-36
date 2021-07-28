import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { PillVariants } from './types';
import type { CSSObject } from '@emotion/serialize';

const getCloseButtonStyle = (variant: PillVariants) => {
  const variantStyle = (variant: PillVariants): CSSObject => {
    switch (variant) {
      case 'active':
        return {
          borderLeft: `1px solid ${tokens.gray400}`,
          '&:hover, &:focus': {
            background: tokens.gray300,
            cursor: 'pointer',
          },
        };
      default:
        return {
          borderLeft: `1px solid ${tokens.gray400}`,
          '&:hover, &:focus': {
            background: tokens.gray300,
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

const getLabelStyle = () => {
  return css({
    color: tokens.gray700,
    lineHeight: tokens.lineHeightM,
    padding: tokens.spacingXs,
    fontSize: tokens.fontSizeM,
    flexGrow: 2,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  });
};

const icon = {
  fill: tokens.gray600,
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
          background: tokens.gray300,
        };
      case 'deleted':
        return {
          background: tokens.gray200,
          textDecoration: 'line-through',
          opacity: '0.5',
        };
      default:
        return {
          background: tokens.gray200,
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
    label: getLabelStyle(),
    icon: css(icon),
    dragIcon: css(dragIcon),
    pill: getPillStyle(variant),
  };
};
