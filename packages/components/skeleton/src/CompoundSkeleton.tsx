import { SkeletonBodyText } from './SkeletonBodyText/SkeletonBodyText';
import { SkeletonContainer } from './SkeletonContainer/SkeletonContainer';
import { SkeletonDisplayText } from './SkeletonDisplayText/SkeletonDisplayText';
import { SkeletonImage } from './SkeletonImage/SkeletonImage';
import { SkeletonRow } from './SkeletonRow/SkeletonRow';
import { SkeletonText } from './SkeletonText/SkeletonText';

type CompoundSkeleton = {
  BodyText: typeof SkeletonBodyText;
  Container: typeof SkeletonContainer;
  DisplayText: typeof SkeletonDisplayText;
  Image: typeof SkeletonImage;
  Row: typeof SkeletonRow;
  Text: typeof SkeletonText;
};

export const Skeleton = {} as CompoundSkeleton;

Skeleton.BodyText = SkeletonBodyText;
Skeleton.Container = SkeletonContainer;
Skeleton.DisplayText = SkeletonDisplayText;
Skeleton.Image = SkeletonImage;
Skeleton.Row = SkeletonRow;
Skeleton.Text = SkeletonText;
