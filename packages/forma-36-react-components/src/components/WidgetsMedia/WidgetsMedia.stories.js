import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { withNotes } from '@storybook/addon-notes';
import MediaDefaultNotes from './Notes/MediaDefault.md';
import MediaManyAssetLinkListNotes from './Notes/MediaManyAssetLinkList.md';
import MediaManyAssetGalleryNotes from './Notes/MediaManyAssetGallery.md';

storiesOf('Blueprints|[TBA] WidgetsMedia', module)
  .addDecorator(
    host({
      align: 'center top',
      cropMarks: false,
    }),
  )
  .add(
    'Media - Default',
    withNotes(MediaDefaultNotes)(() => (
      <div>
        <img
          src="https://contentful.atlassian.net/wiki/download/attachments/412385434/Screen%20Shot%202018-04-04%20at%2016.33.12.png?version=1&modificationDate=1522852430682&cacheVersion=1&api=v2"
          alt="Media - Default"
        />
      </div>
    )),
  )
  .add(
    'Media, many - Asset link list',
    withNotes(MediaManyAssetLinkListNotes)(() => (
      <div>
        <img
          src="https://contentful.atlassian.net/wiki/download/attachments/412385434/Screen%20Shot%202018-04-04%20at%2016.34.18.png?version=1&modificationDate=1522852471466&cacheVersion=1&api=v2"
          alt="Media, many - Asset link list"
        />
      </div>
    )),
  )
  .add(
    'Media, many - Asset gallery',
    withNotes(MediaManyAssetGalleryNotes)(() => (
      <div>
        <img
          src="https://contentful.atlassian.net/wiki/download/attachments/412385434/Screen%20Shot%202018-04-04%20at%2016.35.02.png?version=1&modificationDate=1522852514552&cacheVersion=1&api=v2"
          alt="Media, many - Asset gallery"
        />
      </div>
    )),
  );
