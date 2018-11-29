import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';
import MarkdownIt from 'markdown-it';

import DocPage from './../../components/DocPage/DocPage';
import Notes from './General.md';

const md = new MarkdownIt();

storiesOf('Documentation|General', module)
  .addDecorator(
    host({
      align: 'center top',
      cropMarks: false,
      width: 800,
    }),
  )
  .add(
    'General',
    withInfo()(() => (
      <DocPage>
        <div dangerouslySetInnerHTML={{ __html: md.render(Notes) }} />
      </DocPage>
    )),
  );
