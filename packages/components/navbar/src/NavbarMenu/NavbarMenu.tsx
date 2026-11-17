import React from 'react';
import { Menu, type MenuListProps, type MenuProps } from '@contentful/f36-menu';
import { mergeRefs } from '@contentful/f36-core';
import { Tooltip } from '@contentful/f36-tooltip';
import { getNavbarMenuStyles } from './NavbarMenu.styles';

export type NavbarMenuProps = {
  trigger: React.ReactElement<Record<string, unknown>, React.ElementType>;
  tooltip?: string;
  children?: React.ReactNode;
} & Pick<MenuListProps, 'testId'> &
  Pick<MenuProps, 'onOpen' | 'onClose'>;

export const NavbarMenu = (props: NavbarMenuProps) => {
  const {
    trigger,
    tooltip,
    children,
    testId = 'cf-ui-navbar-menu-list',
    onOpen,
    onClose,
  } = props;
  const styles = getNavbarMenuStyles();

  return (
    <Menu onOpen={onOpen} onClose={onClose}>
      <Menu.Trigger>
        {tooltip ? (
          <TooltipMenuTrigger
            {...trigger.props}
            trigger={trigger}
            label={tooltip}
          />
        ) : (
          trigger
        )}
      </Menu.Trigger>
      <Menu.List className={styles.menuList} testId={testId}>
        {children}
      </Menu.List>
    </Menu>
  );
};

const TooltipMenuTrigger = React.forwardRef<
  HTMLElement,
  {
    trigger: NavbarMenuProps['trigger'];
    label: string;
  }
>(({ trigger, label, ...props }, ref) => {
  const triggerRef = (Object.getOwnPropertyDescriptor(trigger.props, 'ref')
    ?.value ?? Object.getOwnPropertyDescriptor(trigger, 'ref')?.value) as
    React.Ref<HTMLElement> | undefined;

  return (
    <Tooltip
      content={label}
      placement="bottom"
      showDelay={600}
      usePortal
      withTriggerWrapper={false}
    >
      {React.cloneElement(trigger, {
        ...props,
        ref: mergeRefs(ref, triggerRef),
      })}
    </Tooltip>
  );
});

TooltipMenuTrigger.displayName = 'TooltipMenuTrigger';
