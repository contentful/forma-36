import React from 'react';
import { storiesOf } from '@storybook/react';
import MarkdownIt from 'markdown-it';

import DocPage from './../../components/DocPage/DocPage';
import Notes from './General.md';

const md = new MarkdownIt();

storiesOf('Documentation|General', module).add('General', () => (
  <DocPage>
    <div dangerouslySetInnerHTML={{ __html: md.render(Notes) }} />
  </DocPage>
));
