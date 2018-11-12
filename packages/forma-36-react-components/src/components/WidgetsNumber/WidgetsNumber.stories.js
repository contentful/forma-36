import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { withNotes } from '@storybook/addon-notes';
import IntegerNumberEditorNotes from './Notes/IntegerNumberEditor.md';
import IntegerRatingNotes from './Notes/IntegerRating.md';

storiesOf('Blueprints|[TBA] WidgetsNumber', module)
  .addDecorator(
    host({
      align: 'center top',
      cropMarks: false,
    }),
  )
  .add(
    'Integer - Number editor',
    withNotes(IntegerNumberEditorNotes)(() => (
      <div>
        <img
          src="https://contentful.atlassian.net/wiki/download/attachments/412385434/Screen%20Shot%202018-04-04%20at%2016.26.22.png?version=1&modificationDate=1522851996462&cacheVersion=1&api=v2"
          alt="Integer - Number editor"
        />
      </div>
    )),
  )
  .add(
    'Integer - Rating',
    withNotes(IntegerRatingNotes)(() => (
      <div>
        <img
          src="https://contentful.atlassian.net/wiki/download/attachments/412385434/Screen%20Shot%202018-04-04%20at%2016.27.07.png?version=1&modificationDate=1522852042372&cacheVersion=1&api=v2"
          alt="Integer - Rating"
        />
      </div>
    )),
  );
