import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, selectV2, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';

import AssetCard from './AssetCard';
import DropdownList from './../../Dropdown/DropdownList';
import DropdownListItem from './../../Dropdown/DropdownListItem';
import { types } from '../../Asset/Asset';

storiesOf('Components|Card/AssetCard', module)
  .addDecorator(
    host({
      align: 'center middle',
      cropMarks: false,
    }),
  )
  .add(
    'default',
    withInfo()(() => (
      <AssetCard
        extraClassNames={text('Extra Class Names', '')}
        status={selectV2(
          'Status',
          {
            Draft: 'draft',
            Changed: 'changed',
            Published: 'published',
            Archived: 'archived',
          },
          'published',
        )}
        type={selectV2('Asset Type', types, 'archive')}
        isLoading={boolean('Is Loading', false)}
        src={text('Source', 'https://placekitten.com/200/300')}
        title={text('Title', 'Image of a cat')}
      />
    )),
  )
  .add(
    'with dropdownListElements',
    withInfo()(() => (
      <AssetCard
        extraClassNames={text('Extra Class Names', '')}
        status={selectV2(
          'Status',
          {
            Draft: 'draft',
            Changed: 'changed',
            Published: 'published',
            Archived: 'archived',
          },
          'published',
        )}
        type={selectV2('Asset Type', types, 'image')}
        isLoading={boolean('Is Loading', false)}
        src={text('Source', 'https://placekitten.com/200/300')}
        title={text('Title', 'Image of a cat')}
        dropdownListElements={
          <span>
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
          </span>
        }
      />
    )),
  );
