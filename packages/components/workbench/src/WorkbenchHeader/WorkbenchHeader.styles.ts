import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getWorkbenchHeaderStyles = () => ({
  workbenchHeader: css([
    {
      display: 'flex',
      alignItems: 'center',
      flexShrink: 0,
      width: '100%',
      height: '56px',
      padding: `${tokens.spacingM} ${tokens.spacingXs}`,
      borderBottom: `1px solid ${tokens.gray300}`,
      backgroundColor: tokens.colorWhite,
      zIndex: tokens.zIndexWorkbenchHeader,
      boxSizing: 'border-box',
    },
  ]),
  flexGrow: css({
    flexGrow: 1,
  }),
  title: css({
    color: tokens.gray900,
  }),
  description: css({
    color: tokens.gray500,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    flexGrow: 1,
  }),
  separator: css({
    backgroundColor: tokens.gray200,
    height: '16px',
    width: '1px',
    display: 'inline',
    transform: 'rotate3d(0, 0, 1, 18deg)',
    margin: `0 ${tokens.spacing2Xs}`,
  }),
});
