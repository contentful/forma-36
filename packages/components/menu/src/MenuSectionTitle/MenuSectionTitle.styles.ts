import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getMenuSectionTitleStyles = () =>
  css({
    textAlign: 'left',
    padding: `${tokens.spacingXs} ${tokens.spacingM}`,
    lineHeight: tokens.lineHeightM,

    'hr + &': {
      marginTop: '-8px',
    },
  });
