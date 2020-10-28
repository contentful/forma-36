import React from 'react';
import SkeletonText from '../SkeletonText';
import { SkeletonTextProps } from '../SkeletonText';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SkeletonBodyTextProps extends SkeletonTextProps {}

const defaultProps: Partial<SkeletonBodyTextProps> = {
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
      numberOfLines={
        numberOfLines! > 0 // eslint-disable-line @typescript-eslint/no-non-null-assertion
          ? numberOfLines
          : 1
      }
      {...otherProps}
    />
  );
};
SkeletonBodyText.defaultProps = defaultProps;

export default SkeletonBodyText;
