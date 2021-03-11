import React, { forwardRef } from 'react';

export type Merge<P1 = {}, P2 = {}> = Omit<P1, keyof P2> & P2;

type As<Props = any> = React.ElementType<Props>;

export type PrimitiveProps = {
  as?: As;
  /**
   * Class names to be appended to the className prop of the component
   */
  className?: string;
  /**
   * A selection ID used for testing purposes applied as a data attribute
   * (data-test-id)
   */
  testId?: string;
};

type Primitive<Element extends HTMLElement> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<PrimitiveProps>
>;

export const Primitive = forwardRef<HTMLDivElement, PrimitiveProps>(
  function Primitive(
    { as: Component = 'div', testId = undefined, ...props },
    forwardedRef,
  ) {
    return <Component {...props} data-test-id={testId} ref={forwardedRef} />;
  },
) as Primitive;
