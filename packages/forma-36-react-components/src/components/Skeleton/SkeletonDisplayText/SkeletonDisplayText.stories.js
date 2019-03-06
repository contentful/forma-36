import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';

import SkeletonContainer from '../SkeletonContainer';
import SkeletonDisplayText from './SkeletonDisplayText';

storiesOf('Components|Skeleton/SkeletonDisplayText', module).add(
  'default',
  () => (
    <SkeletonContainer>
      <SkeletonDisplayText numberOfLines={number('Number of lines', 1)} />
    </SkeletonContainer>
  ),
);
