import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';
import { AIChatMessageRole } from './AIChatMessage';

interface GetStylesParams {
  authorRole: AIChatMessageRole;
}

export function getStyles({ authorRole }: GetStylesParams) {
  return {
    message: css({
      minWidth: 200,
      maxWidth: 300,
      margin: 8,
      alignItems: 'center',
      justifyContent: 'flex-end',
      ...(authorRole === 'user'
        ? {
            borderRadius: '14px 14px 4px 14px;',
            padding: '12px 16px',
            backgroundColor: tokens.gray200,
          }
        : {}),
    }),
  };
}
