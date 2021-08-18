import { css } from 'emotion';
import type { CSSObject } from '@emotion/serialize';
import tokens from '@contentful/f36-tokens';
import { NotificationVariant } from '../types';

const variantColors = {
  positive: tokens.green600,
  negative: tokens.red600,
  warning: tokens.orange400,
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
  });

const notificationStyle: CSSObject = {
  fontSize: tokens.fontSizeM,
  lineHeight: tokens.lineHeightM,
  width: '100%',
};

const titleStyle: CSSObject = {
  color: tokens.gray800,
  fontSize: tokens.fontSizeL,
  lineHeight: tokens.lineHeightL,
  marginBottom: tokens.spacingXs,
};

const contentStyle: CSSObject = {
  color: tokens.gray700,
  marginBottom: tokens.spacingXs,
  '&:last-child': {
    marginBottom: 0,
  },
};

const closeButtonStyle: CSSObject = {
  marginBottom: `-${tokens.spacingXs}`,
  marginRight: `-${tokens.spacingXs}`,
  marginTop: `-${tokens.spacingXs}`,
};

export const getStyles = ({ variant }: { variant: NotificationVariant }) => ({
  wrapper: getWrapperStyle({ variant }),
  icon: getIconStyle({ variant }),
  notification: css(notificationStyle),
  title: css(titleStyle),
  content: css(contentStyle),
  closeButton: css(closeButtonStyle),
});
