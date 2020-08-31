import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';

import SkeletonBodyText from './SkeletonBodyText';
import SkeletonText from '../SkeletonText';
import SkeletonContainer from '../SkeletonContainer';

storiesOf('Components/Skeleton/SkeletonBodyText', module)
  .addParameters({
    propTypes: SkeletonText['__docgenInfo'],
    component: SkeletonText,
  })
  .add('default', () => (
    <SkeletonContainer>
      <SkeletonBodyText
        numberOfLines={number('Number of line', 2)}
        offsetTop={number('Offset top', 0)}
        offsetLeft={number('Offset left', 0)}
        lineHeight={number('Line height', 16)}
        marginBottom={number('Margin bottom', 8)}
      />
    </SkeletonContainer>
  ));
