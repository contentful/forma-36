import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';

export function getTooltipContentStyles(isOpen: boolean) {
  return {
    tooltip: css({
      display: isOpen ? 'inital' : 'none',
      position: 'absolute',
      top: 0,
      left: 0,
      background: tokens.gray900,
      fontFamily: tokens.fontStackPrimary,
      fontSize: tokens.fontSizeS,
      fontWeight: tokens.fontWeightNormal,
      fontStyle: 'normal',
      textDecoration: 'none',
      color: tokens.colorWhite,
      textAlign: 'start',
      lineHeight: tokens.lineHeightS,
      padding: `calc(${tokens.spacingS} / 2) ${tokens.spacingXs}`,
      borderRadius: tokens.borderRadiusMedium,
      whiteSpace: 'normal',
      overflowWrap: 'anywhere',
      textTransform: 'initial',
      letterSpacing: 'initial',
    }),
  };
}
export function getStyles() {
  return {
    tooltipTargetWrapper: css({
      display: 'inline-block',
      position: 'relative',
    }),

    tooltipHidden: css({
      visibility: 'hidden',
      pointerEvents: 'none',
      zIndex: tokens.zIndexNegative,
    }),
    tooltipContainer: css({
      '& > button[disabled]': { pointerEvents: 'none' },
    }),
  };
}
