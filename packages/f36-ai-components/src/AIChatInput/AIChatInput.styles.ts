import tokens from '@contentful/f36-tokens';
import { css } from '@emotion/css';

export const getStyles = () => {
  return {
    root: css({
      padding: `0 ${tokens.spacingXs} ${tokens.spacingXs}`,
    }),
    aiChatInputContainer: css({
      cursor: 'text',
      padding: tokens.spacing2Xs,
      boxShadow: tokens.boxShadowDefault,
      borderRadius: 10,
    }),
    editor: css({
      padding: tokens.spacingXs,
      outline: 'none',
      '& .is-empty.is-editor-empty:first-child::before': {
        content: 'attr(data-placeholder)',
        color: tokens.gray600,
        pointerEvents: 'none',
        float: 'left',
        height: '0',
      },
      '& .mention': {
        backgroundColor: tokens.gray200,
        padding: `2px 4px`,
        borderRadius: tokens.borderRadiusSmall,
      },
    }),
    stopIcon: css({
      border: '1.5px solid',
      width: '11px',
      height: '11px',
      borderRadius: 2,
      borderColor: tokens.gray900,
    }),
    inputActionsContainer: css({
      position: 'relative',
      '&::before': {
        content: "''",
        position: 'absolute',
        top: -5,
        left: 0,
        right: 0,
        height: '6px' /* adjust fade height */,
        background:
          'linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 1))',
        pointerEvents: 'none' /* allows clicks through the gradient */,
      },
    }),
    inputActions: css({
      marginTop: tokens.spacingM,
    }),
  };
};
