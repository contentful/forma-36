import tokens from '@contentful/f36-tokens';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import React from 'react';

export type TagType =
  | 'primary'
  | 'primary-filled'
  | 'positive'
  | 'negative'
  | 'warning'
  | 'secondary'
  | 'muted';

type Status =
  | 'published'
  | 'draft'
  | 'archived'
  | 'changed'
  | 'deleted'
  | 'new';

const statusTagTypeMap: { [key: string]: TagType } = {
  published: 'positive',
  draft: 'warning',
  archived: 'negative',
  changed: 'primary',
  deleted: 'negative',
  new: 'primary-filled',
};

export interface TagProps {
  tagType?: TagType;
  style?: React.CSSProperties;
  className?: string;
  testId?: string;
  children: React.ReactNode;
  entityStatusType?: Status;
}

const tagTypeToStyles = ({ tagType }: { tagType: TagType }) => {
  switch (tagType) {
    case 'positive':
      return css`
        color: ${tokens.colorGreenBase};
        background-color: ${tokens.colorGreenLightest};
      `;
    case 'primary':
      return css`
        color: ${tokens.colorBlueBase};
        background-color: ${tokens.colorBlueLightest};
      `;
    case 'negative':
      return css`
        color: ${tokens.colorRedBase};
        background-color: ${tokens.colorRedLightest};
      `;
    case 'warning':
      return css`
        color: ${tokens.colorOrangeDark};
        background-color: #ffefd5; /* temporary hardcoded value until palette improvements */
      `;
    case 'secondary':
      return css`
        color: ${tokens.colorTextBase};
        background-color: ${tokens.colorElementLight};
      `;
    case 'muted':
      return css`
        color: ${tokens.colorTextMid};
        background-color: ${tokens.colorElementLightest};
      `;
    case 'primary-filled':
      return css`
        color: ${tokens.colorWhite};
        background-color: ${tokens.colorPrimary};
      `;
    default:
      return css``;
  }
};

const Container = styled.div<{ tagType: TagType }>`
  display: inline-block;
  font-family: ${tokens.fontStackPrimary};
  font-weight: ${tokens.fontWeightMedium};
  font-size: calc(1rem * (12 / ${tokens.fontBaseDefault}));
  line-height: 20px;
  max-height: 20px;
  text-transform: uppercase;
  letter-spacing: 0.06rem; /*move to tokens or update wide letter spacing token*/
  padding: 0 ${tokens.spacingXs};
  border-radius: ${tokens.borderRadiusSmall};

  ${tagTypeToStyles}
`;

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
