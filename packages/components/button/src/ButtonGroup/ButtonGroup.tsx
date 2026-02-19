import { cx } from '@emotion/css';
import React from 'react';
import { Box, Stack, type ExpandProps } from '@contentful/f36-core';
import getStyles from './ButtonGroup.styles';
import type { ButtonGroupProps } from './types';

function ButtonGroupBase(
  props: ExpandProps<ButtonGroupProps>,
  ref: React.Ref<HTMLDivElement>,
) {
  const {
    variant = 'merged',
    withDivider,
    testId = 'cf-ui-button-group',
    children,
    className,
    spacing,
  } = props;
  const styles = getStyles({ withDivider });

  if (variant === 'spaced') {
    return (
      <Stack
        className={className}
        isInline
        flexDirection="row"
        testId={testId}
        ref={ref}
        spacing={spacing}
      >
        {children}
      </Stack>
    );
  }

  return (
    <Box
      testId={testId}
      ref={ref}
      className={cx(styles.buttonGroup, className)}
    >
      {React.Children.map(children, (child, key) => {
        if (!React.isValidElement(child)) {
          return null;
        }

        // Only pass className if child.props has className property
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { className: childClassName, ...childProps }: any =
          child.props || {};

        const isIconButtonWithTooltip = Boolean(childProps?.withTooltip);

        let finalClassName = cx(styles.groupContent, childClassName ?? '');
        let combinedTooltipProps = childProps.tooltipProps;

        // When the child is an IconButton with tooltip,
        // we need to pass the groupContent styles to the tooltip target wrapper,
        // otherwise the styling does not get applied to the buttons
        if (isIconButtonWithTooltip) {
          finalClassName = childClassName ?? '';

          combinedTooltipProps = {
            ...childProps.tooltipProps,
            targetWrapperClassName: cx(
              styles.groupContent,
              childProps.tooltipProps?.targetWrapperClassName ?? '',
            ),
          };
        }

        return React.cloneElement(child, {
          ...childProps,
          ...(isIconButtonWithTooltip
            ? { tooltipProps: combinedTooltipProps }
            : {}),
          key,
          className: finalClassName,
        });
      })}
    </Box>
  );
}

ButtonGroupBase.displayName = 'ButtonGroup';

export const ButtonGroup = React.forwardRef(ButtonGroupBase);
