import React, { forwardRef } from 'react';
import { cx } from '@emotion/css';

import { Stack, type CommonProps } from '@contentful/f36-core';
import { Menu } from '@contentful/f36-menu';

import { type AvatarProps } from '../Avatar';
import { getAvatarGroupStyles } from './AvatarGroup.styles';

export interface AvatarGroupProps extends CommonProps {
  children?:
    | React.ReactElement<AvatarProps>[]
    | React.ReactElement<AvatarProps>;
  maxVisibleChildren?: number;
  size?: 'small' | 'medium';
  variant?: 'stacked' | 'spaced';
}

function AvatarGroupBase(
  {
    children,
    className,
    maxVisibleChildren = 3,
    size = 'medium',
    testId = 'cf-ui-avatar-group',
    variant = 'spaced',
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
        if (!React.isValidElement(child)) {
          // eslint-disable-next-line no-console
          console.error(
            'Only valid React elements are supported - https://react.dev/reference/react/isValidElement',
          );
          return null;
        }
        const zIndex = childrenToRender.length - index;

        return React.cloneElement(child as React.ReactElement<AvatarProps>, {
          key: `avatar-rendered-${index}`,
          size: size,
          className: cx(
            (child as React.ReactElement<AvatarProps>).props.className,
            {
              [styles.avatarStacked]: variant === 'stacked',
            },
          ),
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
              +{childrenInMenu.length}
            </button>
          </Menu.Trigger>
          <Menu.List>
            {childrenInMenu.map((child, index) => {
              return (
                <Menu.Item
                  className={styles.moreAvatarsItem}
                  key={`avatar-${index}`}
                >
                  {React.cloneElement(
                    child as React.ReactElement<AvatarProps>,
                    {
                      key: `avatar-menuitem-${index}`,
                      size: 'tiny',
                      tooltipProps: undefined,
                    },
                  )}
                  {(child as React.ReactElement<AvatarProps>).props.alt}
                </Menu.Item>
              );
            })}
          </Menu.List>
        </Menu>
      )}
    </Stack>
  );
}

AvatarGroupBase.displayName = 'AvatarGroup';
export const AvatarGroup = forwardRef(AvatarGroupBase);
