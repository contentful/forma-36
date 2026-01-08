import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';

interface GetStylesParams {
  isActive: boolean;
}

export function getStyles({ isActive }: GetStylesParams) {
  return {
    suggestionPill: css({
      backgroundColor: isActive ? tokens.gray100 : tokens.colorWhite,
      border: `1px solid ${isActive ? tokens.gray300 : tokens.gray200}`,
      borderRadius: '99px',
      padding: `6px ${tokens.spacingS}`,
      cursor: 'pointer',
      ':hover': {
        backgroundColor: isActive ? tokens.gray200 : tokens.gray100,
      },
      ':active': {
        backgroundColor: isActive ? tokens.gray200 : tokens.gray200,
      },
    }),
    suggestionIcon: css({
      color: isActive ? tokens.gray700 : tokens.gray500,
    }),
    suggestionText: css({
      color: isActive ? tokens.gray700 : 'inherit',
    }),
  };
}
