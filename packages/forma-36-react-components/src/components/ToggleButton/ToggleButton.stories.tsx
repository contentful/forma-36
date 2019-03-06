import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';
import { iconName } from '../Icon/constants';

import ToggleButton from './ToggleButton';

storiesOf('Components|ToggleButton', module)
  .addParameters({
    propTypes: ToggleButton['__docgenInfo'],
  })
  .add('default', () => (
    <div>
      <ToggleButton
        extraClassNames={text('Extra Class Names', '')}
        isDisabled={boolean('is Disabled', false)}
        isActive={boolean('is Active', false)}
        icon={select('Icon', [undefined, ...Object.keys(iconName)], undefined)}
      >
        {text('Toggle Text', 'Embed Entry')}
      </ToggleButton>
    </div>
  ));
