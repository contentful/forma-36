import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';

import SkeletonContainer from '../SkeletonContainer';
import SkeletonDisplayText from './SkeletonDisplayText';

storiesOf('Components/Skeleton/SkeletonDisplayText', module)
  .addParameters({
    propTypes: SkeletonDisplayText['__docgenInfo'],
    component: SkeletonDisplayText,
  })
  .add('default', () => (
    <SkeletonContainer>
      <SkeletonDisplayText numberOfLines={number('numberOfLines', 1)} />
    </SkeletonContainer>
  ));
