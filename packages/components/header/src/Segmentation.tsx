import {
  Box,
  type CommonProps,
  type ExpandProps,
  type PolymorphicComponent,
  type PolymorphicProps,
} from '@contentful/f36-core';
import { cx } from '@emotion/css';
import React, {
  forwardRef,
  type ElementType,
  type Ref,
  type ReactNode,
  Fragment,
  type ReactElement,
} from 'react';
import { getSegmentationStyles } from './Segmentation.styles';

const SEGMENTATION_DEFAULT_TAG = 'div';

type ChildrenOrSegments =
  | {
      children: ReactNode[];
      segments?: never;
    }
  | {
      children?: never;
      segments: ReactNode[];
    };

type SegmentationInternalProps = CommonProps &
  ChildrenOrSegments & {
    separator?: ReactElement;
  };

export type SegmentationProps<
  E extends ElementType = typeof SEGMENTATION_DEFAULT_TAG,
> = PolymorphicProps<SegmentationInternalProps, E>;

function _Segmentation<E extends ElementType = typeof SEGMENTATION_DEFAULT_TAG>(
  {
    children,
    className,
    segments,
    separator: SeparatorComponent,
    testId = 'cf-ui-segmentation',
    ...otherProps
  }: SegmentationProps<E>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- polymorphic element
  forwardedRef: Ref<any>,
) {
  const styles = getSegmentationStyles();
  const separator = SeparatorComponent ?? <div className={styles.separator} />;

  const mapSegments = (segment: ReactNode, index: number) => (
    <Fragment key={index}>
      {index > 0 && separator}
      {segment}
    </Fragment>
  );

  return (
    <Box
      as={SEGMENTATION_DEFAULT_TAG}
      className={cx(styles.root, className)}
      ref={forwardedRef}
      testId={testId}
      {...otherProps}
    >
      {children
        ? React.Children.toArray(children).map(mapSegments)
        : segments.map(mapSegments)}
    </Box>
  );
}

export const Segmentation: PolymorphicComponent<
  ExpandProps<SegmentationInternalProps>,
  typeof SEGMENTATION_DEFAULT_TAG
> = forwardRef(_Segmentation);
