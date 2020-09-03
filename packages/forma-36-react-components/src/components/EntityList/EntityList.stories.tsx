import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import EntityList from './EntityList';
import EntityListItem from './EntityListItem';

storiesOf('Components/EntityList/EntityList', module)
  .addParameters({
    propTypes: EntityList['__docgenInfo'],
    component: EntityList,
    subcomponents: { EntityListItem },
  })
  .add('default', () => (
    <EntityList className={text('className', '')}>
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
        status="published"
      />
      <EntityListItem
        title="Entry 3"
        description="Description"
        contentType="My content type"
        status="published"
      />
    </EntityList>
  ))
  .add('with Ref', () => {
    const ref = React.createRef<HTMLUListElement>();

    return (
      <EntityList className={text('className', '')} ref={ref}>
        <EntityListItem
          title="Entry 1"
          description="Description"
          contentType="My content type"
          status="published"
        />
      </EntityList>
    );
  });
