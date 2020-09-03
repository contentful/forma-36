import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import EditorToolbarDivider from './EditorToolbarDivider';

storiesOf('Components/EditorToolbar/EditorToolbarDivider', module)
  .addParameters({
    propTypes: EditorToolbarDivider['__docgenInfo'],
    component: EditorToolbarDivider,
  })
  .add('default', () => (
    <EditorToolbarDivider className={text('className', '')}>
      EditorToolbarDivider
    </EditorToolbarDivider>
  ));
