import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { ClassNames } from 'react-day-picker';

export const getStyles = (): ClassNames => {
  return {
    root: css({
      color: tokens.colorBlack,
    }),
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
      cursor: 'default',
      border: 'none',
    }),
    day_selected: css({
      backgroundColor: tokens.blue600,
      color: tokens.colorWhite,
      fontWeight: tokens.fontWeightDemiBold,
    }),
    day: css({
      width: '40px',
      maxWidth: '40px',
      height: '40px',
    }),
    caption: css({
      padding: 0,
      textAlign: 'left',
    }),
    caption_dropdowns: css({
      position: 'relative',
      display: 'inline-flex',
    }),
    nav_button: css({
      width: '32px',
      height: '32px',
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
      cursor: 'inherit',
      opacity: '0',
      border: 'none',
      backgroundColor: 'transparent',
      fontFamily: 'inherit',
      fontSize: 'inherit',
      lineHeight: 'inherit',
    }),
    caption_label: css({
      position: 'relative',
      zIndex: 1,
      display: 'inline-flex',
      alignItems: 'center',
      margin: '0',
      padding: '0 0.25em',
      whiteSpace: 'nowrap',
      color: 'currentColor',
      border: '2px solid transparent',
      fontFamily: 'inherit',
      fontSize: '140%',
      fontWeight: 'bold',
    }),
  };
};
