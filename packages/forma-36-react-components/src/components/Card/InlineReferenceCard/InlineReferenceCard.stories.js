import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, selectV2, boolean } from '@storybook/addon-knobs/react';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';

import InlineReferenceCard from './InlineReferenceCard';
import DropdownListItem from '../../Dropdown/DropdownListItem';

storiesOf('Components|Card/InlineReferenceCard', module)
  .addDecorator(
    host({
      align: 'center middle',
      cropMarks: false,
    }),
  )
  .add(
    'default',
    withInfo()(() => (
      <div
        style={{
          lineHeight: 1.5,
          display: 'inline-block',
          maxWidth: 600,
          fontSize: 14,
        }}
      >
        Fusce a odio pharetra, porta justo vel, maximus ex. In pellentesque a
        orci et pretium. Praesent libero lorem, gravida eu pulvinar id, eleifend
        a sapien. &nbsp;
        <InlineReferenceCard
          extraClassNames={text('Extra Class Names', '')}
          isLoading={boolean('is Loading', false)}
          isSelected={boolean('is selected', false)}
          status={selectV2(
            'Type',
            {
              published: 'published',
              draft: 'draft',
              archived: 'archived',
              changed: 'changed',
            },
            'published',
          )}
          dropdownListItemNodes={[
            <DropdownListItem key="edit" onClick={() => {}}>
              Edit
            </DropdownListItem>,
            <DropdownListItem key="remove" onClick={() => {}}>
              Remove
            </DropdownListItem>,
          ]}
        >
          {text('Title', 'Title of inline reference')}
        </InlineReferenceCard>
        &nbsp; Nulla a ultrices nulla, vel blandit sapien. Etiam eget massa dui.
        Fusce id nisl quam. Integer nec mi arcu. Nullam lacinia est lectus, a
        euismod purus eleifend id. Fusce a odio pharetra, porta justo vel,
        maximus ex. In pellentesque a orci et pretium. Praesent libero lorem,
        gravida eu pulvinar id, eleifend a sapien. &nbsp;
        <InlineReferenceCard
          extraClassNames={text('Extra Class Names', '')}
          isLoading={boolean('is Loading', false)}
          isSelected={boolean('is selected', false)}
          status={selectV2(
            'Type',
            {
              published: 'published',
              draft: 'draft',
              archived: 'archived',
              changed: 'changed',
            },
            'published',
          )}
          dropdownListItemNodes={[
            <DropdownListItem key="edit" onClick={() => {}}>
              Edit
            </DropdownListItem>,
            <DropdownListItem key="remove" onClick={() => {}}>
              Remove
            </DropdownListItem>,
          ]}
        >
          {text('Title', 'Title of inline reference')}
        </InlineReferenceCard>
        &nbsp; Nulla a ultrices nulla, vel blandit sapien. Etiam eget massa dui.
        Fusce id nisl quam. Integer nec mi arcu. Nullam lacinia est lectus, a
        euismod purus eleifend id.
      </div>
    )),
  );
