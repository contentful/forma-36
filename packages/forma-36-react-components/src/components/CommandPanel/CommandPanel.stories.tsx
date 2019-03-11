import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, array, object } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';

import CommandPanel from './CommandPanel';
import notes from './CommandPanel.md';

const test = [
  {
    label: 'Add existing video (block)',
    group: 'Add video',
  },
  {
    label: 'Add existing video (inline)',
    group: 'Add video',
    callback: () => {
      console.log('testing');
    },
  },
  {
    label: 'Add existing other content type (block)',
    group: 'Add other content type',
  },
  {
    label: 'Add existing other content type (inline)',
    group: 'Add other content type',
    callback: () => {
      console.log('testing');
    },
  },
];

storiesOf('Components|CommandPanel', module)
  .addDecorator((story, context) => withInfo()(story)(context))
  .addDecorator((story, context) =>
    withNotes({ markdown: notes })(story)(context),
  )
  .add('default', () => (
    <div>
      <div contentEditable>/add</div>
      <CommandPanel
        searchString={text('Search string', '')}
        extraClassNames={text('Extra Class Names', '')}
        items={object('Items', test)}
      />
    </div>
  ));
