import * as React from 'react';

import {
  PolymorphicComponentProps,
  PolymorphicComponentWithRef,
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
  isInline?: boolean;
  /**
   * One of flex css values
   */
  flex?: CSS.Property.Flex;
  /**
   * One of flex-basis css values
   * */
  flexBasis?: CSS.Property.FlexBasis;
  /**
   * One of flex-shrink css values*/
  flexShrink?: CSS.Property.FlexShrink;
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

const Flex: PolymorphicComponentWithRef<
  FlexInternalProps,
  typeof DEFAULT_TAG
> = (
  {
    alignItems,
    alignSelf,
    children,
    className,
    flex,
    flexBasis,
    flexShrink,
    flexDirection,
    flexGrow,
    flexWrap,
    fullHeight,
    fullWidth,
    isInline,
    justifyContent,
    justifyItems,
    justifySelf,
    ...otherProps
  },
  ref,
) => {
  return (
    <Box
      as={DEFAULT_TAG}
      {...otherProps}
      css={{
        width: fullWidth ? '100%' : undefined,
        height: fullHeight ? '100%' : undefined,
        flex,
        flexBasis,
        flexShrink,
        flexDirection,
        justifyContent,
        justifyItems,
        justifySelf,
        alignItems,
        alignSelf,
        flexWrap,
        flexGrow,
      }}
      display={isInline ? 'inline-flex' : 'flex'}
      ref={ref}
      className={className}
    >
      {children}
    </Box>
  );
};

export const _Flex: PolymorphicComponent<
  FlexInternalProps,
  typeof DEFAULT_TAG
> = React.forwardRef(Flex);

export { _Flex as Flex };
