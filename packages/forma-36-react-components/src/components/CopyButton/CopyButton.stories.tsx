import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import CopyButton from './CopyButton';

storiesOf('Components/CopyButton', module)
  .addParameters({
    propTypes: CopyButton['__docgenInfo'],
    component: CopyButton,
  })
  .add('default', () => (
    <div>
      <CopyButton
        className={text('className', '')}
        copyValue={text('copyValue', 'Lorem Ipsum')}
        tooltipPlace={select(
          'place',
          {
            Top: 'top',
            Bottom: 'bottom',
            Left: 'left',
            Right: 'right',
          },
          'bottom',
        )}
        tooltipText={text('tooltipText', 'Copy to clipboard')}
        tooltipCopiedText={text('tooltipText', 'Copied!')}
      />
    </div>
  ));
