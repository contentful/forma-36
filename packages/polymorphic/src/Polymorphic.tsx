import React, { forwardRef } from 'react';

export type Merge<P1 = {}, P2 = {}> = Omit<P1, keyof P2> & P2;

export type OwnProps<E> = E extends ForwardRefComponent<any, infer Props>
  ? Props
  : {};

export type IntrinsicElement<E> = E extends ForwardRefComponent<infer I, any>
  ? I
  : never;

type MergeProps<ElementType, Props = {}> = Props &
  Merge<
    ElementType extends React.ElementType
      ? React.ComponentPropsWithRef<ElementType>
      : never,
    Props
  >;

type NarrowIntrinsic<
  ElementType
> = ElementType extends keyof JSX.IntrinsicElements ? ElementType : never;

/**
 *
 */
export interface ForwardRefComponent<IntrinsicElementString, OwnProps = {}>
  extends React.ForwardRefExoticComponent<
    MergeProps<
      IntrinsicElementString,
      OwnProps & { as?: IntrinsicElementString }
    >
  > {
  <
    As extends keyof JSX.IntrinsicElements = NarrowIntrinsic<IntrinsicElementString>
  >(
    props: MergeProps<As, OwnProps & { as: As }>,
  ): React.ReactElement | null;

  <As extends React.ElementType>(
    props: MergeProps<As, OwnProps & { as: As }>,
  ): React.ReactElement | null;
}

const DEFAULT_TAG = 'div';

export const Component = forwardRef(function Component(
  { as: Comp = DEFAULT_TAG, ...props },
  forwardedRef,
) {
  return <Comp {...props} ref={forwardedRef} />;
}) as ForwardRefComponent<typeof DEFAULT_TAG, {}>;
