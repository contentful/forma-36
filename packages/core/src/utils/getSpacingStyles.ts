import tokens from '@contentful/f36-tokens';
import type { MarginProps, PaddingProps, Spacing } from '../types';

const SpacingTable: { [key in Spacing]: string | undefined } = {
  none: undefined,
  spacing2Xs: tokens.spacing2Xs,
  spacingXs: tokens.spacingXs,
  spacingS: tokens.spacingS,
  spacingM: tokens.spacingM,
  spacingL: tokens.spacingL,
  spacingXl: tokens.spacingXl,
  spacing2Xl: tokens.spacing2Xl,
  spacing3Xl: tokens.spacing3Xl,
  spacing4Xl: tokens.spacing4Xl,
};

export function convertSpacingToToken(spacing: Spacing) {
  return SpacingTable[spacing];
}

export function getSpacingStyles(props: MarginProps & PaddingProps) {
  return Object.assign(
    {},
    props.margin ? { margin: convertSpacingToToken(props.margin) } : null,
    props.marginLeft
      ? { marginLeft: convertSpacingToToken(props.marginLeft) }
      : null,
    props.marginRight
      ? { marginRight: convertSpacingToToken(props.marginRight) }
      : null,
    props.marginTop
      ? { marginTop: convertSpacingToToken(props.marginTop) }
      : null,
    props.marginBottom
      ? { marginBottom: convertSpacingToToken(props.marginBottom) }
      : null,
    props.padding ? { padding: convertSpacingToToken(props.padding) } : null,
    props.paddingLeft
      ? { paddingLeft: convertSpacingToToken(props.paddingLeft) }
      : null,
    props.paddingRight
      ? { paddingRight: convertSpacingToToken(props.paddingRight) }
      : null,
    props.paddingTop
      ? { paddingTop: convertSpacingToToken(props.paddingTop) }
      : null,
    props.paddingBottom
      ? { paddingBottom: convertSpacingToToken(props.paddingBottom) }
      : null,
  );
}
