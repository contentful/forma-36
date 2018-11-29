import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { withNotes } from '@storybook/addon-notes';
import { text, select } from '@storybook/addon-knobs';
import NoteNotes from './Note.md';
import Note from './Note';

storiesOf('Components|Note', module)
  .addDecorator(
    host({
      align: 'center top',
      cropMarks: false,
    }),
  )
  .add(
    'default',
    withNotes({ markdown: NoteNotes })(() => (
      <Note
        noteType={select(
          'noteType',
          [Note.Type.POSITIVE, Note.Type.NEGATIVE, Note.Type.PRIMARY],
          Note.defaultProps.noteType,
        )}
        title={text('title', '')}
      >
        {text(
          'children',
          'A piece of information that is relevant to the context the user is currently in.',
        )}
      </Note>
    )),
  )
  .add(
    'all notes',
    withNotes({ markdown: NoteNotes })(() => (
      <div>
        <Note>
          A piece of information that is relevant to the context the user is
          currently in.
        </Note>
        <div style={{ marginTop: 20 }} />
        <Note noteType={Note.Type.NEGATIVE}>
          A piece of information that is relevant to the context the user is
          currently in.
        </Note>
        <div style={{ marginTop: 20 }} />
        <Note noteType={Note.Type.POSITIVE}>
          A piece of information that is relevant to the context the user is
          currently in.
        </Note>
        <div style={{ marginTop: 60 }} />
        <Note title="Short, yet succint title">
          A piece of information that is relevant to the context the user is
          currently in. If you like it then you should put{' '}
          <a href="https://contentful.com">a link</a> in it.
        </Note>
        <div style={{ marginTop: 20 }} />
        <Note noteType={Note.Type.NEGATIVE} title="Short, yet succint title">
          A piece of information that is relevant to the context the user is
          currently in. If you like it then you should put{' '}
          <a href="https://contentful.com">a link</a> in it.
        </Note>
        <div style={{ marginTop: 20 }} />
        <Note noteType={Note.Type.POSITIVE} title="Short, yet succint title">
          A piece of information that is relevant to the context the user is
          currently in. If you like it then you should put{' '}
          <a href="https://contentful.com">a link</a> in it.
        </Note>
      </div>
    )),
  );
