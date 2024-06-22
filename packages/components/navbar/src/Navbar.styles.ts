import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { mqs } from './utils.styles';

export const getNavbarStyles = (maxWidth: string, variant: string) => ({
  container: css({
    justifyContent: 'center',
    backgroundColor: tokens.gray100,
    width: '100%',
  }),
  logo: css({
    height: '28px',
    width: '28px',
  }),
  navigation: css({
    width: '100%',
    maxWidth: variant === 'wide' ? '1524px' : maxWidth,
    padding: tokens.spacingXs,
    minHeight: tokens.spacingL,
    [mqs.medium]: {
      padding: `${tokens.spacingXs} 20px`,
    },
  }),
});
