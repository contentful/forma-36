import React from 'react';
import { cx } from 'emotion';
import type { IconComponent } from '@contentful/f36-icon';
import { Icon } from '@contentful/f36-icon';
import { Tooltip, TooltipProps } from '@contentful/f36-tooltip';
import { Button } from '@contentful/f36-button';
import type { ButtonProps } from '@contentful/f36-button';

import { getButtonStyles } from './EditorToolbarButton.styles';

export interface EditorToolbarButtonProps
  extends Omit<ButtonProps<'button'>, 'icon'> {
  label: string;
  icon: IconComponent;
  tooltip?: string;
  tooltipPlacement?: TooltipProps['placement'];
  isActive?: boolean;
  isDisabled?: boolean;
}

export function EditorToolbarButton({
  className,
  label,
  testId = 'cf-ui-editor-toolbar-button',
  icon,
  tooltip,
  tooltipPlacement,
  isActive = false,
  isDisabled = false,
  ...otherProps
}: EditorToolbarButtonProps): React.ReactElement {
  const styles = getButtonStyles();
  return (
    <>
      <Tooltip
        content={!isDisabled ? tooltip : undefined}
        placement={tooltipPlacement}
      >
        <Button
          as="button"
          testId={testId}
          size="small"
          variant="transparent"
          className={cx(
            styles.root,
            isActive ? styles.active : styles.notActive,
            className,
          )}
          isDisabled={isDisabled}
          {...otherProps}
        >
          <Icon aria-label={label} as={icon} />
        </Button>
      </Tooltip>
    </>
  );
}
