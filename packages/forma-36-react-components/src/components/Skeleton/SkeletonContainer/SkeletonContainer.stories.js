import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, number } from '@storybook/addon-knobs';

import SkeletonBodyText from '../SkeletonBodyText';
import SkeletonDisplayText from '../SkeletonDisplayText';
import SkeletonContainer from './SkeletonContainer';

storiesOf('Components|Skeleton/SkeletonContainer', module).add(
  'default',
  () => (
    <SkeletonContainer
      extraClassNames={text('Extra Class Names', '')}
      animate={boolean('Animate', true)}
      width={text('Width', '100%')}
      height={text('Height', '100')}
      backgroundColor={text('Primary color', '#e5ebed')}
      foregroundColor={text('Secondary color', '#f7f9fa')}
      speed={number('Speed', 2)}
    >
      <SkeletonDisplayText numberOfLines={1} />
      <SkeletonBodyText numberOfLines={3} offsetTop={35} />
    </SkeletonContainer>
  ),
);
