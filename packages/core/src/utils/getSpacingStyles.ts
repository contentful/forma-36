import tokens from '@contentful/f36-tokens';
import type { MarginProps, PaddingProps, Spacing } from '../types';

const SpacingTable = {
  '2xs': tokens.spacing2Xs,
  xs: tokens.spacingXs,
  s: tokens.spacingS,
  m: tokens.spacingM,
  l: tokens.spacingL,
  xl: tokens.spacingXl,
  '2xl': tokens.spacing2Xl,
  '3xl': tokens.spacing3Xl,
  '4xl': tokens.spacing4Xl,
};

function convertSpacingToToken(spacing: Spacing) {
  return SpacingTable[spacing] || SpacingTable.m;
}

export function getSpacingStyles(props: MarginProps & PaddingProps) {
  return Object.assign(
    {},
    props.m ? { margin: convertSpacingToToken(props.m) } : null,
    props.margin ? { margin: convertSpacingToToken(props.margin) } : null,
    props.ml ? { marginLeft: convertSpacingToToken(props.ml) } : null,
    props.marginLeft
      ? { marginLeft: convertSpacingToToken(props.marginLeft) }
      : null,
    props.mr ? { marginRight: convertSpacingToToken(props.mr) } : null,
    props.marginRight
      ? { marginRight: convertSpacingToToken(props.marginRight) }
      : null,
    props.mt ? { marginTop: convertSpacingToToken(props.mt) } : null,
    props.marginTop
      ? { marginTop: convertSpacingToToken(props.marginTop) }
      : null,
    props.mb ? { marginBottom: convertSpacingToToken(props.mb) } : null,
    props.marginBottom
      ? { marginBottom: convertSpacingToToken(props.marginBottom) }
      : null,
    props.p ? { padding: convertSpacingToToken(props.p) } : null,
    props.padding ? { padding: convertSpacingToToken(props.padding) } : null,
    props.pl ? { paddingLeft: convertSpacingToToken(props.pl) } : null,
    props.paddingLeft
      ? { paddingLeft: convertSpacingToToken(props.paddingLeft) }
      : null,
    props.pr ? { paddingRight: convertSpacingToToken(props.pr) } : null,
    props.paddingRight
      ? { paddingRight: convertSpacingToToken(props.paddingRight) }
      : null,
    props.pt ? { paddingTop: convertSpacingToToken(props.pt) } : null,
    props.paddingTop
      ? { paddingTop: convertSpacingToToken(props.paddingTop) }
      : null,
    props.pb ? { paddingBottom: convertSpacingToToken(props.pb) } : null,
    props.paddingBottom
      ? { paddingBottom: convertSpacingToToken(props.paddingBottom) }
      : null,
  );
}
