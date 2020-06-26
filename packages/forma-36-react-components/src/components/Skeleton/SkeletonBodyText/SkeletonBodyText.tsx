import React from 'react';
import SkeletonText from '../SkeletonText';
import { SkeletonTextProps } from '../SkeletonText';

export type SkeletonBodyTextProps = SkeletonTextProps & typeof defaultProps;

const defaultProps = {
  numberOfLines: 2,
  offsetTop: 0,
  offsetLeft: 0,
  lineHeight: 16,
  marginBottom: 8,
};

export const SkeletonBodyText = ({
  numberOfLines,
  ...otherProps
}: SkeletonBodyTextProps) => {
  return (
    <SkeletonText
      numberOfLines={numberOfLines > 0 ? numberOfLines : 1}
      {...otherProps}
    />
  );
};
SkeletonBodyText.defaultProps = defaultProps;

export default SkeletonBodyText;
