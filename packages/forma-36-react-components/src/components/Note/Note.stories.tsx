import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';

import notes from './Note.md';
import Note from './Note';

storiesOf('Components/Note', module)
  .addParameters({
    propTypes: Note['__docgenInfo'],
  })
  .add(
    'default',
    () => (
      <Note
        noteType={select(
          'noteType',
          ['positive', 'negative', 'warning', 'primary'],
          Note.defaultProps.noteType,
        )}
        title={text('title', '')}
        hasCloseButton={boolean('hasCloseButton', false)}
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
        <Note noteType={'negative'}>
          A piece of information that is relevant to the context the user is
          currently in.
        </Note>
        <div style={{ marginTop: 20 }} />
        <Note noteType={'warning'}>
          A piece of information that is relevant to the context the user is
          currently in.
        </Note>
        <div style={{ marginTop: 20 }} />
        <Note noteType={'positive'}>
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
        <Note noteType={'negative'} title="Short, yet succint title">
          A piece of information that is relevant to the context the user is
          currently in. If you like it then you should put{' '}
          <a href="https://contentful.com">a link</a> in it.
        </Note>
        <div style={{ marginTop: 20 }} />
        <Note noteType={'warning'} title="Short, yet succint title">
          A piece of information that is relevant to the context the user is
          currently in. If you like it then you should put{' '}
          <a href="https://contentful.com">a link</a> in it.
        </Note>
        <div style={{ marginTop: 20 }} />
        <Note noteType={'positive'} title="Short, yet succint title">
          A piece of information that is relevant to the context the user is
          currently in. If you like it then you should put{' '}
          <a href="https://contentful.com">a link</a> in it.
        </Note>
      </div>
    ),
    { notes },
  );
