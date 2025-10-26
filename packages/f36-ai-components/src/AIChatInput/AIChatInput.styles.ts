import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';

export const getStyles = () => {
  return {
    aiChatInputCard: css({
      padding: tokens.spacing2Xs,
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
    }),
    stopIcon: css({
      border: '1.5px solid',
      width: '11px',
      height: '11px',
      borderRadius: 2,
      borderColor: tokens.gray900,
    }),
    inputActions: css({
      marginTop: tokens.spacing2Xs,
    }),
  };
};
