import { css } from 'emotion';
import type { ObjectInterpolation } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getAssetCardStyles = () => {
  return {
    asset: css({
      height: '100%',
    }),
    root: ({ size }) => {
      const styles: ObjectInterpolation<undefined> = {
        borderRadius: tokens.borderRadiusMedium,
        minWidth: `calc(1rem * (120 / ${tokens.fontBaseDefault}))`,
        maxWidth:
          size === 'small'
            ? `calc(1rem * (240 / ${tokens.fontBaseDefault}))`
            : `calc(1rem * (340 / ${tokens.fontBaseDefault}))`,
        height:
          size === 'small'
            ? `calc(1rem * (188 / ${tokens.fontBaseDefault}))`
            : `calc(1rem * (300 / ${tokens.fontBaseDefault}))`,
        padding: 0,
        textAlign: 'center',
      };

      return css(styles);
    },
    skeleton: css({
      border: `1px solid ${tokens.gray300}`,
      borderRadius: tokens.borderRadiusMedium,
      padding: tokens.spacingM,
    }),
  };
};
