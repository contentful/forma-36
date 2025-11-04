import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';

export const getStyles = () => {
  return {
    thread: css({
      height: '54px',
      padding: `8px 8px ${tokens.spacingXs} 12px`,
      cursor: 'pointer',
      borderRadius: tokens.borderRadiusSmall,
      transition: `background-color ${tokens.transitionDurationShort} ${tokens.transitionEasingDefault}`,
      '&:hover': {
        backgroundColor: tokens.gray100,
      },
      '&:first-child': {
        marginTop: '8px',
      },
    }),
    threadContent: css({
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: tokens.spacingXs,
    }),
    threadInfo: css({
      flex: 1,
      minWidth: 0, // Allows text truncation
    }),
    threadTitle: css({
      margin: 0,
      marginTop: '2px',
      marginBottom: '1px',
      fontSize: tokens.fontSizeM,
      color: tokens.gray700,
      lineHeight: tokens.lineHeightCondensed,
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
      marginTop: '0',
    }),
    threadTime: css({
      fontSize: '12px',
      color: tokens.gray500,
    }),
    threadStatus: css({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexShrink: 0,
      lineHeight: tokens.lineHeightS,
    }),
    statusIcon: css({
      width: '20px',
      height: '20px',
      padding: '3px',
      borderRadius: tokens.borderRadiusSmall,
      backgroundColor: tokens.blue200,
      fill: tokens.blue600,
    }),
    visibleIcon: css({
      color: tokens.gray400,
    }),
    warningIcon: css({
      backgroundColor: tokens.orange200,
      fill: tokens.orange600,
    }),
  };
};
