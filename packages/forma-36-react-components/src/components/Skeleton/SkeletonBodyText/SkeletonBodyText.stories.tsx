import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';

import SkeletonBodyText from './SkeletonBodyText';
import SkeletonContainer from '../SkeletonContainer';

storiesOf('Components|Skeleton/SkeletonBodyText', module)
  .addParameters({
    propTypes: SkeletonBodyText['__docgenInfo'],
  })
  .add('default', () => (
    <SkeletonContainer>
      <SkeletonBodyText numberOfLines={number('Number of line', 2)} />
    </SkeletonContainer>
  ));
