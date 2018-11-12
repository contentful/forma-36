import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { withNotes } from '@storybook/addon-notes';
import ShortTextSingleLineNotes from './Notes/ShortTextSingleLine.md';
import ShortTextURLNotes from './Notes/ShortTextURL.md';
import ShortTextDropdownNotes from './Notes/ShortTextDropdown.md';
import ShortTextRadioNotes from './Notes/ShortTextRadio.md';
import ShortTextSlugNotes from './Notes/ShortTextSlug.md';
import ShortTextOoyalaNotes from './Notes/ShortTextOoyala.md';
import ShortTextListListNotes from './Notes/ShortTextListList.md';
import ShortTextListCheckboxNotes from './Notes/ShortTextListCheckbox.md';
import ShortTextListTagsNotes from './Notes/ShortTextListTags.md';
import LongTextMultipleLineNotes from './Notes/LongTextMultipleLine.md';
import LongTextMarkdownNotes from './Notes/LongTextMarkdown.md';

storiesOf('Blueprints|[TBA] WidgetsText', module)
  .addDecorator(
    host({
      align: 'center top',
      cropMarks: false,
    }),
  )
  .add(
    'Short text - Single line',
    withNotes(ShortTextSingleLineNotes)(() => (
      <div>
        <img
          src="https://contentful.atlassian.net/wiki/download/attachments/412385434/Screen%20Shot%202018-04-04%20at%2016.11.10.png?version=1&modificationDate=1522851085926&cacheVersion=1&api=v2"
          alt="Short text - Single line"
        />
      </div>
    )),
  )
  .add(
    'Short text - URL',
    withNotes(ShortTextURLNotes)(() => (
      <div>
        <img
          src="https://contentful.atlassian.net/wiki/download/attachments/412385434/Screen%20Shot%202018-04-04%20at%2016.12.07.png?version=1&modificationDate=1522851153691&cacheVersion=1&api=v2"
          alt="Short text - URL"
        />
      </div>
    )),
  )
  .add(
    'Short text - Dropdown',
    withNotes(ShortTextDropdownNotes)(() => (
      <div>
        <img
          src="https://contentful.atlassian.net/wiki/download/attachments/412385434/Screen%20Shot%202018-04-04%20at%2016.13.23.png?version=1&modificationDate=1522851214783&cacheVersion=1&api=v2"
          alt="Short text - Dropdown"
        />
      </div>
    )),
  )
  .add(
    'Short text - Radio',
    withNotes(ShortTextRadioNotes)(() => (
      <div>
        <img
          src="https://contentful.atlassian.net/wiki/download/attachments/412385434/Screen%20Shot%202018-04-04%20at%2016.14.57.png?version=1&modificationDate=1522851328395&cacheVersion=1&api=v2"
          alt="Short text - Radio"
        />
      </div>
    )),
  )
  .add(
    'Short text - Slug',
    withNotes(ShortTextSlugNotes)(() => (
      <div>
        <img
          src="https://contentful.atlassian.net/wiki/download/attachments/412385434/Screen%20Shot%202018-04-04%20at%2016.16.20.png?version=1&modificationDate=1522851392817&cacheVersion=1&api=v2"
          alt="Short text - Slug"
        />
      </div>
    )),
  )
  .add(
    'Short text - Ooyala',
    withNotes(ShortTextOoyalaNotes)(() => (
      <div>
        <img
          src="https://contentful.atlassian.net/wiki/download/attachments/412385434/Screen%20Shot%202018-04-04%20at%2016.18.18.png?version=1&modificationDate=1522851517022&cacheVersion=1&api=v2"
          alt="Short text - Ooyala"
        />
      </div>
    )),
  )
  .add(
    'Short text, list - List',
    withNotes(ShortTextListListNotes)(() => (
      <div>
        <img
          src="https://contentful.atlassian.net/wiki/download/attachments/412385434/Screen%20Shot%202018-04-04%20at%2016.18.51.png?version=1&modificationDate=1522851563175&cacheVersion=1&api=v2"
          alt="Short text - List"
        />
      </div>
    )),
  )
  .add(
    'Short text, list - Checkbox',
    withNotes(ShortTextListCheckboxNotes)(() => (
      <div>
        <img
          src="https://contentful.atlassian.net/wiki/download/attachments/412385434/Screen%20Shot%202018-04-04%20at%2016.19.55.png?version=1&modificationDate=1522851607826&cacheVersion=1&api=v2"
          alt="Short text, list - Checkbox"
        />
      </div>
    )),
  )
  .add(
    'Short text, list - Tags',
    withNotes(ShortTextListTagsNotes)(() => (
      <div>
        <img
          src="https://contentful.atlassian.net/wiki/download/attachments/412385434/Screen%20Shot%202018-04-04%20at%2016.21.14.png?version=1&modificationDate=1522851699157&cacheVersion=1&api=v2"
          alt="Short text, list - Tags"
        />
      </div>
    )),
  )
  .add(
    'Long text - Multiple line',
    withNotes(LongTextMultipleLineNotes)(() => (
      <div>
        <img
          src="https://contentful.atlassian.net/wiki/download/attachments/412385434/Screen%20Shot%202018-04-04%20at%2016.23.08.png?version=1&modificationDate=1522851812959&cacheVersion=1&api=v2"
          alt="Long text - Multiple line"
        />
      </div>
    )),
  )
  .add(
    'Long text - Markdown',
    withNotes(LongTextMarkdownNotes)(() => (
      <div>
        <img
          src="https://contentful.atlassian.net/wiki/download/attachments/412385434/Screen%20Shot%202018-04-04%20at%2016.24.13.png?version=1&modificationDate=1522851884856&cacheVersion=1&api=v2"
          alt="Long text - Multiple line"
        />
      </div>
    )),
  );
