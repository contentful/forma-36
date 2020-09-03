import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';

import Switch from './Switch';

function DefaultStory() {
  const [isActive, setActive] = useState(false);

  return (
    <Switch
      id="testSwitch"
      className={text('className', '')}
      isChecked={boolean('isChecked', isActive)}
      isDisabled={boolean('isDisabled', false)}
      labelText={text('labelText', 'My label text')}
      onToggle={setActive}
    />
  );
}

storiesOf('Components/Switch', module)
  .addParameters({
    propTypes: Switch['__docgenInfo'],
    component: Switch,
  })
  .add('default', () => <DefaultStory />);
