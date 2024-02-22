import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getWorkbenchContentStyles = (
  type: 'default' | 'text' | 'full',
) => {
  let innerContentMaxWidth = 'initial';

  switch (type) {
    case 'text':
      innerContentMaxWidth = tokens.contentWidthText;
      break;
    case 'full':
      innerContentMaxWidth = tokens.contentWidthFull;
      break;
    default:
      innerContentMaxWidth = tokens.contentWidthDefault;
      break;
  }

  return {
    workbenchContent: css({
      position: 'relative',
      padding: tokens.spacingL,
      overflowY: 'auto',
      overflowX: 'hidden',
      flexGrow: 1,
    }),
    innerContent: css({
      margin: '0 auto',
      maxWidth: innerContentMaxWidth,
    }),
  };
};
