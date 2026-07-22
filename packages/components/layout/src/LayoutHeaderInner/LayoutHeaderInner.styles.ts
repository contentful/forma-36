import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';

export const getLayoutHeaderInnerStyles = () => ({
  actions: css({
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'max-content',
    justifyContent: 'flex-end',
    gap: tokens.spacingS,
  }),
  wrapper: css({
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'max-content',
  }),
  filters: css({
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '50%',
  }),
  root: css({
    background: tokens.colorWhite,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: tokens.spacingS,
    paddingTop: tokens.spacingM,
  }),
});
