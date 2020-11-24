import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import AssetCard from './AssetCard';
import Icon from '../../Icon';
import DropdownList from '../../Dropdown/DropdownList';
import DropdownListItem from '../../Dropdown/DropdownListItem';
import CardDragHandle from './../CardDragHandle';
import { types } from '../../Asset/Asset';

storiesOf('Components/Card/AssetCard', module)
  .addParameters({
    propTypes: AssetCard['__docgenInfo'],
    component: AssetCard,
  })
  .add('default', () => (
    <AssetCard
      className={text('className', '')}
      status={select(
        'status',
        {
          Draft: 'draft',
          Changed: 'changed',
          Published: 'published',
          Archived: 'archived',
        },
        'published',
      )}
      type={select('type', types, 'image')}
      isLoading={boolean('isLoading', false)}
      src={text('src', 'https://placekitten.com/200/300')}
      title={text('title', 'Image of a cat')}
      withDragHandle={boolean('withDragHandle', false)}
      isDragActive={boolean('isDragActive', false)}
      size={select(
        'size',
        {
          small: 'small',
          default: 'default',
        },
        'default',
      )}
    />
  ))
  .add('with custom CardDragHandle', () => (
    <AssetCard
      className={text('className', '')}
      status={select(
        'status',
        {
          Draft: 'draft',
          Changed: 'changed',
          Published: 'published',
          Archived: 'archived',
        },
        'published',
      )}
      type={select('type', types, 'image')}
      isLoading={boolean('isLoading', false)}
      src={text('src', 'https://placekitten.com/200/300')}
      title={text('title', 'Image of a cat')}
      cardDragHandleComponent={<CardDragHandle>Reorder card</CardDragHandle>}
      isDragActive={boolean('isDragActive', false)}
      size={select(
        'size',
        {
          small: 'small',
          default: 'default',
        },
        'default',
      )}
    />
  ))
  .add('with dropdownListElements', () => (
    <AssetCard
      className={text('className', '')}
      status={select(
        'status',
        {
          Draft: 'draft',
          Changed: 'changed',
          Published: 'published',
          Archived: 'archived',
        },
        'published',
      )}
      type={select('type', types, 'image')}
      isLoading={boolean('isLoading', false)}
      src={text('src', 'https://placekitten.com/200/300')}
      title={text('title', 'Image of a cat')}
      withDragHandle={boolean('withDragHandle', false)}
      isDragActive={boolean('isDragActive', false)}
      dropdownListElements={
        <React.Fragment>
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
          <DropdownList border="top">
            <DropdownListItem isTitle>File info</DropdownListItem>
            <DropdownListItem>Asset name</DropdownListItem>
            <DropdownListItem>Asset type</DropdownListItem>
            <DropdownListItem>Asset size</DropdownListItem>
            <DropdownListItem>Asset resolution</DropdownListItem>
          </DropdownList>
        </React.Fragment>
      }
      size={select(
        'size',
        {
          small: 'small',
          default: 'default',
        },
        'default',
      )}
    />
  ))
  .add('with statusIcon', () => (
    <AssetCard
      className={text('className', '')}
      status={select(
        'status',
        {
          Draft: 'draft',
          Changed: 'changed',
          Published: 'published',
          Archived: 'archived',
        },
        'published',
      )}
      statusIcon="Clock"
      type={select('type', types, 'image')}
      isLoading={boolean('isLoading', false)}
      src={text('src', 'https://placekitten.com/200/300')}
      title={text('title', 'Image of a cat')}
      withDragHandle={boolean('withDragHandle', false)}
      isDragActive={boolean('isDragActive', false)}
      size={select(
        'size',
        {
          small: 'small',
          default: 'default',
        },
        'default',
      )}
    />
  ))
  .add('with a custom statusIcon', () => (
    <AssetCard
      className={text('className', '')}
      status={select(
        'status',
        {
          Draft: 'draft',
          Changed: 'changed',
          Published: 'published',
          Archived: 'archived',
        },
        'published',
      )}
      statusIcon={<Icon icon="Calendar" />}
      type={select('type', types, 'image')}
      isLoading={boolean('isLoading', false)}
      src={text('src', 'https://placekitten.com/200/300')}
      title={text('title', 'Image of a cat')}
      withDragHandle={boolean('withDragHandle', false)}
      isDragActive={boolean('isDragActive', false)}
      size={select(
        'size',
        {
          small: 'small',
          default: 'default',
        },
        'default',
      )}
    />
  ));
