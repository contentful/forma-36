import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import CopyButton from './CopyButton';

storiesOf('Components|CopyButton', module)
  .addParameters({
    propTypes: CopyButton['__docgenInfo'],
  })
  .add('default', () => (
    <div>
      <CopyButton
        className={text('className', '')}
        copyValue={text('copyValue', 'Lorem Ipsum')}
      />
    </div>
  ));
