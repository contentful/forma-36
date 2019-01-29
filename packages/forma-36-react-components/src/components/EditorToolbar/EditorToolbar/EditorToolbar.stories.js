import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';

import EditorToolbar from './EditorToolbar';
import Button from '../../Button';
import EditorToolbarButton from '../EditorToolbarButton';

storiesOf('Components|EditorToolbar', module)
  .addDecorator(
    host({
      align: 'center middle',
      cropMarks: false,
      width: '700px',
    }),
  )
  .add(
    'default',
    withInfo()(() => (
      <EditorToolbar
        extraClassNames={text('Extra Class Names', '')}
        style={{ justifyContent: 'space-between' }}
      >
        <div>
          <EditorToolbarButton
            icon="FormatBold"
            tooltip="Bold"
            label="Bold"
            isActive={boolean('Bold isActive', false)}
          />
          <EditorToolbarButton
            icon="FormatItalic"
            tooltip="Italic"
            label="Italic"
            isActive={boolean('Italic isActive', false)}
          />
          <EditorToolbarButton
            icon="FormatUnderlined"
            tooltip="Underlined"
            label="Underlined"
            isActive={boolean('Underline isActive', false)}
          />
        </div>
        <div>
          <Button size="small" buttonType="muted">
            Example button
          </Button>
        </div>
      </EditorToolbar>
    )),
  );
