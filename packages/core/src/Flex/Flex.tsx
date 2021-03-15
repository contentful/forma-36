import React from 'react';
import { css, cx } from 'emotion';
import {
  PolymorphicComponentProps,
  PolymorphicComponent,
} from '../Primitive/Primitive';
import { Box } from '../Box';
import type { MarginProps, PaddingProps } from '../types';
import type * as CSS from 'csstype';

export interface FlexInternalProps extends MarginProps, PaddingProps {
  /**
   * Child nodes to be rendered in the component */
  children?: React.ReactNode;
  /**
   * Sets width: 100% */
  fullWidth?: boolean;
  /**
   * Sets height: 100% */
  fullHeight?: boolean;
  /**
   * Sets display:inline-flex */
  inlineFlex?: boolean;
  /**
   * Sets flex-shrink: 0 */
  noShrink?: boolean;
  /**
   * One of flex-wrap css values */
  flexWrap?: CSS.Property.FlexWrap;
  /**
   * One of flex-direction css values */
  flexDirection?: CSS.Property.FlexDirection;
  /**
   * One of flex-grow css values */
  flexGrow?: CSS.Property.FlexGrow;
  /**
   * One of justify-content css values */
  justifyContent?: CSS.Property.JustifyContent;
  /**
   * One of justify-content css values */
  justifyItems?: CSS.Property.JustifyContent;
  /**
   * One of justify-self css values */
  justifySelf?: CSS.Property.JustifySelf;
  /**
   * One of align-items css values */
  alignItems?: CSS.Property.AlignItems;
  /**
   * One of align-self css values */
  alignSelf?: CSS.Property.AlignItems;
}

export type FlexProps<E extends React.ElementType> = PolymorphicComponentProps<
  E,
  FlexInternalProps
>;

const DEFAULT_TAG = 'div';

function Flex<E extends React.ElementType = typeof DEFAULT_TAG>(
  {
    alignItems,
    alignSelf,
    children,
    className,
    flexDirection,
    flexGrow,
    flexWrap,
    fullHeight,
    fullWidth,
    inlineFlex,
    justifyContent,
    justifyItems,
    justifySelf,
    noShrink,
    testId = 'cf-ui-flex',
    ...otherProps
  }: FlexProps<E>,
  ref: typeof otherProps.ref,
) {
  const classNames = cx(
    css({
      width: fullWidth ? '100%' : undefined,
      height: fullHeight ? '100%' : undefined,
      flexShrink: noShrink ? 0 : undefined,
      flexDirection,
      justifyContent,
      justifyItems,
      justifySelf,
      alignItems,
      alignSelf,
      flexWrap,
      flexGrow,
    }),
    className,
  );

  return (
    <Box
      as={DEFAULT_TAG}
      {...otherProps}
      display={inlineFlex ? 'inline-flex' : 'flex'}
      ref={ref}
      className={classNames}
      testId={testId}
    >
      {children}
    </Box>
  );
}

const _Flex: PolymorphicComponent<
  FlexInternalProps,
  typeof DEFAULT_TAG
> = React.forwardRef(Flex);

export { _Flex as Flex };
