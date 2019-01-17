import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';

import SkeletonBodyText from './SkeletonBodyText';
import SkeletonContainer from '../SkeletonContainer';

storiesOf('Components|Skeleton/SkeletonBodyText', module)
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
        <SkeletonBodyText numberOfLines={number('Number of line', 2)} />
      </SkeletonContainer>
    )),
  );
