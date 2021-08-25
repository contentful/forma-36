import React from 'react';
import type { CommonProps } from '../types';
import isPropValid from '@emotion/is-prop-valid';

type PrimitiveOwnProps<E extends React.ElementType = React.ElementType> = {
  as?: E;
} & CommonProps;

type PrimitiveProps<
  E extends React.ElementType,
  PropsToOmit extends keyof React.ComponentProps<any> = undefined
> = PrimitiveOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof PrimitiveOwnProps | PropsToOmit>;

export type PolymorphicComponentProps<
  E extends React.ElementType,
  P,
  PropsToOmit extends keyof React.ComponentProps<any> = undefined
> = P & PrimitiveProps<E, PropsToOmit>;

export type PolymorphicComponent<
  P,
  D extends React.ElementType = 'div',
  PropsToOmit extends keyof React.ComponentProps<any> = undefined
> = (<E extends React.ElementType = D>(
  props: PolymorphicComponentProps<E, P, PropsToOmit>,
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

// -----------------------------------------------------------------

type Overwrite<T, U> = Omit<T, keyof U> & U;

type PropsWithAs<P, E extends React.ElementType> = P & { as?: E };

/**
 * Use for wrapping/mirroring a HTML Element.
 *
 * Example with wrapping button:
 *
 * interface ButtonOwnProps {
 *  customProp: string
 * }
 * type ButtonProps = PropsWithHTMLElement<ButtonOwnProps, 'button'>
 *
 * export function Button(props: ButtonProps) {
 *  const { customProp, ...otherProps } = props;
 *
 *  return <button {...otherProps} />;
 * }
 */
export type PropsWithHTMLElement<
  P,
  E extends React.ElementType,
  OmitAdditionalProps extends keyof any = never
> = Overwrite<Omit<React.ComponentPropsWithoutRef<E>, OmitAdditionalProps>, P>;

export type PolymorphicProps<
  P,
  E extends React.ElementType,
  OmitAdditionalProps extends keyof any = never
> = PropsWithAs<PropsWithHTMLElement<P, E, OmitAdditionalProps>, E>;

type PolymorphicPropsWithRef<
  P,
  E extends React.ElementType,
  OmitAdditionalProps extends keyof any = never
> = PropsWithAs<
  Overwrite<Omit<React.ComponentPropsWithRef<E>, OmitAdditionalProps>, P>,
  E
>;

export type PolymorphicComponentI<
  P,
  D extends React.ElementType,
  OmitAdditionalProps extends keyof any = never
> = (<E extends React.ElementType = D>(
  props: PolymorphicPropsWithRef<P, E, OmitAdditionalProps>,
) => React.ReactElement | null) & {
  displayName?: string;
};
