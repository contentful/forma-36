import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import EditorToolbarDivider from './EditorToolbarDivider';

storiesOf('Components|EditorToolbar/EditorToolbarDivider', module)
  .addDecorator(withInfo)
  .add('default', () => (
    <EditorToolbarDivider extraClassNames={text('Extra Class Names', '')}>
      EditorToolbarDivider
    </EditorToolbarDivider>
  ));
