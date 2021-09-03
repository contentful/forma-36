import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getWorkbenchHeaderStyles = () => ({
  workbenchHeader: css({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '70px',
    padding: `0 ${tokens.spacingL}`,
    borderBottom: `1px solid ${tokens.gray300}`,
    backgroundColor: tokens.gray100,
    zIndex: tokens.zIndexWorkbenchHeader,
    boxSizing: 'border-box',
  }),
  hasBackButton: css({
    paddingLeft: 0,
  }),
  description: css({
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    flex: 1,
  }),
  backButton: css({
    borderRight: `1px solid ${tokens.gray200}`,
    marginRight: tokens.spacingM,
    borderRadius: 0,
    height: '100%',
    '& svg': {
      fill: tokens.gray400,
    },
    // This overwrite is necessary because the transparent button hover and the workbench header have the same bg color
    '&:hover': {
      backgroundColor: tokens.gray200,
    },
  }),
});
