import React from 'react';

/**
 * Expand object types to show the contents not the name of the type.
 * Should be used when using React.ForwardRef to show list of props
 */
export type ExpandProps<T> = T extends object
  ? T extends infer O
    ? { [K in keyof O]: O[K] }
    : never
  : T;

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

export type PolymorphicComponent<
  P,
  D extends React.ElementType,
  OmitAdditionalProps extends keyof any = never
> = (<E extends React.ElementType = D>(
  props: PolymorphicPropsWithRef<P, E, OmitAdditionalProps>,
) => React.ReactElement | null) & {
  displayName?: string;
};
