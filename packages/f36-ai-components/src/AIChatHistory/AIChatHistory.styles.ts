import tokens from '@contentful/f36-tokens';
import { hexToRGBA } from '@contentful/f36-utils';
import { css } from 'emotion';

interface GetStylesParams {
  maxHeight: string | number;
}

export function getStyles({ maxHeight }: GetStylesParams) {
  return {
    container: css({
      width: '330px',
      height: '380px',
      maxHeight: typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight,
      overflowY: 'auto',
      backgroundColor: tokens.colorWhite,
      borderRadius: '10px',
      boxShadow: `0px 6px 12px -2px rgba(25, 37, 50, 0.1),
                  0px 3px 7px -3px rgba(25, 37, 50, 0.1),
                  0px 0px 0px 1px rgba(25, 37, 50, 0.1)`,

      padding: '12px 8px',
      border: 'none',
    }),

    group: css({
      '&:not(:last-child)': {
        marginBottom: '12px',
      },
    }),

    groupHeader: css({
      gap: 0,
      marginBottom: '12px',
      padding: '3px',
      backgroundColor: tokens.gray100,
      borderRadius: '12px',
      border: `1px solid ${tokens.gray200}`,
      position: 'sticky',
      top: 0,
      zIndex: 1,
    }),

    groupTab: css({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '6px',
      padding: '6px 12px',
      borderRadius: '8px',
      backgroundColor: 'transparent',
      fontSize: '14px',
      fontWeight: 500,
      color: tokens.gray700,
      border: 'none',
      cursor: 'pointer',
      flex: 1,
      margin: '3px',
      transition: `all ${tokens.transitionDurationShort} ${tokens.transitionEasingDefault}`,

      '&:hover': {
        backgroundColor: hexToRGBA(tokens.gray900, 0.04),
      },

      '&[data-active="true"]': {
        backgroundColor: tokens.colorWhite,
        color: tokens.gray900,
        boxShadow: `0 2px 4px ${hexToRGBA(tokens.gray900, 0.08)}`,
      },
    }),

    groupIcon: css({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '14px',
      lineHeight: 1,
    }),

    groupLabel: css({
      fontSize: tokens.fontSizeS,
      fontWeight: tokens.fontWeightMedium,
      lineHeight: 1,
    }),

    groupThreads: css({
      // No additional styles needed, threads will handle their own styling
    }),

    thread: css({
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      padding: '12px 0',
      cursor: 'pointer',
      borderBottom: 'none',
      transition: `background-color ${tokens.transitionDurationShort} ${tokens.transitionEasingDefault}`,

      '&:hover': {
        backgroundColor: hexToRGBA(tokens.gray900, 0.02),
        borderRadius: '8px',
        margin: '0 -8px',
        padding: '12px 8px',
      },

      '&[data-active="true"]': {
        backgroundColor: hexToRGBA(tokens.blue600, 0.08),
        borderRadius: '8px',
        margin: '0 -8px',
        padding: '12px 8px',
      },

      '&:not(:last-child)': {
        marginBottom: '8px',
      },
    }),

    threadContent: css({
      flex: 1,
      minWidth: 0, // Allow text to truncate
    }),

    threadTitle: css({
      display: 'block',
      marginBottom: '4px',
      lineHeight: 1.3,
      fontSize: '14px',
      fontWeight: 500,
      color: tokens.gray900,
      // Truncate long titles
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    }),

    threadPreview: css({
      display: '-webkit-box',
      marginBottom: '4px',
      lineHeight: 1.3,
      fontSize: '12px',
      color: tokens.gray600,
      // Show 2 lines of preview text
      overflow: 'hidden',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      whiteSpace: 'normal',
    }),

    threadTime: css({
      display: 'block',
      lineHeight: 1.3,
      fontSize: '12px',
      color: tokens.gray500,
    }),

    threadStatus: css({
      display: 'flex',
      alignItems: 'center',
      flexShrink: 0,
      marginLeft: '8px',
    }),

    statusIcon: css({
      width: '16px',
      height: '16px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '12px',

      '&[data-status="visible"]': {
        backgroundColor: 'transparent',
        color: tokens.gray400,
      },

      '&[data-status="warning"]': {
        backgroundColor: 'transparent',
        color: tokens.orange600,
      },

      '&[data-status="success"]': {
        backgroundColor: 'transparent',
        color: tokens.green600,
      },
    }),

    loadingState: css({
      padding: `${tokens.spacingL} ${tokens.spacingM}`,
      minHeight: '120px',
    }),

    emptyState: css({
      padding: `${tokens.spacingL} ${tokens.spacingM}`,
      minHeight: '120px',
    }),
  };
}
