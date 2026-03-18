import React from 'react';
import { cx } from '@emotion/css';
import type { CommonProps, ExpandProps } from '@contentful/f36-core';

import { getEntityListStyles } from './EntityList.styles';

export interface EntityListProps extends CommonProps {
  children?: React.ReactNode;
}

function EntityListBase(
  props: ExpandProps<EntityListProps>,
  ref: React.Ref<HTMLUListElement>,
) {
  const styles = getEntityListStyles();

  return (
    <ul
      data-test-id={props.testId || 'cf-ui-entity-list'}
      ref={ref}
      className={cx(styles.root, props.className)}
      style={props.style}
    >
      {props.children}
    </ul>
  );
}

EntityListBase.displayName = 'EntityList';

export const EntityList = React.forwardRef(EntityListBase);
