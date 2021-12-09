import * as React from 'react';
import { PolymorphicProps, PolymorphicComponent } from '../Primitive/Primitive';
import { useBox } from '../Box';
import type { MarginProps, PaddingProps, CommonProps, Spacing } from '../types';
import { Flex, FlexInternalProps } from '../Flex/Flex';

export interface StackInternalProps
  extends CommonProps,
    MarginProps,
    PaddingProps,
    Pick<FlexInternalProps, 'isInline' | 'alignItems' | 'fullWidth'> {
  /**
   * Defines how flexbox items are ordered within a flexbox container. */
  flexDirection?: 'row' | 'column';
  /**
   * The space between each stack item
   */
  spacing?: Spacing;
  /**
   * Child nodes to be rendered in the component */
  children?: React.ReactNode;
}

export type StackProps<
  E extends React.ElementType = typeof STACK_DEFAULT_TAG
> = PolymorphicProps<StackInternalProps, E>;

const STACK_DEFAULT_TAG = 'div';

function _Stack<E extends React.ElementType = typeof STACK_DEFAULT_TAG>(
  {
    flexDirection = 'row',
    alignItems = 'center',
    isInline = false,
    spacing = 'spacingM',
    children,
    as,
    ...otherProps
  }: StackProps<E>,
  ref: React.Ref<any>,
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

export const Stack: PolymorphicComponent<
  StackInternalProps,
  typeof STACK_DEFAULT_TAG
> = React.forwardRef(_Stack);
