import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getWorkbenchStyles = () => ({
  workbench: css({
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: tokens.zIndexWorkbench,
    overflowX: 'hidden',
  }),
  contentWrapper: css({
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
  }),
});
