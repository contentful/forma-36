import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getAssetCardStyles = () => {
  return {
    asset: css({
      height: '100%',
    }),
    contentBody: css({
      padding: 0,
    }),
    header: css({
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
      paddingBottom: `calc(1rem * (10 / ${tokens.fontBaseDefault}))`,
      paddingLeft: tokens.spacingM,
      paddingRight: tokens.spacingM,
      paddingTop: `calc(1rem * (10 / ${tokens.fontBaseDefault}))`,
    }),
    headerItem: css({
      marginLeft: `calc(1rem * (10 / ${tokens.fontBaseDefault}))`,
    }),
    headerWithActions: css({
      paddingBottom: 0,
      paddingRight: 0,
      paddingTop: 0,
    }),
    root: css({
      borderRadius: tokens.borderRadiusMedium,
      padding: 0,
      textAlign: 'center',
    }),
  };
};
