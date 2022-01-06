import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getStyles = (placement, placementOffset) => ({
  manager: css({
    left: 0,
    margin: '0 auto',
    maxWidth: '560px',
    position: 'fixed',
    pointerEvents: 'none',
    right: 0,
    [placement]: placementOffset,
    zIndex: tokens.zIndexNotification,
  }),
  container: css({
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    maxWidth: '560px',
    minWidth: '360px',
    '& > div': {
      marginBottom: placement === 'top' ? 0 : tokens.spacingS,
      marginTop: placement === 'top' ? tokens.spacingS : 0,
    },
  }),
});
