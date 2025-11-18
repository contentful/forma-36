import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const TOPBAR_HEIGHT = '70px';
export const SCREEN_BREAKPOINT_LARGE = '1600px';

export const getGridStyles = (isFullScreen = false) => ({
  wrapper: css({
    height: '100vh',
    overflow: 'hidden',
    gridTemplateAreas: `
      "topbar topbar"
      "${isFullScreen ? 'content content' : 'sidebar content'}"
    `,
  }),
  wrapperColumns: css({
    gridTemplateColumns: '280px auto',
  }),
  contentColumns: css({
    display: 'grid',
    padding: `0 ${tokens.spacingL}`,
    gridTemplateColumns: '3fr 1fr',
  }),
  // this style will make the content centered withou breaking the layout in big screens
  contentColumnsBigScreens: css({
    [`@media screen and (min-width: ${SCREEN_BREAKPOINT_LARGE})`]: {
      gridTemplateColumns: '1fr 900px 240px 1fr',
    },
  }),
  // this style will "push" the content to the 2nd column in big screens
  columnStartTwo: css({
    [`@media screen and (min-width: ${SCREEN_BREAKPOINT_LARGE})`]: {
      gridColumnStart: 2,
    },
  }),
});
