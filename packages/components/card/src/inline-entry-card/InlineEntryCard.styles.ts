import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const styles = {
  actions: css({
    display: 'flex',
    padding: 0,
    marginLeft: `calc(1rem * (6 / ${tokens.fontBaseDefault}))`,
    minHeight: 'auto',
  }),
  root: css({
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    display: 'inline-flex',
    flexDirection: 'row-reverse',
    paddingBottom: 0,
    paddingTop: 0,
    paddingLeft: `calc(1rem * (12 / ${tokens.fontBaseDefault}))`,
    paddingRight: `calc(1rem * (4 / ${tokens.fontBaseDefault}))`,
  }),
};
