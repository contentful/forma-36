import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { withNotes } from '@storybook/addon-notes';
import DateOnlyNotes from './Notes/DateOnly.md';
import DateTimeWithoutTimezoneAMPMNotes from './Notes/DateTimeWithoutTimezoneAMPM.md';
import DateTimeWithoutTimezone24HNotes from './Notes/DateTimeWithoutTimezone24H.md';
import DateTimeWithTimezoneAMPMNotes from './Notes/DateTimeWithTimezoneAMPM.md';

storiesOf('Blueprints|[TBA] WidgetsDateTime', module)
  .addDecorator(
    host({
      align: 'center top',
      cropMarks: false,
    }),
  )
  .add(
    'DateTime - Date only',
    withNotes({ markdown: DateOnlyNotes })(() => (
      <div>
        <img
          src="https://contentful.atlassian.net/wiki/download/attachments/412385434/Screen%20Shot%202018-04-04%20at%2016.27.45.png?version=1&modificationDate=1522852124689&cacheVersion=1&api=v2"
          alt="DateTime - Date only"
        />
      </div>
    )),
  )
  .add(
    'DateTime - Date and time without timezone (AM/PM)',
    withNotes({ markdown: DateTimeWithoutTimezoneAMPMNotes })(() => (
      <div>
        <img
          src="https://contentful.atlassian.net/wiki/download/attachments/412385434/Screen%20Shot%202018-04-04%20at%2016.27.54.png?version=1&modificationDate=1522852172921&cacheVersion=1&api=v2"
          alt="DateTime - Date and time without timezone (AM/PM)"
        />
      </div>
    )),
  )
  .add(
    'DateTime - Date and time without timezone (24H)',
    withNotes({ markdown: DateTimeWithoutTimezone24HNotes })(() => (
      <div>
        <img
          src="https://contentful.atlassian.net/wiki/download/attachments/412385434/Screen%20Shot%202018-04-04%20at%2016.27.58.png?version=1&modificationDate=1522852223093&cacheVersion=1&api=v2"
          alt="DateTime - Date and time without timezone (24H)"
        />
      </div>
    )),
  )
  .add(
    'DateTime - Date and time with timezone (AM/PM)',
    withNotes({ markdown: DateTimeWithTimezoneAMPMNotes })(() => (
      <div>
        <img
          src="https://contentful.atlassian.net/wiki/download/attachments/412385434/Screen%20Shot%202018-04-04%20at%2016.28.02.png?version=1&modificationDate=1522852250909&cacheVersion=1&api=v2"
          alt="DateTime - Date and time with timezone (AM/PM)"
        />
      </div>
    )),
  );
