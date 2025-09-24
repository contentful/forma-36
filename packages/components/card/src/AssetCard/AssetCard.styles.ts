import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';

export const getAssetCardStyles = () => {
  return {
    root: ({ size }) =>
      css({
        display: 'inline-flex',
        width: 'auto',
        borderRadius: tokens.borderRadiusMedium,
        minWidth: `calc(1rem * (120 / ${tokens.fontBaseDefault}))`,
        height:
          size === 'small'
            ? `calc(1rem * (188 / ${tokens.fontBaseDefault}))`
            : `calc(1rem * (300 / ${tokens.fontBaseDefault}))`,
        padding: 0,
        textAlign: 'center',
      }),
    asset: css({
      height: '100%',
    }),
    skeleton: css({
      border: `1px solid ${tokens.gray300}`,
      borderRadius: tokens.borderRadiusMedium,
      padding: tokens.spacingM,
    }),
  };
};
