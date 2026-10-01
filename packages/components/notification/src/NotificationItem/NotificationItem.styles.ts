import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';
import type { NotificationVariant } from '../types';

const variantColors = {
  positive: tokens.green600,
  negative: tokens.red600,
  warning: tokens.orange400,
  primary: tokens.blue600,
};

const getWrapperStyle = ({ variant }) =>
  css({
    background: tokens.colorWhite,
    borderRadius: tokens.borderRadiusMedium,
    boxShadow: tokens.boxShadowHeavy,
    boxSizing: 'border-box',
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
    padding: tokens.spacingM,
    width: '100%',
    '&:before': {
      backgroundColor: variantColors[variant],
      content: '""',
      height: '100%',
      left: 0,
      position: 'absolute',
      top: 0,
      width: '2px',
    },
  });

const getIconStyle = ({ variant }) =>
  css({
    fill: variantColors[variant],
    marginRight: tokens.spacingM,
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
  });

export const getStyles = ({ variant }: { variant: NotificationVariant }) => ({
  wrapper: getWrapperStyle({ variant }),
  icon: getIconStyle({ variant }),
  notification: css({
    fontSize: tokens.fontSizeM,
    lineHeight: tokens.lineHeightM,
    width: '100%',
  }),
  title: css({
    color: tokens.gray800,
    fontSize: tokens.fontSizeL,
    lineHeight: tokens.lineHeightL,
  }),
  content: css({
    color: tokens.gray700,
    wordBreak: 'break-word',
    hyphens: 'auto',
    '&:last-child': {
      marginBottom: 0,
    },
  }),
  closeButton: css({
    marginBottom: `-${tokens.spacingXs}`,
    marginRight: `-${tokens.spacingXs}`,
    marginTop: `-${tokens.spacingXs}`,
  }),
});
