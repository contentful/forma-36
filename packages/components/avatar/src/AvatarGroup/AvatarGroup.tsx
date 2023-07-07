import React, { forwardRef } from 'react';
import { Flex, type CommonProps } from '@contentful/f36-core';
import { Menu } from '@contentful/f36-menu';
import type { SpacingTokens } from '@contentful/f36-tokens';
import { type AvatarProps } from '../Avatar';
import { getAvatarGroupStyles } from './AvatarGroup.styles';

import { cx } from 'emotion';

export interface AvatarGroupProps extends CommonProps {
  spacing?: SpacingTokens;
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
    className,
  }: AvatarGroupProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const styles = getAvatarGroupStyles(size);

  const childrenArray = React.Children.toArray(children);
  const childrenToRenderCount = childrenArray.length > 3 ? 2 : 3;
  const childrenToRender = childrenArray.slice(0, childrenToRenderCount);
  const childrenInMenu = childrenArray.slice(childrenToRenderCount);

  return (
    <Flex
      flexDirection="row"
      testId={testId}
      ref={forwardedRef}
      className={className}
    >
      {childrenToRender.map((child, index) => {
        return React.cloneElement(child as React.ReactElement, {
          key: `avatar-rendered-${index}`,
          size: size,
          className: cx((child as React.ReactElement).props.className, {
            [styles.avatarStacked]: variant === 'stacked',
            [styles.avatarSpaced]: variant === 'spaced',
          }),
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
                  [styles.avatarSpaced]: variant === 'spaced',
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
    </Flex>
  );
}
export const AvatarGroup = forwardRef(_AvatarGroup);
