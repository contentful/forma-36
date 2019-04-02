import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import InlineEntryCard from './InlineEntryCard';
import DropdownListItem from '../../Dropdown/DropdownListItem';
import DropdownList from '../../Dropdown/DropdownList';

storiesOf('Components|Card/InlineEntryCard', module)
  .addParameters({
    propTypes: InlineEntryCard['__docgenInfo'],
  })
  .add('default', () => (
    <div
      style={{
        lineHeight: 1.5,
        display: 'inline-block',
        maxWidth: 600,
        fontSize: 16,
      }}
    >
      Fusce a odio pharetra, porta justo vel, maximus ex. In pellentesque a orci
      et pretium. Praesent libero lorem, gravida eu pulvinar id, eleifend a
      sapien. &nbsp;
      <InlineEntryCard
        className={text('className', '')}
        isLoading={boolean('isLoading', false)}
        isSelected={boolean('isSelected', false)}
        status={select(
          'status',
          {
            published: 'published',
            draft: 'draft',
            archived: 'archived',
            changed: 'changed',
          },
          'published',
        )}
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
      >
        {text('children', 'Title of inline entry')}
      </InlineEntryCard>
      &nbsp; Nulla a ultrices nulla, vel blandit sapien. Etiam eget massa dui.
      Fusce id nisl quam. Integer nec mi arcu. Nullam lacinia est lectus, a
      euismod purus eleifend id. Fusce a odio pharetra, porta justo vel, maximus
      ex. In pellentesque a orci et pretium. Praesent libero lorem, gravida eu
      pulvinar id, eleifend a sapien. &nbsp;
      <InlineEntryCard
        className={text('className', '')}
        isLoading={boolean('isLoading', false)}
        isSelected={boolean('isSelected', false)}
        status={select(
          'status',
          {
            published: 'published',
            draft: 'draft',
            archived: 'archived',
            changed: 'changed',
          },
          'published',
        )}
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
      >
        {text('children', 'Title of inline entry')}
      </InlineEntryCard>
      &nbsp; Nulla a ultrices nulla, vel blandit sapien. Etiam eget massa dui.
      Fusce id nisl quam. Integer nec mi arcu. Nullam lacinia est lectus, a
      euismod purus eleifend id.
    </div>
  ));
