import React, { forwardRef } from 'react';
import { Box, Stack, type CommonProps } from '@contentful/f36-core';
import type { SpacingTokens } from '@contentful/f36-tokens';
import type { AvatarProps } from '../src';

import { cx } from 'emotion';

export enum Size {
  Small = '24px',
  Medium = '32px',
}

export enum Variant {
  Stacked = 'stacked',
  Spaced = 'spaced',
}

export interface AvatarGroupProps extends CommonProps {
  spacing?: SpacingTokens;
  className?: string;
  size?: Size;
  variant?: Variant;
  children?:
    | React.ReactElement<AvatarProps>[]
    | React.ReactElement<AvatarProps>;
}

const renderAvatars = (children) => {
  if (React.Children.count(children) > 3) {
    return React.Children.map(children, (child, index) => {
      if (index < 2) {
        return React.cloneElement(child as React.ReactElement, {
          key: `avatar-rendered-${index}`,
        });
      } else {
        return (
          <>
            {index === 2 && <div>{React.Children.count(children) - 2}</div>}
            <span key={`avatar-${index}`}>{child.props.alt}</span>
          </>
        );
      }
    });
  }
  return React.Children.map(children, (child, index) => {
    return React.cloneElement(child as React.ReactElement, {
      key: `avatar-rendered-${index}`,
    });
  });
};

function _AvatarGroup(
  {
    children,
    className,
    size = Size.Medium,
    variant = Variant.Spaced,
    testId = 'cf-ui.avatar-group',
  }: AvatarGroupProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  return (
    <Box
      spacing
      className={cx(className)}
      data-test-id={testId}
      ref={forwardedRef}
    >
      {renderAvatars(children)}
    </Box>
  );
}
export const AvatarGroup = forwardRef(_AvatarGroup);
