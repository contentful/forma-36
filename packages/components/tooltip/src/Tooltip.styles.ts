import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

const tooltipMargin = `calc(-1 * ((1rem * (10 / ${tokens.fontBaseDefault})) / 2))`;
const tooltipChevronSize = `calc(1rem * (10 / ${tokens.fontBaseDefault}))`;

export function getStyles() {
  return {
    tooltipTargetWrapper: css({
      display: 'inline-block',
      position: 'relative',
    }),
    tooltip: css({
      background: tokens.gray900,
      fontFamily: tokens.fontStackPrimary,
      fontSize: tokens.fontSizeS,
      fontWeight: tokens.fontWeightNormal,
      fontStyle: 'normal',
      textDecoration: 'none',
      color: tokens.colorWhite,
      textAlign: 'center',
      lineHeight: tokens.lineHeightDefault,
      padding: `${tokens.spacingXs} calc(1rem * (10 / ${tokens.fontBaseDefault}))`,
      borderRadius: tokens.borderRadiusMedium,
      whiteSpace: 'normal',
    }),
    tooltipHidden: css({
      visibility: 'hidden',
      pointerEvents: 'none',
      zIndex: tokens.zIndexNegative,
    }),
    tooltipContainer: css({
      '& > button[disabled]': { pointerEvents: 'none' },
    }),
    tooltipArrow: css({
      position: 'absolute',
      '&[data-placement*="top"]': {
        bottom: 0,
        left: 0,
        marginBottom: tooltipMargin,
      },
      '&[data-placement*="right"]': {
        left: 0,
        marginLeft: tooltipMargin,
      },
      '&[data-placement*="bottom"]': {
        left: 0,
        top: 0,
        marginTop: tooltipMargin,
      },
      '&[data-placement*="left"]': {
        right: 0,
        marginRight: tooltipMargin,
      },
      '&::before': {
        content: '""',
        display: 'block',
        height: tooltipChevronSize,
        width: tooltipChevronSize,
        backgroundColor: tokens.gray900,
        transform: 'rotate3d(0, 0, 1, 45deg)',
        zIndex: tokens.zIndexNegative,
      },
    }),
  };
}
