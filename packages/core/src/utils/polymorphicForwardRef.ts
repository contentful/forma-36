import React from 'react';

/***** other approach  from https://github.com/nasheomirro/react-polymorphed/blob/main/index.d.ts*/
type DistributiveOmit<T, K extends keyof any> = T extends any
  ? Omit<T, K>
  : never;
type Merge<A, B> = Omit<A, keyof B> & B;
type DistributiveMerge<A, B> = DistributiveOmit<A, keyof B> & B;

/**
 * make typescript not check PropsWithRef<P> individually.
 * more info here: https://dev.to/nasheomirro/create-fast-type-safe-polymorphic-components-with-the-as-prop-ncn
 */

export type PolymorphicComponentPropsWithRef<T extends React.ElementType> =
  T extends new (props: infer P) => React.Component<any, any>
    ? React.PropsWithoutRef<P> & React.RefAttributes<InstanceType<T>>
    : React.ComponentPropsWithRef<T>;

export type AsProps<
  Component extends React.ElementType,
  PermanentProps extends object,
  ComponentProps extends object,
> = DistributiveMerge<ComponentProps, PermanentProps & { as?: Component }>;

export type PolymorphicWithRef<
  Default extends OnlyAs,
  Props extends object = {},
  OnlyAs extends React.ElementType = React.ElementType,
> = <T extends OnlyAs = Default>(
  props: AsProps<T, Props, PolymorphicComponentPropsWithRef<T>>,
) => React.ReactElement | null;

export type PolyForwardComponent<
  Default extends OnlyAs,
  Props extends object = {},
  OnlyAs extends React.ElementType = React.ElementType,
> = Merge<
  React.ForwardRefExoticComponent<
    Merge<PolymorphicComponentPropsWithRef<Default>, Props & { as?: Default }>
  >,
  PolymorphicWithRef<Default, Props, OnlyAs>
>;

export type PolyRefFunction = <
  Default extends OnlyAs,
  Props extends object = {},
  OnlyAs extends React.ElementType = React.ElementType,
>(
  Component: React.ForwardRefRenderFunction<any, Props & { as?: OnlyAs }>,
) => PolyForwardComponent<Default, Props, OnlyAs>;
