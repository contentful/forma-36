import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export function getStyles() {
  return {
    selectedTime: css({
      background: tokens.gray100,
    }),
    dropdown: css({
      width: '100%',
    }),
    dropdownContainer: css({
      zIndex: 1001,
      width: '165px',
      '& > div': {
        width: '100%',
        button: {
          width: '100%',
          textAlign: 'center',
        },
      },
    }),
    inputWrapper: css({
      display: 'flex',
      marginBottom: tokens.spacingXs,
      'div:not(:last-child)': {
        marginRight: tokens.spacingXs,
      },
    }),
    daytimeSelect: css({
      flexBasis: '100%',
      '> select': {
        paddingRight: tokens.spacingXl,
      },
    }),
    timeZonePicker: css({
      marginLeft: tokens.spacingS,
    }),
  };
}
