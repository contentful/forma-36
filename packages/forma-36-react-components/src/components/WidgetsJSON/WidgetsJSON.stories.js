import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { withNotes } from '@storybook/addon-notes';
import JSONObjectDefaultNotes from './Notes/JSONObjectDefault.md';

storiesOf('Blueprints|[TBA] WidgetsJSON', module)
  .addDecorator(
    host({
      align: 'center top',
      cropMarks: false,
    }),
  )
  .add(
    'JSON object - Default',
    withNotes({ markdown: JSONObjectDefaultNotes })(() => (
      <div>
        <img
          src="https://contentful.atlassian.net/wiki/download/attachments/412385434/Screen%20Shot%202018-04-04%20at%2016.37.02.png?version=1&modificationDate=1522852636461&cacheVersion=1&api=v2"
          alt="JSON object - Default"
        />
      </div>
    )),
  );
