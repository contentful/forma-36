import React from 'react';
import { storiesOf } from '@storybook/react';
import MarkdownIt from 'markdown-it';
import Notes from './General.md';
import DocPage from '../../components/DocPage/DocPage';

const md = new MarkdownIt();

storiesOf('Documentation|General', module).add('General', () => (
  <DocPage>
    <div dangerouslySetInnerHTML={{ __html: md.render(Notes) }} />
  </DocPage>
));
