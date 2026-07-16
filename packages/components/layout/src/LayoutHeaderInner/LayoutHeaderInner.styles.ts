import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';
import { HEADER_HEIGHT } from './constants';

export const getLayoutHeaderInnerStyles = (withResponsiveHeader: boolean) => ({
  actions: css({
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: withResponsiveHeader ? 'max-content' : '25%',
    justifyContent: 'flex-end',
    gap: tokens.spacingS,
  }),
  wrapper: css({
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: withResponsiveHeader ? 'max-content' : '25%',
  }),
  filters: css({
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '50%',
  }),
  root: css(
    {
      background: tokens.colorWhite,
    },
    withResponsiveHeader &&
      css({
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingBottom: tokens.spacingS,
        paddingTop: tokens.spacingS,
      }),
    !withResponsiveHeader &&
      css({
        height: `${HEADER_HEIGHT}px`,
      }),
  ),
});
