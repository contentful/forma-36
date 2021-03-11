import React, { forwardRef } from 'react';
import { Component as PolymorphicComponent } from '@contentful/f36-polymorphic';
import type * as Polymorphic from '@contentful/f36-polymorphic';

const DEFAULT_TAG = 'div';

type PolyProps = Polymorphic.OwnProps<typeof PolymorphicComponent>;

export type PrimitiveProps = Polymorphic.Merge<
  Polymorphic.OwnProps<typeof PolymorphicComponent>,
  {
    /**
     * Class names to be appended to the className prop of the component
     */
    className?: string;
    /**
     * A selection ID used for testing purposes applied as a data attribute
     * (data-test-id)
     */
    testId?: string;
  }
>;

export const Primitive = forwardRef(function Primitive(
  { as = DEFAULT_TAG, testId = undefined, ...props },
  forwardedRef,
) {
  return (
    <PolymorphicComponent
      {...props}
      as={as}
      data-test-id={testId}
      ref={forwardedRef}
    />
  );
}) as Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, PrimitiveProps>;
