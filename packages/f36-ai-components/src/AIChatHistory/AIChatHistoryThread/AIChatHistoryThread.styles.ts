import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';

export const getStyles = () => {
  return {
    thread: css({
      height: '54px',
      padding: `${tokens.spacingXs} ${tokens.spacingXs} ${tokens.spacingXs} ${tokens.spacingS}`,
      cursor: 'pointer',
      borderRadius: tokens.borderRadiusSmall,
      transition: `background-color ${tokens.transitionDurationShort} ${tokens.transitionEasingDefault}`,
      '&:hover': {
        backgroundColor: tokens.gray100,
      },
      '&:first-child': {
        marginTop: tokens.spacingXs,
      },
      '&:focus-visible': {
        outline: `2px solid ${tokens.blue600}`,
        outlineOffset: '-2px',
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
      minWidth: 0,
    }),
    threadTitle: css({
      margin: '2px 0px 1px',
      fontSize: tokens.fontSizeM,
      color: tokens.gray700,
      lineHeight: tokens.lineHeightCondensed,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    }),
    threadMeta: css({
      display: 'flex',
      alignItems: 'center',
      gap: tokens.spacing2Xs,
      marginTop: '0',
    }),
    threadTime: css({
      fontSize: tokens.fontSizeS,
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
    warningStatusIcon: css({
      backgroundColor: tokens.orange200,
      fill: tokens.orange600,
    }),
  };
};
