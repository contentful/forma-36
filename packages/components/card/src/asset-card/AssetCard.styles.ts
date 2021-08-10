import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const styles = {
  contentBody: css({
    padding: 0,
  }),
  header: css({
    alignItems: 'center',
    // @todo: grey / 200
    borderBottomColor: tokens.colorElementMid,
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    borderTopLeftRadius: tokens.borderRadiusMedium,
    borderTopRightRadius: tokens.borderRadiusMedium,
    boxSizing: 'border-box',
    // @todo: grey / 600
    color: tokens.colorTextLight,
    fontSize: tokens.fontSizeM,
    fontWeight: tokens.fontWeightNormal,
    gridColumn: 'content',
    gridRow: 'header',
    lineHeight: tokens.lineHeightM,
    // marginBottom: tokens.spacingM,
    // marginRight: `calc(1rem * (10 / ${tokens.fontBaseDefault}))`,
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
