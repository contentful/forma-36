import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getMenuSectionTitleStyles = () =>
  css({
    color: tokens.gray500,
    textAlign: 'left',
    padding: `${tokens.spacingXs} ${tokens.spacingS} ${tokens.spacing2Xs}`,
    lineHeight: tokens.lineHeightM,
  });
