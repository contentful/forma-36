import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getWorkbenchHeaderStyles = () => ({
  workbenchHeader: css({
    display: 'flex',
    // display: 'grid',
    // gridTemplateColumns: 'auto 1fr auto',

    alignItems: 'center',
    width: '100%',
    height: '70px',
    padding: `0 ${tokens.spacingL}`,
    borderBottom: `1px solid ${tokens.gray300}`,
    backgroundColor: tokens.gray100,
    zIndex: tokens.zIndexWorkbenchHeader,
    boxSizing: 'border-box',
  }),
  description: css({
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    flex: 1,
  }),
});
