import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import EntityListItem from './EntityListItem';
import DropdownList from '../../Dropdown/DropdownList';
import DropdownListItem from '../../Dropdown/DropdownListItem';
import CardDragHandle from './../../Card/CardDragHandle';

storiesOf('Components/EntityList/EntityListItem', module)
  .addParameters({
    propTypes: EntityListItem['__docgenInfo'],
    component: EntityListItem,
  })
  .add('default', () => (
    <EntityListItem
      className={text('className', '')}
      title={text('title', 'My title')}
      description={text('description', 'My description')}
      contentType={text('contentType', 'My content type')}
      thumbnailUrl={text('thumbnailUrl', 'https://via.placeholder.com/400x400')}
      thumbnailAltText={text('thumbnailAltText', 'My thumbnail text')}
      isActionsDisabled={boolean('isActionsDisabled', false)}
      withThumbnail={boolean('withThumbnail', true)}
      entityType={select(
        'entityType',
        {
          asset: 'asset',
          entry: 'entry',
          Release: 'Release',
        },
        'entry',
      )}
      status={select(
        'status',
        {
          archived: 'archived',
          changed: 'changed',
          draft: 'draft',
          published: 'published',
          default: null,
        },
        'published',
      )}
      dropdownListElements={
        <DropdownList>
          <DropdownListItem isTitle>Actions</DropdownListItem>
          <DropdownListItem onClick={action('Edit onClick')}>
            Edit
          </DropdownListItem>
          <DropdownListItem onClick={action('Download onClick')}>
            Download
          </DropdownListItem>
          <DropdownListItem onClick={action('Remove onClick')}>
            Remove
          </DropdownListItem>
        </DropdownList>
      }
      withDragHandle={boolean('withDragHandle', false)}
      isDragActive={boolean('isDragActive', false)}
      isLoading={boolean('isLoading', false)}
      onClick={action('EntityListItem onClick')}
      href={text('href', '')}
    />
  ))
  .add('with custom CardDragHandle', () => (
    <EntityListItem
      className={text('className', '')}
      title={text('title', 'My title')}
      description={text('description', 'My description')}
      contentType={text('contentType', 'My content type')}
      thumbnailUrl={text('thumbnailUrl', 'https://via.placeholder.com/400x400')}
      thumbnailAltText={text('thumbnailAltText', 'My thumbnail text')}
      isActionsDisabled={boolean('isActionsDisabled', false)}
      withThumbnail={boolean('withThumbnail', true)}
      entityType={select(
        'entityType',
        {
          asset: 'asset',
          entry: 'entry',
          Release: 'Release',
        },
        'entry',
      )}
      status={select(
        'status',
        {
          archived: 'archived',
          changed: 'changed',
          draft: 'draft',
          published: 'published',
          default: null,
        },
        'published',
      )}
      dropdownListElements={
        <DropdownList>
          <DropdownListItem isTitle>Actions</DropdownListItem>
          <DropdownListItem onClick={action('Edit onClick')}>
            Edit
          </DropdownListItem>
          <DropdownListItem onClick={action('Download onClick')}>
            Download
          </DropdownListItem>
          <DropdownListItem onClick={action('Remove onClick')}>
            Remove
          </DropdownListItem>
        </DropdownList>
      }
      cardDragHandleComponent={<CardDragHandle>Reorder card</CardDragHandle>}
      isDragActive={boolean('isDragActive', false)}
      isLoading={boolean('isLoading', false)}
      onClick={action('EntityListItem onClick')}
      href={text('href', '')}
    />
  ));
