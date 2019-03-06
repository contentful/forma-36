import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import CopyButton from './CopyButton';

storiesOf('Components|CopyButton', module)
  .addDecorator(withInfo)
  .add('default', () => (
    <div>
      <CopyButton
        extraClassNames={text('Extra Class Names', '')}
        copyValue={text('Copy Value', 'Lorem Ipsum')}
      />
    </div>
  ));
