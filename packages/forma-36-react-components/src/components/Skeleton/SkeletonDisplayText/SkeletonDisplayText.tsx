import React from 'react';
import SkeletonText from '../SkeletonText';
import { SkeletonTextProps } from '../SkeletonText';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SkeletonDisplayTextProps extends SkeletonTextProps {}

export function SkeletonDisplayText(
  props: SkeletonDisplayTextProps,
): React.ReactElement {
  return <SkeletonText {...props} />;
}

SkeletonDisplayText.defaultProps = {
  numberOfLines: 1,
  width: 100,
  offsetTop: 0,
  offsetLeft: 0,
  lineHeight: 21,
  marginBottom: 20,
};

export default SkeletonDisplayText;
