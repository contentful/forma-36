import * as React from 'react';

import tokens from '@contentful/f36-tokens';
import { cx, css } from 'emotion';

const DEFAULT_TAG = 'div';

import {
  Primitive,
  PolymorphicComponentProps,
  PolymorphicComponent,
} from '../Primitive/Primitive';

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

export type Spacing = keyof typeof SpacingTable;

export interface BoxInternalProps {
  m?: Spacing;
  ml?: Spacing;
  mr?: Spacing;
  mt?: Spacing;
  mb?: Spacing;
  p?: Spacing;
  pl?: Spacing;
  pr?: Spacing;
  pb?: Spacing;
  pt?: Spacing;
  children?: React.ReactNode | React.ReactNode[];
}

export type BoxProps<E extends React.ElementType> = PolymorphicComponentProps<
  E,
  BoxInternalProps
>;

function convertSpacingToToken(spacing: Spacing) {
  return SpacingTable[spacing] || SpacingTable.m;
}

function Box<E extends React.ElementType = typeof DEFAULT_TAG>(
  { display = 'block', className, children, ...otherProps }: BoxProps<E>,
  ref: typeof otherProps.ref,
) {
  return (
    <Primitive
      ref={ref}
      className={cx(
        css(
          Object.assign(
            {
              display,
            },
            otherProps.m
              ? { margin: convertSpacingToToken(otherProps.m) }
              : null,
            otherProps.ml
              ? { marginLeft: convertSpacingToToken(otherProps.ml) }
              : null,
            otherProps.mr
              ? { marginRight: convertSpacingToToken(otherProps.mr) }
              : null,
            otherProps.mt
              ? { marginTop: convertSpacingToToken(otherProps.mt) }
              : null,
            otherProps.mb
              ? { marginBottom: convertSpacingToToken(otherProps.mb) }
              : null,
            otherProps.p
              ? { padding: convertSpacingToToken(otherProps.p) }
              : null,
            otherProps.pl
              ? { paddingLeft: convertSpacingToToken(otherProps.pl) }
              : null,
            otherProps.pr
              ? { paddingRight: convertSpacingToToken(otherProps.pr) }
              : null,
            otherProps.pt
              ? { paddingTop: convertSpacingToToken(otherProps.pt) }
              : null,
            otherProps.pb
              ? { paddingBottom: convertSpacingToToken(otherProps.pb) }
              : null,
          ),
        ),
        className,
      )}
    >
      {children}
    </Primitive>
  );
}

const _Box: PolymorphicComponent<
  BoxInternalProps,
  typeof DEFAULT_TAG
> = React.forwardRef(Box);

export { _Box as Box };
