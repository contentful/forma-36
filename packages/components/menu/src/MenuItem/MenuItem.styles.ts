import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import type { MenuItemProps } from './MenuItem';

export const getMenuItemStyles = ({
  isActive,
}: {
  isActive: MenuItemProps['isActive'];
}) => {
  return {
    root: css({
      display: 'flex',
      width: `calc(100% - 2 * ${tokens.spacing2Xs})`,
      background: isActive ? tokens.gray200 : 'none',
      border: 0,
      borderRadius: tokens.borderRadiusMedium,
      margin: `0 ${tokens.spacing2Xs}`,
      outline: 'none',
      fontSize: tokens.fontSizeM,
      lineHeight: tokens.lineHeightM,
      fontWeight: isActive ? tokens.fontWeightMedium : tokens.fontWeightNormal,
      position: 'relative',
      textAlign: 'left',
      padding: `${tokens.spacing2Xs} ${tokens.spacingXs}`,
      wordBreak: 'break-word',
      whiteSpace: 'break-spaces',
      cursor: 'pointer',
      hyphens: 'auto',
      minWidth: '150px',
      textDecoration: 'none',
      color: tokens.gray900,

      '[role="menuitem"] + &': {
        marginTop: '2px',
      },

      '&:hover': {
        backgroundColor: tokens.gray100,
      },
      '&:focus': {
        boxShadow: `inset ${tokens.glowPrimary}`,
        // just to make boxShadow with rounded corners
        borderRadius: tokens.borderRadiusSmall,
      },
      '&:focus:not(:focus-visible)': {
        boxShadow: 'unset',
        borderRadius: 'unset',
      },
      '&:focus-visible': {
        boxShadow: `inset ${tokens.glowPrimary}`,
        borderRadius: tokens.borderRadiusSmall,
      },
      '&:active': {
        backgroundColor: tokens.gray200,
      },
      '&:disabled': {
        opacity: 0.5,
        cursor: 'auto',
      },
    }),
  };
};
