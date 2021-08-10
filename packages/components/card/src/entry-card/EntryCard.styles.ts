import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const styles = {
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
    paddingBottom: `calc(1rem * (10 / ${tokens.fontBaseDefault}))`,
    paddingLeft: tokens.spacingM,
    paddingRight: `calc(1rem * (10 / ${tokens.fontBaseDefault}))`,
  }),
  thumbnail: css({
    height: `calc(1rem * (40 / ${tokens.fontBaseDefault}))`,
    width: `calc(1rem * (40 / ${tokens.fontBaseDefault}))`,
  }),
};
