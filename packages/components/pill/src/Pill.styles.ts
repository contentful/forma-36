import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';
import { PillVariants } from './types';

const getCloseButtonStyle = () => {
  return css({
    borderLeft: `1px solid ${tokens.gray400}`,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    padding: tokens.spacingXs,
    minHeight: 'auto',
    transition: `background ${tokens.transitionDurationShort} ${tokens.transitionEasingDefault},
    opacity ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,
    '&:focus': {
      boxShadow: tokens.glowMuted,
      borderLeftColor: tokens.gray300,
    },
    '&:hover, &:focus, &:active': {
      backgroundColor: tokens.gray300,
    },
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

export function getPillStyles(variant: PillVariants) {
  return {
    closeButton: getCloseButtonStyle(),
    label: getLabelStyle(),
    labelWrapper: css({
      display: 'inline-flex',
      maxWidth: '100%',
      minWidth: '0',
    }),
    icon: css({
      fill: tokens.gray600,
      verticalAlign: 'middle',
      outline: 'none',
    }),
    pill: getPillStyle(variant),
  };
}
