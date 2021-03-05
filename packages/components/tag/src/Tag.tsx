import React from 'react';
import type { TagType, TagProps } from './types';
import { Container } from './Tag.styled';

const statusTagTypeMap: { [key: string]: TagType } = {
  published: 'positive',
  draft: 'warning',
  archived: 'negative',
  changed: 'primary',
  deleted: 'negative',
  new: 'primary-filled',
};

function Tag(props: TagProps, ref: React.Ref<HTMLDivElement>) {
  const {
    className,
    children,
    tagType = 'primary' as TagType,
    entityStatusType,
    testId = 'cf-ui-tag',
    ...otherProps
  } = props;

  const calculatedTagType = entityStatusType
    ? statusTagTypeMap[entityStatusType]
    : tagType;

  return (
    <Container
      className={className}
      ref={ref}
      data-test-id={testId}
      tagType={calculatedTagType}
      {...otherProps}
    >
      {children}
    </Container>
  );
}

const _Tag = React.forwardRef(Tag);
export { _Tag as Tag };
