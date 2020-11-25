import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import EntryCard from './EntryCard';
import CardDragHandle from './../CardDragHandle';
import DropdownList from '../../Dropdown/DropdownList';
import DropdownListItem from '../../Dropdown/DropdownListItem';

storiesOf('Components/Card/EntryCard', module)
  .addParameters({
    propTypes: EntryCard['__docgenInfo'],
    component: EntryCard,
  })
  .add('default', () => (
    <div>
      <EntryCard
        title={text('title', 'Closer')}
        description={text(
          'description',
          'Closer is the second and final studio album by English rock band Joy Division. It was released on 18 July 1980 on Factory Records, following the May 1980 suicide of lead singer Ian Curtis. The album was produced by Martin Hannett.',
        )}
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
        statusIcon={text('statusIcon', 'Clock')}
        contentType={text('contentType', 'Album')}
        onClick={!boolean('loading', false) ? action('onClick') : undefined}
        dropdownListElements={
          <React.Fragment>
            <DropdownList>
              <DropdownListItem isTitle>Actions</DropdownListItem>
              <DropdownListItem href="#">Edit (with href)</DropdownListItem>
              <DropdownListItem onClick={action('Download onClick')}>
                Download
              </DropdownListItem>
              <DropdownListItem onClick={action('Remove onClick')}>
                Remove
              </DropdownListItem>
            </DropdownList>
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
          </React.Fragment>
        }
        withDragHandle={boolean('withDragHandle', false)}
        isDragActive={boolean('isDragActive', false)}
        className={text('className', '')}
        loading={boolean('loading', false)}
        size={select(
          'size',
          {
            default: 'default',
            small: 'small',
          },
          'default',
        )}
      />
    </div>
  ))
  .add('with custom CardDragHandle', () => (
    <div>
      <EntryCard
        title={text('title', 'Closer')}
        description={text(
          'description',
          'Closer is the second and final studio album by English rock band Joy Division. It was released on 18 July 1980 on Factory Records, following the May 1980 suicide of lead singer Ian Curtis. The album was produced by Martin Hannett.',
        )}
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
        contentType={text('contentType', 'Album')}
        onClick={!boolean('loading', false) ? action('onClick') : undefined}
        cardDragHandleComponent={<CardDragHandle>Reorder card</CardDragHandle>}
        dropdownListElements={
          <React.Fragment>
            <DropdownList>
              <DropdownListItem isTitle>Actions</DropdownListItem>
              <DropdownListItem href="#">Edit (with href)</DropdownListItem>
              <DropdownListItem onClick={action('Download onClick')}>
                Download
              </DropdownListItem>
              <DropdownListItem onClick={action('Remove onClick')}>
                Remove
              </DropdownListItem>
            </DropdownList>
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
          </React.Fragment>
        }
        isDragActive={boolean('isDragActive', false)}
        className={text('className', '')}
        loading={boolean('loading', false)}
        size={select(
          'size',
          {
            default: 'default',
            small: 'small',
          },
          'default',
        )}
      />
    </div>
  ))
  .add('with thumbnailElement', () => (
    <div>
      <EntryCard
        title={text('title', 'Closer')}
        description={text(
          'description',
          'Closer is the second and final studio album by English rock band Joy Division. It was released on 18 July 1980 on Factory Records, following the May 1980 suicide of lead singer Ian Curtis. The album was produced by Martin Hannett.',
        )}
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
        contentType={text('contentType', 'Album')}
        thumbnailElement={
          <img
            src="data:image/jpeg;base64,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"
            alt="Joy Division - Closer album cover"
          />
        }
        onClick={!boolean('loading', false) ? action('onClick') : undefined}
        withDragHandle={boolean('withDragHandle', false)}
        isDragActive={boolean('isDragActive', false)}
        dropdownListElements={
          <DropdownList>
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
        loading={boolean('loading', false)}
        className={text('className', '')}
      />
    </div>
  ))
  .add('with auto-sizing', () => (
    <div>
      <EntryCard
        size={select(
          'size',
          { Auto: 'auto', Default: 'default', Small: 'small' },
          'auto',
        )}
        title={text(
          'title',
          'Play around with description and thumbnail to see auto-sizing in action',
        )}
        description={text('description', '')}
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
        contentType={text('contentType', 'Album')}
        thumbnailElement={
          boolean('withThumbnail', false) ? (
            <img
              src="data:image/jpeg;base64,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"
              alt="Joy Division - Closer album cover"
            />
          ) : undefined
        }
        dropdownListElements={
          <DropdownList>
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
      />
    </div>
  ));
