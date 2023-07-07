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
      padding: `${tokens.spacingM} ${tokens.spacingS}`,
      borderBottom: `1px solid ${tokens.gray200}`,
      backgroundColor: tokens.gray100,
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
    height: tokens.spacingXl,
    position: 'relative',
    width: tokens.spacingXs,

    '&::after': {
      backgroundColor: tokens.gray200,
      content: '""',
      display: 'block',
      height: '16px',
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: '1px',
      transform: 'translate3d(-50%, -50%, 0) rotate3d(0, 0, 1, 18deg)',
    },
  }),
  minWidthZero: css({
    minWidth: '0',
  }),
  icon: css({
    display: 'flex',
    flexShrink: 0,
  }),
});
