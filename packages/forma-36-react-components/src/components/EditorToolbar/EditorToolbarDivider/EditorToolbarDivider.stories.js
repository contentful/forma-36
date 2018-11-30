import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';

import EditorToolbarDivider from './EditorToolbarDivider';

storiesOf('Components|EditorToolbar/EditorToolbarDivider', module)
  .addDecorator(
    host({
      align: 'center middle',
      cropMarks: false,
    }),
  )
  .add(
    'default',
    withInfo()(() => (
      <EditorToolbarDivider extraClassNames={text('Extra Class Names', '')}>
        EditorToolbarDivider
      </EditorToolbarDivider>
    )),
  );
