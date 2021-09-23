import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getEntryCardStyles = () => {
  return {
    actionsButton: css({
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      borderTopLeftRadius: 0,
      borderTopRightRadius: tokens.borderRadiusMedium,
    }),
    content: css({
      gridColumn: 'content',
      marginTop: tokens.spacingM,
    }),
    root: css({
      padding: 0,
    }),
    header: css({
      borderBottomWidth: 1,
      borderBottomColor: tokens.gray200,
      borderBottomStyle: 'solid',
      minHeight: 'auto',
      paddingBottom: tokens.spacingXs,
      paddingLeft: tokens.spacingM,
      paddingRight: tokens.spacingXs,
    }),
    thumbnail: css({
      height: `calc(1rem * (40 / ${tokens.fontBaseDefault}))`,
      width: `calc(1rem * (40 / ${tokens.fontBaseDefault}))`,
    }),
  };
};
