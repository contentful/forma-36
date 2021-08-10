import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getBaseCardStyles = () => {
  return {
    contentBody: css({
      gridColumn: 'content',
      gridRow: 'content',
      paddingBottom: tokens.spacingM,
      paddingLeft: tokens.spacingM,
      paddingRight: tokens.spacingM,
    }),
    dragHandle: css({
      borderBottomLeftRadius: tokens.borderRadiusMedium,
      borderTopLeftRadius: tokens.borderRadiusMedium,
      height: '100%',
      gridColumn: 'dragHandle',
      gridRow: 'header / span 2',
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
      backgroundColor: tokens.colorWhite,
      borderColor: tokens.gray300,
      borderRadius: tokens.borderRadiusMedium,
      borderStyle: 'solid',
      borderWidth: 1,
      color: tokens.gray900,
      display: 'grid',
      gridTemplateColumns: '[dragHandle] auto [content] 1fr',
      gridTemplateRows: '[header] auto [content] 1fr',
      fontSize: tokens.fontSizeM,
      fontWeight: tokens.fontWeightNormal,
      lineHeight: tokens.lineHeightM,
      position: 'relative',
      textDecoration: 'none',
      transition: `border-color ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault},
    box-shadow ${tokens.transitionDurationShort} ${tokens.transitionEasingDefault}`,
    }),
  };
};
