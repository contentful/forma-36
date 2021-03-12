import React from 'react';
import type { CommonProps } from './types';

export type PrimitiveOwnProps<
  E extends React.ElementType = React.ElementType
> = {
  as?: E;
} & CommonProps;

export type PrimitiveProps<E extends React.ElementType> = PrimitiveOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof PrimitiveOwnProps>;

export type PolymorphicComponentProps<E extends React.ElementType, P> = P &
  PrimitiveProps<E>;

export type PolymorphicComponent<P, D extends React.ElementType = 'div'> = <
  E extends React.ElementType = D
>(
  props: PolymorphicComponentProps<E, P>,
) => React.ReactElement | null;

const defaultElement = 'div';

export const Primitive: <E extends React.ElementType = typeof defaultElement>(
  props: PrimitiveProps<E>,
) => React.ReactElement | null = React.forwardRef(function Primitive(
  props: PrimitiveOwnProps,
  ref: React.Ref<Element>,
) {
  const { as: Element = defaultElement, testId = undefined, ...rest } = props;
  return <Element ref={ref} data-test-id={testId} {...rest} as={undefined} />;
});
