import { css, type ObjectInterpolation } from 'emotion';
import tokens from '@contentful/f36-tokens';
import type { NavListItemProps } from './NavListItem';

const activeStyle: ObjectInterpolation<undefined> = {
  backgroundColor: tokens.gray200,
  color: tokens.gray900,
  fontWeight: tokens.fontWeightMedium,
  '&:hover': {
    backgroundColor: tokens.gray200,
  },
};

const disabledStyle: ObjectInterpolation<undefined> = {
  opacity: 0.5,
  cursor: 'not-allowed',
  '&:hover': {
    backgroundColor: 'unset',
  },
};

export const getNavListItemStyles = ({
  isActive,
  isDisabled,
}: {
  isActive: NavListItemProps['isActive'];
  isDisabled: NavListItemProps['isDisabled'];
}) => {
  return {
    root: css(
      [
        {
          alignItems: 'center',
          gap: tokens.spacingXs,
          display: 'flex',
          background: 'none',
          border: 0,
          borderRadius: tokens.borderRadiusMedium,
          margin: 0,
          outline: 'none',
          fontSize: tokens.fontSizeM,
          lineHeight: tokens.lineHeightM,
          fontWeight: tokens.fontWeightNormal,
          position: 'relative',
          textAlign: 'left',
          // Magic number to get a height of 32px on the item
          padding: `6px ${tokens.spacingXs}`,
          wordBreak: 'break-word',
          whiteSpace: 'break-spaces',
          cursor: 'pointer',
          hyphens: 'auto',
          minWidth: '150px',
          textDecoration: 'none',
          color: tokens.gray700,

          '&:hover': {
            backgroundColor: tokens.gray100,
          },
          '&:focus': {
            boxShadow: `inset ${tokens.glowPrimary}`,
          },
          '&:focus:not(:focus-visible)': {
            boxShadow: 'unset',
          },
          '&:focus-visible': {
            boxShadow: `inset ${tokens.glowPrimary}`,
          },
          '&:active': {
            backgroundColor: tokens.gray200,
          },
          '&:disabled': disabledStyle,
        },
      ],
      isActive && activeStyle,
      isDisabled && disabledStyle,
    ),
  };
};
