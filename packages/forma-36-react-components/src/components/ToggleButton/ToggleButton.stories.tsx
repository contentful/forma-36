import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';
import { iconName } from '../Icon/constants';

import ToggleButton from './ToggleButton';

storiesOf('Components/ToggleButton', module)
  .addParameters({
    propTypes: ToggleButton['__docgenInfo'],
  })
  .add('default', () => (
    <div>
      <ToggleButton
        className={text('className', '')}
        isDisabled={boolean('isDisabled', false)}
        isActive={boolean('isActive', false)}
        icon={select('icon', [undefined, ...Object.keys(iconName)], undefined)}
      >
        {text('children', 'Embed Entry')}
      </ToggleButton>
    </div>
  ));
