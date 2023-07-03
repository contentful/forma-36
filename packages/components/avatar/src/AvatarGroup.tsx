import React, { forwardRef } from 'react';
import { Flex, type CommonProps } from '@contentful/f36-core';
import { Menu } from '@contentful/f36-components';
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
    return (
      <>
        {React.Children.map(children, (child, index) => {
          if (index < 2) {
            return React.cloneElement(child as React.ReactElement, {
              key: `avatar-rendered-${index}`,
            });
          }
        })}
        <Menu>
          <Menu.Trigger>
            <span>{React.Children.count(children) - 2}</span>
          </Menu.Trigger>
          <Menu.List>
            {React.Children.toArray(children)
              .slice(2)
              .map((child, index) => {
                return (
                  <Menu.Item key={`avatar-${index}`}>
                    {child} {child.props.alt}
                  </Menu.Item>
                );
              })}
          </Menu.List>
        </Menu>
      </>
    );
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
    <Flex
      flexDirection="row"
      className={cx(className)}
      data-test-id={testId}
      ref={forwardedRef}
    >
      {renderAvatars(children)}
    </Flex>
  );
}
export const AvatarGroup = forwardRef(_AvatarGroup);
