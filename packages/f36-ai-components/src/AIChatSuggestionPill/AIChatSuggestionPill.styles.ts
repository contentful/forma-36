import tokens from '@contentful/f36-tokens';
import { css } from '@emotion/css';

interface GetStylesParams {
  isActive: boolean;
  isTransitioning?: boolean;
}

export function getStyles({
  isActive,
  isTransitioning = false,
}: GetStylesParams) {
  return {
    suggestionPill: css({
      backgroundColor: isActive ? tokens.gray100 : tokens.colorWhite,
      border: `1px solid ${isActive ? tokens.gray300 : tokens.gray200}`,
      borderRadius: '99px',
      padding: `6px ${tokens.spacingS}`,
      cursor: 'pointer',
      transition: `background-color ${tokens.transitionDurationDefault} ease-out, border-color ${tokens.transitionDurationDefault} ease`,
      ':hover': {
        backgroundColor: isActive ? tokens.gray200 : tokens.gray100,
      },
      ':active': {
        backgroundColor: isActive ? tokens.gray200 : tokens.gray200,
      },
    }),
    suggestionIcon: css({
      color: isActive ? tokens.gray700 : tokens.gray500,
      transition: `opacity ${tokens.transitionDurationDefault} ease-in-out`,
      opacity: isTransitioning ? 0 : 1,
    }),
    suggestionText: css({
      color: isActive ? tokens.gray700 : 'inherit',
    }),
  };
}
