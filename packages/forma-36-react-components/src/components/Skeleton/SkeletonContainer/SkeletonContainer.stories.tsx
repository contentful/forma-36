import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, number } from '@storybook/addon-knobs';

import SkeletonBodyText from '../SkeletonBodyText';
import SkeletonDisplayText from '../SkeletonDisplayText';
import SkeletonContainer from './SkeletonContainer';

storiesOf('Components|Skeleton/SkeletonContainer', module)
  .addParameters({
    propTypes: SkeletonContainer['__docgenInfo'],
  })

  .add('default', () => (
    <SkeletonContainer
      extraClassNames={text('extraClassNames', '')}
      animate={boolean('animate', true)}
      width={text('width', '100%')}
      height={text('height', '100')}
      backgroundColor={text('backgroundColor', '#e5ebed')}
      foregroundColor={text('foregroundColor', '#f7f9fa')}
      speed={number('speed', 2)}
    >
      <SkeletonDisplayText numberOfLines={1} />
      <SkeletonBodyText numberOfLines={3} offsetTop={35} />
    </SkeletonContainer>
  ));
