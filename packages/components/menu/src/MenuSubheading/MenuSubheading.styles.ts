import { css } from 'emotion';

export const getMenuSubheadingStyles = () =>
  css({
    textAlign: 'left',
    padding: '7px 16px',

    'hr + &': {
      marginTop: '-8px',
    },
  });
