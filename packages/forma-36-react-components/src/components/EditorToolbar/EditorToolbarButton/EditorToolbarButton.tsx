import React from 'react';
import cn from 'classnames';
import type { MouseEventHandler } from 'react';

import { IconButton } from '../../IconButton';
import { Tooltip } from '../../Tooltip';
import styles from './EditorToolbarButton.css';
import type { IconButtonProps } from '../../IconButton';
import type { IconType } from '../../Icon';

export interface EditorToolbarButtonProps {
  label: string;
  icon: IconType;
  tooltip?: string;
  iconButtonProps?: Partial<IconButtonProps>;
  isActive?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler;
  withDropdown?: boolean;
  className?: string;
  testId?: string;
}

export function EditorToolbarButton({
  className,
  label,
  testId = 'cf-ui-editor-toolbar-button',
  icon,
  tooltip,
  iconButtonProps,
  isActive = false,
  disabled = false,
  onClick,
  withDropdown = false,
  ...otherProps
}: EditorToolbarButtonProps): React.ReactElement {
  const classNames = cn(styles['EditorToolbarButton'], className, {
    [styles['EditorToolbarButton--is-active']]: isActive,
  });

  return (
    <React.Fragment>
      <Tooltip content={!disabled ? tooltip : undefined}>
        <IconButton
          {...{ iconProps: { icon } }}
          testId={testId}
          buttonType="secondary"
          label={label}
          className={classNames}
          onClick={!disabled ? onClick : () => {}}
          disabled={disabled}
          withDropdown={withDropdown}
          {...iconButtonProps}
          {...otherProps}
        />
      </Tooltip>
    </React.Fragment>
  );
}
