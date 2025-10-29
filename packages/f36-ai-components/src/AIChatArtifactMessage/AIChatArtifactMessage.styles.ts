import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';

export const getStyles = () => {
  return {
    container: css({
      border: `1px solid ${tokens.gray300}`,
      borderRadius: tokens.borderRadiusMedium,
      backgroundColor: tokens.colorWhite,
      overflow: 'hidden',
    }),
    header: css({
      backgroundColor: tokens.gray100,
      padding: `${tokens.spacingXs} ${tokens.spacingS}`,
      borderBottom: `1px solid ${tokens.gray300}`,
      display: 'flex',
      alignItems: 'center',
      gap: tokens.spacingXs,
    }),
    icon: css({
      display: 'flex',
      alignItems: 'center',
      color: tokens.gray600,
    }),
    title: css({
      fontSize: tokens.fontSizeS,
      fontWeight: tokens.fontWeightMedium,
      color: tokens.gray700,
      margin: 0,
    }),
    content: css({
      padding: tokens.spacingS,
    }),
  };
};
