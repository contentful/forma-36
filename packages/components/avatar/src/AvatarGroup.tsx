import React, { forwardRef } from 'react';
import { Flex, type CommonProps } from '@contentful/f36-core';
import { Menu } from '@contentful/f36-menu';
import type { SpacingTokens } from '@contentful/f36-tokens';
import { type AvatarProps } from './Avatar';
import { getAvatarGroupStyles } from './AvatarGroup.styles';

import { cx } from 'emotion';

export type Variant = 'stacked' | 'spaced';

export interface AvatarGroupProps extends CommonProps {
  spacing?: SpacingTokens;
  className?: string;
  size?: 'small' | 'medium';
  variant?: Variant;
  children?:
    | React.ReactElement<AvatarProps>[]
    | React.ReactElement<AvatarProps>;
}

const renderAvatars = (
  children: AvatarGroupProps['children'],
  size: AvatarGroupProps['size'],
  variant: AvatarGroupProps['variant'],
) => {
  const styles = getAvatarGroupStyles(size);

  if (React.Children.count(children) > 3) {
    return (
      <>
        {React.Children.map(children, (child, index) => {
          if (index < 2) {
            return React.cloneElement(child as React.ReactElement, {
              key: `avatar-rendered-${index}`,
              size: size,
              className: cx((child as React.ReactElement).props.className, {
                [styles.avatarStacked]: variant === 'stacked',
                [styles.avatarSpaced]: variant === 'spaced',
              }),
            });
          }
        })}
        <Menu placement="bottom-end">
          <Menu.Trigger>
            <button
              type="button"
              className={cx(
                {
                  [styles.avatarStacked]: variant === 'stacked',
                  [styles.avatarSpaced]: variant === 'spaced',
                },
                styles.moreAvatarsBtn,
              )}
            >
              {React.Children.count(children) - 2}
            </button>
          </Menu.Trigger>
          <Menu.List>
            {React.Children.toArray(children)
              .slice(2)
              .map((child, index) => {
                return (
                  <Menu.Item
                    className={styles.moreAvatarsItem}
                    key={`avatar-${index}`}
                  >
                    {React.cloneElement(child as React.ReactElement, {
                      key: `avatar-menuitem-${index}`,
                      size: 'tiny',
                    })}
                    {(child as React.ReactElement).props.alt}
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
      size: size,
      className: cx((child as React.ReactElement).props.className, {
        [styles.avatarStacked]: variant === 'stacked',
        [styles.avatarSpaced]: variant === 'spaced',
      }),
    });
  });
};

function _AvatarGroup(
  {
    children,
    className,
    size = 'medium',
    variant = 'spaced',
    testId = 'cf-ui-avatar-group',
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
      {renderAvatars(children, size, variant)}
    </Flex>
  );
}
export const AvatarGroup = forwardRef(_AvatarGroup);
