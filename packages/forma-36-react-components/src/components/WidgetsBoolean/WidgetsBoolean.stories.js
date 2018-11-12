import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { withNotes } from '@storybook/addon-notes';
import BooleanDefaultNotes from './Notes/BooleanDefault.md';

storiesOf('Blueprints|[TBA] WidgetsBoolean', module)
  .addDecorator(
    host({
      align: 'center top',
      cropMarks: false,
    }),
  )
  .add(
    'Boolean - Default',
    withNotes(BooleanDefaultNotes)(() => (
      <div>
        <img
          src="https://contentful.atlassian.net/wiki/download/attachments/412385434/Screen%20Shot%202018-04-04%20at%2016.35.44.png?version=1&modificationDate=1522852573776&cacheVersion=1&api=v2"
          alt="Boolean - Default"
        />
      </div>
    )),
  );
