import * as React from 'react';

import {
  type PolymorphicProps,
  type PolymorphicComponent,
  type ExpandProps,
} from '../Primitive/Primitive';
import { useBox } from '../Box';
import type { Spacing } from '../types';
import { Flex, type FlexInternalProps } from '../Flex/Flex';

export interface StackInternalProps
  extends Omit<FlexInternalProps, 'flexDirection' | 'gap'> {
  /**
   * Defines how flexbox items are ordered within a flexbox container. */
  flexDirection?: 'row' | 'column';
  /**
   * The space between each stack item
   */
  spacing?: Spacing;
}

export type StackProps<E extends React.ElementType = typeof STACK_DEFAULT_TAG> =
  PolymorphicProps<StackInternalProps, E>;

const STACK_DEFAULT_TAG = 'div';

function StackBase<E extends React.ElementType = typeof STACK_DEFAULT_TAG>(
  {
    flexDirection = 'row',
    alignItems = 'center',
    isInline = false,
    spacing = 'spacingM',
    children,
    as,
    ...otherProps
  }: StackProps<E>,
  ref: React.Ref<HTMLElement>,
) {
  const { boxProps, Element } = useBox<React.ElementType>({
    ...otherProps,
    as: as || STACK_DEFAULT_TAG,
  });
  return (
    <Flex
      {...boxProps}
      as={Element}
      flexDirection={flexDirection}
      alignItems={alignItems}
      isInline={isInline}
      className={boxProps.className}
      gap={spacing}
      ref={ref}
    >
      {children}
    </Flex>
  );
}

StackBase.displayName = 'Stack';

export const Stack = React.forwardRef(StackBase) as PolymorphicComponent<
  ExpandProps<StackInternalProps>,
  typeof STACK_DEFAULT_TAG
>;
