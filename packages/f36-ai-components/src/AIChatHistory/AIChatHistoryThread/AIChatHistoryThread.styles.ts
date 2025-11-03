import tokens from '@contentful/f36-tokens';
import { hexToRGBA } from '@contentful/f36-utils';
import { css } from 'emotion';

export const getStyles = () => {
  return {
    thread: css({
      padding: '12px',
      cursor: 'pointer',
      borderRadius: '8px',
      transition: `background-color ${tokens.transitionDurationShort} ${tokens.transitionEasingDefault}`,
      margin: '0 -8px 8px -8px',
      '&:hover': {
        backgroundColor: hexToRGBA(tokens.gray900, 0.02),
      },
    }),
    activeThread: css({
      backgroundColor: hexToRGBA(tokens.blue600, 0.08),
      '&:hover': {
        backgroundColor: hexToRGBA(tokens.blue600, 0.08),
      },
    }),
    threadContent: css({
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: '8px',
    }),
    threadInfo: css({
      flex: 1,
      minWidth: 0, // Allows text truncation
    }),
    threadTitle: css({
      margin: 0,
      marginBottom: '4px',
      fontSize: '14px',
      fontWeight: 500,
      color: tokens.gray900,
      lineHeight: 1.3,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    }),
    threadPreview: css({
      margin: 0,
      fontSize: '12px',
      color: tokens.gray600,
      lineHeight: 1.3,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    }),
    threadMeta: css({
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      marginTop: '4px',
    }),
    threadTime: css({
      fontSize: '12px',
      color: tokens.gray500,
    }),
    threadStatus: css({
      display: 'flex',
      alignItems: 'center',
      flexShrink: 0,
    }),
    statusIcon: css({
      display: 'flex',
      alignItems: 'center',
      fontSize: '14px',
    }),
    visibleIcon: css({
      color: tokens.gray400,
    }),
    warningIcon: css({
      color: tokens.orange600,
    }),
    successIcon: css({
      color: tokens.green600,
    }),
  };
};
