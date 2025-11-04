import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';

interface GetStylesParams {
  hasGroups?: boolean;
}

export function getStyles({ hasGroups = false }: GetStylesParams) {
  return {
    container: css({
      width: '330px',
      height: '380px',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      backgroundColor: tokens.colorWhite,
      borderRadius: tokens.borderRadiusMedium,
      boxShadow: tokens.boxShadowDefault,
      padding: hasGroups
        ? `${tokens.spacingS} ${tokens.spacingXs} 0px`
        : `0px ${tokens.spacingXs} 0px`,
      border: 'none',
    }),

    groupThreads: css({
      flex: 1,
      overflowX: 'hidden',
      overflowY: 'auto',
      scrollbarWidth: 'none',

      '&:focus-visible': {
        outline: `2px solid ${tokens.blue600}`,
        outlineOffset: '2px',
      },
    }),
  };
}
