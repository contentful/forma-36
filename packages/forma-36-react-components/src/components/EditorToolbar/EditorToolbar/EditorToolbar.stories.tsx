import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';

import EditorToolbar from './EditorToolbar';
import Button from '../../Button';
import EditorToolbarButton from '../EditorToolbarButton';

storiesOf('Components|EditorToolbar', module)
  .addParameters({
    propTypes: [
      EditorToolbar['__docgenInfo'],
      EditorToolbarButton['__docgenInfo'],
    ],
  })
  .add('default', () => (
    <EditorToolbar
      className={text('className', '')}
      style={{ justifyContent: 'space-between' }}
    >
      <div>
        <EditorToolbarButton
          icon="FormatBold"
          tooltip="Bold"
          label="Bold"
          isActive={boolean('isActive (bold)', false)}
        />
        <EditorToolbarButton
          icon="FormatItalic"
          tooltip="Italic"
          label="Italic"
          isActive={boolean('isActive (italic)', false)}
        />
        <EditorToolbarButton
          icon="FormatUnderlined"
          tooltip="Underlined"
          label="Underlined"
          isActive={boolean('isActive (underline)', false)}
        />
      </div>
      <div>
        <Button size="small" buttonType="muted">
          Example button
        </Button>
      </div>
    </EditorToolbar>
  ));
