import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import notes from './Note.md';
import Note from './Note';

storiesOf('Components|Note', module)
  .addParameters({
    propTypes: Note['__docgenInfo'],
  })
  .add(
    'default',
    () => (
      <Note
        noteType={select(
          'noteType',
          [
            Note.Type.POSITIVE,
            Note.Type.NEGATIVE,
            Note.Type.WARNING,
            Note.Type.PRIMARY,
          ],
          Note.defaultProps.noteType,
        )}
        title={text('title', '')}
      >
        {text(
          'children',
          'A piece of information that is relevant to the context the user is currently in.',
        )}
      </Note>
    ),
    { notes },
  )
  .add(
    'all notes',
    () => (
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
        <Note noteType={Note.Type.WARNING}>
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
        <Note noteType={Note.Type.WARNING} title="Short, yet succint title">
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
    ),
    { notes },
  );
