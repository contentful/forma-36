import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';
import { iconName } from '../Icon/constants';

import ToggleButton from './ToggleButton';

storiesOf('Components|ToggleButton', module)
  .addDecorator(
    host({
      align: 'center middle',
      cropMarks: false,
    }),
  )
  .add(
    'default',
    withInfo()(() => (
      <div>
        <ToggleButton
          extraClassNames={text('Extra Class Names', '')}
          isDisabled={boolean('is Disabled', false)}
          isActive={boolean('is Active', false)}
          icon={select(
            'Icon',
            [undefined, ...Object.keys(iconName)],
            undefined,
          )}
        >
          {text('Toggle Text', 'Embed Entry')}
        </ToggleButton>
      </div>
    )),
  );
