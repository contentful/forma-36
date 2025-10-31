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

function SegmentationBase<
  E extends ElementType = typeof SEGMENTATION_DEFAULT_TAG,
>(
  {
    children,
    className,
    segments,
    separator: SeparatorComponent,
    testId = 'cf-ui-segmentation',
  }: SegmentationProps<E>,
  forwardedRef: Ref<HTMLDivElement>,
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
    >
      {children
        ? React.Children.toArray(children).map(mapSegments)
        : segments.map(mapSegments)}
    </Box>
  );
}

SegmentationBase.displayName = 'Segmentation';

export const Segmentation = forwardRef(
  SegmentationBase,
) as PolymorphicComponent<
  ExpandProps<SegmentationInternalProps>,
  typeof SEGMENTATION_DEFAULT_TAG
>;
