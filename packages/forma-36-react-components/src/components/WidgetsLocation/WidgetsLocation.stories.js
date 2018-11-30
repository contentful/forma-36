import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { withNotes } from '@storybook/addon-notes';
import LocationNotes from './Notes/Location.md';

storiesOf('Blueprints|[TBA] WidgetsLocation', module)
  .addDecorator(
    host({
      align: 'center top',
      cropMarks: false,
    }),
  )
  .add(
    'Location - Location',
    withNotes({ markdown: LocationNotes })(() => (
      <div>
        <img
          src="https://contentful.atlassian.net/wiki/download/attachments/412385434/Screen%20Shot%202018-04-04%20at%2016.31.50.png?version=1&modificationDate=1522852358921&cacheVersion=1&api=v2"
          alt="Location - Location"
        />
      </div>
    )),
  );
