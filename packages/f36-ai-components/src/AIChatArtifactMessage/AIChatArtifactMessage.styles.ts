import tokens from '@contentful/f36-tokens';
import { css } from '@emotion/css';

export const getStyles = () => {
  return {
    container: css({
      border: `1px solid ${tokens.gray200}`,
      borderRadius: tokens.borderRadiusMedium,
      backgroundColor: tokens.colorWhite,
    }),
    header: css({
      backgroundColor: tokens.gray100,
      padding: '7px',
      display: 'flex',
      alignItems: 'center',
      gap: tokens.spacing2Xs,
    }),
    icon: css({
      display: 'flex',
      alignItems: 'center',
      color: tokens.gray500,
      lineHeight: tokens.lineHeightS,
    }),
    title: css({
      margin: 0,
      fontSize: tokens.fontSizeS,
      color: tokens.gray500,
      lineHeight: tokens.lineHeightS,
    }),
    content: css({
      borderTop: `1px solid ${tokens.gray200}`,
      padding: tokens.spacingS,
    }),
  };
};
