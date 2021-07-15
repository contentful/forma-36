import React from 'react';
import type { CommonProps } from '../types';
import isPropValid from '@emotion/is-prop-valid';

type PrimitiveOwnProps<E extends React.ElementType = React.ElementType> = {
  as?: E;
} & CommonProps;

export type PrimitiveProps<E extends React.ElementType> = PrimitiveOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof PrimitiveOwnProps>;

export type PolymorphicComponentProps<E extends React.ElementType, P> = P &
  PrimitiveProps<E>;

export type PolymorphicComponent<P, D extends React.ElementType = 'div'> = (<
  E extends React.ElementType = D
>(
  props: PolymorphicComponentProps<E, P>,
) => React.ReactElement | null) & {
  displayName?: string;
};

export type PolymorphicComponentWithRef<
  P,
  D extends React.ElementType = 'div'
> = <E extends React.ElementType = D>(
  props: PolymorphicComponentProps<E, P>,
  ref: typeof props.ref,
) => React.ReactElement | null;

const defaultElement = 'div';

export function usePrimitive(props: PrimitiveOwnProps) {
  const {
    as: Element = defaultElement,
    testId = undefined,
    ...otherProps
  } = props;
  const validProps: Partial<PrimitiveOwnProps> = {};
  for (const key in otherProps) {
    if (isPropValid(key)) {
      validProps[key] = otherProps[key];
    } else {
      console.warn('Invalid prop', key);
    }
  }

  return {
    primitiveProps: { ['data-test-id']: testId, ...validProps, as: undefined },
    Element,
  };
}

export const Primitive: <E extends React.ElementType = typeof defaultElement>(
  props: PrimitiveProps<E>,
) => React.ReactElement | null = React.forwardRef(function Primitive(
  props: PrimitiveOwnProps,
  ref: React.Ref<Element>,
) {
  const {
    as: Element = defaultElement,
    testId = undefined,
    ...otherProps
  } = props;
  const validProps: Partial<PrimitiveOwnProps> = {};
  for (const key in otherProps) {
    if (isPropValid(key)) {
      validProps[key] = otherProps[key];
    } else {
      console.warn('Invalid prop', key);
    }
  }
  return (
    <Element ref={ref} data-test-id={testId} {...validProps} as={undefined} />
  );
});
