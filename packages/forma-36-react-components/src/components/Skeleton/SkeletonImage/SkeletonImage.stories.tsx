import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';

import SkeletonImage from './SkeletonImage';
import SkeletonContainer from '../SkeletonContainer';

storiesOf('Components/Skeleton/SkeletonImage', module)
  .addParameters({
    propTypes: SkeletonImage['__docgenInfo'],
  })
  .add('default', () => (
    <SkeletonContainer>
      <SkeletonImage
        width={number('width', 50)}
        height={number('height', 50)}
        offsetTop={number('offsetTop', 0)}
        offsetLeft={number('offsetLeft', 0)}
        radiusX={number('radiusX', 0)}
        radiusY={number('radiusY', 0)}
      />
    </SkeletonContainer>
  ));
