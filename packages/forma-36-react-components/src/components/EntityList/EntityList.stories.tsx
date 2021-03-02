import React from 'react';

import { EntityList } from './EntityList';
import { EntityListItem } from './EntityListItem/EntityListItem';
import notes from './README.mdx';

export default {
  title: 'Components/EntityList/EntityList',
  component: EntityList,
  parameters: {
    propTypes: [EntityList['__docgenInfo']],
    notes,
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

export const Basic = () => (
  <EntityList>
    <EntityListItem
      title="Entry 1"
      description="Description"
      contentType="My content type"
      status="published"
    />
    <EntityListItem
      title="Entry 2"
      description="Description"
      contentType="My content type"
      status="draft"
    />
    <EntityListItem
      title="Entry 3"
      description="Description"
      contentType="My content type"
      status="archived"
    />
  </EntityList>
);

export const WithRef = () => {
  const ref = React.createRef<HTMLUListElement>();

  return (
    <EntityList ref={ref}>
      <EntityListItem
        title="Entry 1"
        description="Description"
        contentType="My content type"
        status="published"
      />
    </EntityList>
  );
};
