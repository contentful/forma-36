import React from 'react';

/**
 * Expand object types to show the contents not the name of the type.
 * Should be used when using React.ForwardRef to show list of props
 */
export type ExpandProps<T> = T;
// export type ExpandProps<T> = T extends object
//   ? T extends infer O
//     ? { [K in keyof O]: O[K] }
//     : never
//   : T;

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
  OmitAdditionalProps extends keyof any = never,
> = Overwrite<Omit<React.ComponentPropsWithoutRef<E>, OmitAdditionalProps>, P>;

export type PolymorphicProps<
  P,
  E extends React.ElementType,
  OmitAdditionalProps extends keyof any = never,
> = PropsWithAs<PropsWithHTMLElement<P, E, OmitAdditionalProps>, E>;

type PolymorphicPropsWithRef<
  P,
  E extends React.ElementType,
  OmitAdditionalProps extends keyof any = never,
> = PropsWithAs<
  Overwrite<Omit<React.ComponentPropsWithRef<E>, OmitAdditionalProps>, P>,
  E
>;

/**
 * A polymorphic React component type.
 *
 * Represents a function component that can render as different element types while preserving correct prop typings and ref forwarding for the chosen element.
 *
 * @template P - The component's own props (the "base" props).
 * @template D - The default element type (must extend React.ElementType)
 * @template OmitAdditionalProps - Keys to omit when merging the component's base props with the props of the chosen element type.
 * Example usage:
 *  - type ButtonProps = { variant?: 'primary' | 'secondary' };
 *  - const Button: PolymorphicComponent<ButtonProps, 'button'> = ...;
 *  - <Button onClick={...} />         // typed as <button>
 *  - <Button as="a" href="...">      // typed as <a>, href validated
 *
 * @returns A React component type that supports polymorphic "as" overrides and proper ref typing.
 */
export type PolymorphicComponent<
  P,
  D extends React.ElementType,
  OmitAdditionalProps extends keyof any = never,
> = (<E extends React.ElementType = D>(
  props: PolymorphicPropsWithRef<P, E, OmitAdditionalProps>,
) => React.ReactElement | null) & {
  displayName?: string;
};
