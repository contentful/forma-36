import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import Tag, { tagType } from './Tag';
import SectionHeading from '../Typography/SectionHeading';
import Flex from '../Flex/Flex';

storiesOf('Components/Tag', module)
  .addParameters({
    propTypes: Tag['__docgenInfo'],
    component: Tag,
  })
  .add('default', () => (
    <Tag
      tagType={select(
        'tagType',
        {
          'Primary (default)': 'primary',
          Positive: 'positive',
          Negative: 'negative',
          Warning: 'warning',
          Secondary: 'secondary',
          Muted: 'muted',
        },
        'primary',
      )}
      entityStatusType={select(
        'Entity Status Type',
        {
          Published: 'published',
          Archived: 'archived',
          draft: 'draft',
          changed: 'changed',
          deleted: 'deleted',
          'None (default)': undefined,
        },
        undefined,
      )}
      className={text('className', '')}
    >
      {text('Children', 'Published')}
    </Tag>
  ))
  .add('overview', () => (
    <>
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Tag types overview</SectionHeading>
      </Flex>
      {tagType.map((type, idx) => (
        <Flex marginBottom="spacingM" alignItems="center" key={idx}>
          <Flex marginRight="spacingS">
            <Tag tagType={type}>{type}</Tag>
          </Flex>
        </Flex>
      ))}
    </>
  ));
