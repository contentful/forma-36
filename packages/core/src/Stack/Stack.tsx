import * as React from 'react';
import { cx } from 'emotion';
import { PolymorphicProps, PolymorphicComponent } from '../Primitive/Primitive';
import { useBox } from '../Box';
import type { MarginProps, PaddingProps, CommonProps, Spacing } from '../types';
import { Flex, FlexInternalProps } from '../Flex/Flex';
import { getStackStyles } from './Stack.styles';

export interface StackInternalProps
  extends CommonProps,
    MarginProps,
    PaddingProps,
    Pick<
      FlexInternalProps,
      'isInline' | 'alignItems' | 'justifyContent' | 'flexWrap'
    > {
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
  E extends React.ElementType = typeof DEFAULT_TAG
> = PolymorphicProps<StackInternalProps, E>;

const DEFAULT_TAG = 'div';

function _Stack<E extends React.ElementType = typeof DEFAULT_TAG>(
  {
    flexDirection = 'row',
    alignItems = 'center',
    isInline = false,
    spacing = 'spacingM',
    justifyContent,
    flexWrap,
    children,
    as,
    ...otherProps
  }: StackProps<E>,
  ref: React.Ref<any>,
) {
  const styles = getStackStyles({ spacing, flexDirection });
  const { boxProps, Element } = useBox<React.ElementType>({
    ...otherProps,
    as: as || DEFAULT_TAG,
  });
  return (
    <Flex
      {...boxProps}
      as={Element}
      flexDirection={flexDirection}
      alignItems={alignItems}
      isInline={isInline}
      justifyContent={justifyContent}
      flexWrap={flexWrap}
      className={cx(boxProps.className, styles)}
      ref={ref}
    >
      {children}
    </Flex>
  );
}

export const Stack: PolymorphicComponent<
  StackInternalProps,
  typeof DEFAULT_TAG
> = React.forwardRef(_Stack);
