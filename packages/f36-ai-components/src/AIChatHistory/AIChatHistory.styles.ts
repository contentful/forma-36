import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';

interface GetStylesParams {
  hasGroups?: boolean;
}

export function getStyles({ hasGroups = false }: GetStylesParams) {
  return {
    container: css({
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      backgroundColor: tokens.colorWhite,
      paddingTop: hasGroups ? '1.25rem' : '0px',
      border: 'none',
    }),

    groupThreads: css({
      flex: 1,
      overflowX: 'hidden',
      overflowY: 'auto',
      scrollbarWidth: 'none',
      gap: 0,

      '&:focus-visible': {
        outline: `2px solid ${tokens.blue600}`,
        outlineOffset: '-2px',
      },
    }),
  };
}
