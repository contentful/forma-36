import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import type { ClassNames } from 'react-day-picker';

const cellSize = 40;

export const getStyles = (): ClassNames => {
  return {
    vhidden: css({
      boxSizing: 'border-box',
      padding: '0',
      margin: '0',
      background: 'transparent',
      border: '0',
      MozAppearance: 'none',
      WebkitAppearance: 'none',
      appearance: 'none',
      position: 'absolute',
      top: '0',
      width: '1px',
      height: '1px',
      overflow: 'hidden',
      clip: 'rect(1px, 1px, 1px, 1px)',
    }),
    button_reset: css({
      appearance: 'none',
      position: 'relative',
      margin: 0,
      padding: 0,
      border: 'none',
      outline: 'none',
      background: 'none',
    }),
    button: css({
      borderRadius: '50%',
      cursor: 'pointer',
      color: tokens.gray900,

      '&.rdp-day_disabled': {
        color: tokens.gray400,
        pointerEvents: 'none',
      },
      '&:focus, &:active': {
        boxShadow: tokens.glowPrimary,
      },

      '&:focus:not(:focus-visible)': {
        boxShadow: 'unset',
      },

      '&:hover': {
        backgroundColor: tokens.gray200,
      },

      '&.rdp-day_selected:not(.rdp-day_disabled)': {
        backgroundColor: tokens.blue600,
        color: tokens.colorWhite,
        fontWeight: tokens.fontWeightDemiBold,
      },
    }),

    months: css({
      display: 'flex',
    }),
    month: css({
      width: '100%',
      margin: '0 1em',
      '&:first-child': {
        marginLeft: 0,
      },
      '&:last-child': {
        marginRight: 0,
      },
    }),
    table: css({
      width: '100%',
      margin: 0,
      borderCollapse: 'collapse',
    }),
    caption: css({
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 0,
      textAlign: 'left',

      '.rdp-multiple_months &': {
        display: 'block',
        textAlign: 'center',
      },
    }),
    caption_dropdowns: css({
      position: 'relative',
      display: 'inline-flex',
    }),
    caption_label: css({
      position: 'relative',
      zIndex: 1,
      display: 'inline-flex',
      alignItems: 'center',
      margin: '0',
      padding: `0 ${tokens.spacingXs}`,
      height: '2rem',
      whiteSpace: 'nowrap',
      fontSize: tokens.fontSizeM,
      fontWeight: tokens.fontWeightMedium,
      borderRadius: tokens.borderRadiusMedium,

      '& + &': {
        marginLeft: '3px',
      },
    }),
    nav: css({
      whiteSpace: 'nowrap',

      '.rdp-multiple_months .rdp-caption_start &': {
        position: 'absolute',
        top: '50%',
        left: '0',
        transform: 'translateY(-50%)',
      },

      '.rdp-multiple_months .rdp-caption_end &': {
        position: 'absolute',
        top: '50%',
        right: '0',
        transform: 'translateY(-50%)',
      },
    }),

    nav_button: css({
      width: '2rem',
      height: '2rem',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    }),
    nav_button_previous: css({
      marginRight: '3px',
    }),
    dropdown_month: css({
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
    }),
    dropdown_year: css({
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
    }),
    dropdown: css({
      appearance: 'none',
      position: 'absolute',
      zIndex: 2,
      top: '0',
      bottom: '0',
      left: '0',
      width: '100%',
      margin: '0',
      padding: '0',
      cursor: 'pointer',
      opacity: '0',
      border: 'none',
      backgroundColor: 'transparent',
      fontFamily: 'inherit',
      fontSize: 'inherit',
      lineHeight: 'inherit',

      '&:focus:not([disabled]) + div, &:active:not([disabled]) + div': {
        boxShadow: tokens.glowPrimary,
      },

      '&:hover:not([disabled]) + div, &:hover:not([disabled]) + div': {
        backgroundColor: tokens.gray200,
      },
    }),

    dropdown_icon: css({
      marginLeft: '8px',
    }),

    head: css({
      border: 0,
    }),

    head_row: css({
      height: '100%',
    }),

    row: css({
      height: '100%',
    }),

    head_cell: css({
      verticalAlign: 'middle',
      fontSize: tokens.fontSizeS,
      fontWeight: tokens.fontWeightDemiBold,
      textAlign: 'center',
      height: '32px',
      color: tokens.gray600,
    }),

    tbody: css({
      border: 0,
    }),

    tfoot: css({
      margin: '0.5em',
    }),

    cell: css({
      padding: '2px',
      textAlign: 'center',
    }),
    day: css({
      display: 'flex',
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
      width: `${cellSize / 16}rem`,
      height: `${cellSize / 16}rem`,
      borderRadius: '50%',
      margin: 'auto',

      '&.rdp-day_today:not(.rdp-day_outside)': {
        fontWeight: tokens.fontWeightDemiBold,
      },
      '&.rdp-day_today:not(.rdp-day_outside):not(.rdp-day_selected):not(:hover)':
        {
          backgroundColor: tokens.blue100,
        },
    }),

    nav_icon: css({
      width: '0.625rem',
    }),
  };
};
