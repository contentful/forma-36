import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';

/**
 * The transparent ToggleButton from Figma: no background or border, gray100
 * on hover and blue100 while the popover is open. The open state is shown on
 * the trigger only, not on the row around it.
 *
 * TODO: replace these overrides with `variant="transparent"` on ToggleButton
 * once https://github.com/contentful/forma-36/pull/3753 is merged.
 */
export const getStyles = () => ({
  root: css({
    flexShrink: 0,
    background: 'none',
    borderColor: 'transparent',
    boxShadow: 'none',
    '&:not(:disabled):hover': {
      background: tokens.gray100,
    },
    '&[data-state="on"], &[data-state="on"]:hover, &:not(:disabled):active, &:not(:disabled):active:hover':
      {
        background: tokens.blue100,
        borderColor: 'transparent',
      },
    '&:disabled:active, &:disabled:active:hover': {
      background: 'none',
      borderColor: 'transparent',
    },
    // Forced colors drop the background, and the border is transparent, so
    // the open state needs an outline there
    '@media (forced-colors: active)': {
      '&[data-state="on"]': {
        outline: '1px solid Highlight',
        outlineOffset: '-1px',
      },
    },
  }),
});
