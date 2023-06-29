import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { mqs } from './utils.styles';

export const getNavbarStyles = (maxWidth: string) => ({
  containerTop: css({
    justifyContent: 'center',
    backgroundColor: '#0C141C',
  }),
  containerBottom: css({
    justifyContent: 'center',
    borderTop: `1px solid #21262D`,
    backgroundColor: '#161B22',
  }),
  containerTopContent: css({
    width: '100%',
    maxWidth: maxWidth,
    padding: `${tokens.spacingXs}`,
    minHeight: '2.5rem',
    [mqs.medium]: {
      padding: `${tokens.spacingXs} ${tokens.spacingM}`,
    },
  }),
  containerBottomContent: css({
    width: '100%',
    maxWidth: maxWidth,
    padding: 0,
    minHeight: '2.5rem',
    overflow: 'auto',
    [mqs.medium]: {
      padding: `0 ${tokens.spacing2Xs}`,
    },
  }),
});
