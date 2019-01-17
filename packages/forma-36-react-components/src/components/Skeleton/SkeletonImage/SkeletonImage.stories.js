import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';

import SkeletonImage from './SkeletonImage';
import SkeletonContainer from '../SkeletonContainer';

storiesOf('Components|Skeleton/SkeletonImage', module)
  .addDecorator(
    host({
      align: 'center middle',
      cropMarks: false,
    }),
  )
  .add(
    'default',
    withInfo()(() => (
      <SkeletonContainer>
        <SkeletonImage
          width={number('Width', 50)}
          height={number('Height', 50)}
          offsetTop={number('Offset Top', 0)}
          offsetLeft={number('Offset Left', 0)}
        />
      </SkeletonContainer>
    )),
  );
