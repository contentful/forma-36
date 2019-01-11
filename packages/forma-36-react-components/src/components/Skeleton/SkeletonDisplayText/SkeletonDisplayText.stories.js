import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';
import SkeletonContainer from '../SkeletonContainer';
import SkeletonDisplayText from './SkeletonDisplayText';

storiesOf('Components|Skeleton/SkeletonDisplayText', module)
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
        <SkeletonDisplayText numberOfLines={number('Number of lines', 1)} />
      </SkeletonContainer>
    )),
  );
