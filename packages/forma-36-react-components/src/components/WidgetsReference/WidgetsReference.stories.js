import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { withNotes } from '@storybook/addon-notes';
import ReferenceEntryLinkNotes from './Notes/ReferenceEntryLink.md';
import ReferenceEntryCardNotes from './Notes/ReferenceEntryCard.md';
import ReferenceManyEntryLinksListNotes from './Notes/ReferenceManyEntryLinksList.md';
import ReferenceManyEntryCardsNotes from './Notes/ReferenceManyEntryCards.md';

storiesOf('Blueprints|[TBA] WidgetsReference', module)
  .addDecorator(
    host({
      align: 'center top',
      cropMarks: false,
    }),
  )
  .add(
    'Reference - Entry link',
    withNotes(ReferenceEntryLinkNotes)(() => (
      <div>
        <img
          src="https://contentful.atlassian.net/wiki/download/attachments/412385434/Screen%20Shot%202018-04-04%20at%2016.39.43.png?version=1&modificationDate=1522852835654&cacheVersion=1&api=v2"
          alt="Reference - Entry link"
        />
      </div>
    )),
  )
  .add(
    'Reference - Entry Card',
    withNotes(ReferenceEntryCardNotes)(() => (
      <div>
        <img
          src="https://contentful.atlassian.net/wiki/download/attachments/412385434/Screen%20Shot%202018-04-04%20at%2016.41.03.png?version=1&modificationDate=1522852893639&cacheVersion=1&api=v2"
          alt="Reference - Entry Card"
        />
      </div>
    )),
  )
  .add(
    'Reference, many - Entry links lists',
    withNotes(ReferenceManyEntryLinksListNotes)(() => (
      <div>
        <img
          src="https://contentful.atlassian.net/wiki/download/attachments/412385434/Screen%20Shot%202018-04-04%20at%2016.42.33.png?version=1&modificationDate=1522852983434&cacheVersion=1&api=v2"
          alt="Reference, many - Entry links lists"
        />
      </div>
    )),
  )
  .add(
    'Reference, many - Entry cards',
    withNotes(ReferenceManyEntryCardsNotes)(() => (
      <div>
        <img
          src="https://contentful.atlassian.net/wiki/download/attachments/412385434/Screen%20Shot%202018-04-04%20at%2016.43.42.png?version=1&modificationDate=1522853037975&cacheVersion=1&api=v2"
          alt="Reference, many - Entry cards"
        />
      </div>
    )),
  );
