import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { mqs } from './utils.styles';

export const getNavbarStyles = (maxWidth: string, variant: string) => ({
  containerTop: css({
    justifyContent: 'center',
    backgroundColor: tokens.gray100,
  }),
  containerBottom: css({
    justifyContent: 'center',
    backgroundColor: tokens.gray100,
  }),
  containerTopContent: css({
    width: '100%',
    maxWidth: variant === 'wide' ? '1524px' : maxWidth,
    padding: tokens.spacingXs,
    minHeight: tokens.spacingL,
    [mqs.medium]: {
      padding: `${tokens.spacingXs} 20px`,
    },
  }),
  containerBottomContent: css({
    width: '100%',
    maxWidth: variant === 'wide' ? '1524px' : maxWidth,
    padding: 0,
    paddingTop: tokens.spacing2Xs,
    minHeight: '2.5rem',
    overflow: 'auto',
    [mqs.medium]: {
      padding: `${tokens.spacing2Xs} ${tokens.spacingXs}`,
    },
  }),
});
