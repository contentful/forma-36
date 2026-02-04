import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';

export const getHeaderStyles = () => {
  return {
    header: css({
      columnGap: tokens.spacingXs,
      rowGap: tokens.spacing2Xs,
      alignItems: 'center',
      borderBottomColor: tokens.gray200,
      borderBottomStyle: 'solid',
      borderBottomWidth: 1,
      borderTopLeftRadius: tokens.borderRadiusMedium,
      borderTopRightRadius: tokens.borderRadiusMedium,
      boxSizing: 'border-box',
      color: tokens.gray600,
      fontSize: tokens.fontSizeM,
      fontWeight: tokens.fontWeightNormal,
      gridColumn: 'content',
      gridRow: 'header',
      lineHeight: tokens.lineHeightM,
      paddingBottom: tokens.spacingXs,
      paddingLeft: tokens.spacingM,
      paddingRight: tokens.spacingXs,
      paddingTop: tokens.spacingXs,
      minHeight: '37px',
    }),
    headerWithActions: css({
      paddingBottom: tokens.spacing2Xs,
      paddingRight: tokens.spacingXs,
      paddingTop: tokens.spacing2Xs,
    }),
  };
};
