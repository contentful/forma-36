import React, { forwardRef } from 'react';
import { Stack, type CommonProps } from '@contentful/f36-core';
import { Menu } from '@contentful/f36-menu';
import { type AvatarProps } from '../Avatar';
import { getAvatarGroupStyles } from './AvatarGroup.styles';

import { cx } from 'emotion';

export interface AvatarGroupProps extends CommonProps {
  maxVisibleChildren?: number;
  size?: 'small' | 'medium';
  variant?: 'stacked' | 'spaced';
  children?:
    | React.ReactElement<AvatarProps>[]
    | React.ReactElement<AvatarProps>;
}

function _AvatarGroup(
  {
    children,
    size = 'medium',
    variant = 'spaced',
    testId = 'cf-ui-avatar-group',
    maxVisibleChildren = 3,
    className,
  }: AvatarGroupProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const styles = getAvatarGroupStyles(size);

  const childrenArray = React.Children.toArray(children);
  const childrenToRenderCount =
    childrenArray.length > maxVisibleChildren
      ? maxVisibleChildren - 1
      : maxVisibleChildren;
  const childrenToRender = childrenArray.slice(0, childrenToRenderCount);
  const childrenInMenu = childrenArray.slice(childrenToRenderCount);

  return (
    <Stack
      flexDirection="row"
      testId={testId}
      ref={forwardedRef}
      className={cx(className, {
        [styles.groupStacked]: variant === 'stacked',
        [styles.groupSpaced]: variant === 'spaced',
      })}
    >
      {childrenToRender.map((child, index) => {
        const zIndex = childrenToRender.length - index;

        return React.cloneElement(child as React.ReactElement, {
          key: `avatar-rendered-${index}`,
          size: size,
          className: cx((child as React.ReactElement).props.className, {
            [styles.avatarStacked]: variant === 'stacked',
          }),
          style: {
            zIndex,
          },
        });
      })}
      {childrenInMenu.length > 0 && (
        <Menu placement="bottom-end">
          <Menu.Trigger>
            <button
              type="button"
              className={cx(
                {
                  [styles.avatarStacked]: variant === 'stacked',
                },
                styles.moreAvatarsBtn,
              )}
            >
              {childrenInMenu.length}
            </button>
          </Menu.Trigger>
          <Menu.List>
            {childrenInMenu.map((child, index) => {
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
      )}
    </Stack>
  );
}
export const AvatarGroup = forwardRef(_AvatarGroup);
